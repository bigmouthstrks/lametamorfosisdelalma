export class Khipu {
    private static readonly JS_KHIPU_URL = 'https://js.khipu.com'
    private static readonly WS_KHIPU_URL = 'https://khenshin-ws-oci-scl.khipu.com'

    private postMessageSent: boolean = false
    private thirdPartyCookiesEnabled: boolean = false
    private paymentDescriptor: string
    private settings: {
        mountElement: HTMLDivElement | null
        options: {
            skipExitPage: boolean
            modal: boolean
            style?: {
                theme?: string
            }
        }
        modalOptions?: {
            maxWidth: number
            maxHeight: number
        }
        uiType?: string
        locale?: string
        sessionCookieName?: string
        sessionCookieValue?: string
        skipFP?: boolean
        closeCallback?: (url?: string) => void
    }
    private mountElement: HTMLDivElement
    private iframeElement: HTMLIFrameElement
    private successCallback: (response: any) => void
    private warningCallback: (response: any) => void
    private failureCallback: (response: any) => void
    private mustContinueCallback: (response: any) => void
    private modal: KhipuModal

    constructor() {
        this.postMessageListener()
    }

    private getDescriptorForLogs = (paymentDescriptor: string | null): string => {
        if (paymentDescriptor == null) {
            return 'unknown'
        }
        return paymentDescriptor.length > 12
            ? `${paymentDescriptor.substring(0, 12)}...`
            : paymentDescriptor
    }

    private postMessageListener(): void {
        const listener = (event: MessageEvent): void => {
            try {
                const response = { paymentDescriptor: this.paymentDescriptor, ...event.data }
                switch (response.type) {
                    case 'OPERATION_SUCCESS':
                        this.successCallback(response)
                        break
                    case 'OPERATION_WARNING':
                        this.warningCallback(response)
                        break
                    case 'OPERATION_MUST_CONTINUE':
                        this.mustContinueCallback(response)
                        break
                    case 'OPERATION_FAILURE':
                        this.failureCallback(response)
                        break
                    case 'EXIT_URL':
                        this.closeModal(response.exitUrl)
                        break
                    case 'CLOSE_MODAL':
                        this.failureCallback({
                            paymentDescriptor: this.paymentDescriptor,
                            operationId: this.paymentDescriptor,
                            type: 'OPERATION_FAILURE',
                            title: 'No se pudo completar la transferencia',
                            body: 'Por favor, intÃ©ntalo mÃ¡s tarde',
                            failureReason: 'USER_CANCELED',
                            events: []
                        })
                        this.closeModal()
                        break
                    case 'SUCCESS_MODAL':
                        this.closeModal()
                        break
                    case 'RETRY_MODAL':
                        this.restart()
                        break
                    default:
                        console.error(
                            `postMessageListener - Unhandled response: ${JSON.stringify(response)}`
                        )
                        return
                }
            } catch (error) {
                console.error('postMessageListener - Error', error)
                return
            }
            if (this.settings.options.skipExitPage === true) {
                this.closeModal()
            }
        }
        window.addEventListener('message', listener, false)
    }

    private postMessageToIframe(message: any): void {
        if (this.postMessageSent) {
            console.warn(
                `[id: ${this.getDescriptorForLogs(message.paymentDescriptor)}] post message already sent, aborting`
            )
            return
        }
        console.log(
            `[id: ${this.getDescriptorForLogs(message.paymentDescriptor)}] posting to iframe`,
            this.iframeElement
        )
        if (!this.iframeElement) {
            console.error(
                `[id: ${this.getDescriptorForLogs(message.paymentDescriptor)}] there is no khenshin iframe, aborting`
            )
            return
        }
        this.iframeElement.contentWindow.postMessage(message, '*')
        console.log(
            `[id: ${this.getDescriptorForLogs(message.paymentDescriptor)}] posted message to iframe`,
            this.iframeElement
        )
        this.postMessageSent = true
        setTimeout(() => {
            console.log(
                `[id: ${this.getDescriptorForLogs(message.paymentDescriptor)}] clearing postMessageSent`
            )
            this.postMessageSent = false
        }, 10000)
    }

    private renderIframe(): void {
        if (document.querySelector('iframe[id="khipu-web-frame"]') && this.iframeElement) {
            return
        }
        const params = {
            paymentDescriptor: this.paymentDescriptor,
            style: this.settings.options.style || {},
            skipExitPage: this.settings.options.skipExitPage,
            modal: this.settings.modal,
            type: 'khipu-iframe-request',
            uiType: this.settings.uiType,
            locale: this.settings.locale
        }
        if (this.settings.sessionCookieName != null && this.settings.sessionCookieValue != null) {
            params.sessionCookieName = this.settings.sessionCookieName
            params.sessionCookieValue = this.settings.sessionCookieValue
        }
        this.iframeElement = document.createElement('iframe')
        this.iframeElement.id = 'khipu-web-frame'
        this.iframeElement.src =
            Khipu.JS_KHIPU_URL + (this.settings.options.style.theme === 'dark' ? '?bg=000' : '')
        this.iframeElement.setAttribute('allowFullscreen', '')
        this.iframeElement.allow = 'clipboard-read; clipboard-write'
        this.iframeElement.addEventListener('load', () => {
            try {
                setTimeout(() => {
                    this.postMessageToIframe({
                        ...params,
                        stfp: undefined,
                        thirdPartyCookiesEnabled: this.thirdPartyCookiesEnabled
                    })
                }, 3000)
                // @ts-ignore
                window._3pc1 = () => {
                    console.log(
                        `[id: ${this.getDescriptorForLogs(params.paymentDescriptor)}] 3pc1 - done`
                    )
                    this.load3pc2()
                }
                // @ts-ignore
                window._3pc2 = (cookieSuccess: boolean) => {
                    console.log(
                        `[id: ${this.getDescriptorForLogs(params.paymentDescriptor)}] 3pc2 - done ${cookieSuccess}`
                    )
                    this.thirdPartyCookiesEnabled = cookieSuccess
                    if (this.settings.skipFP !== undefined && this.settings.skipFP) {
                        this.postMessageToIframe({
                            ...params,
                            stfp: undefined,
                            thirdPartyCookiesEnabled: this.thirdPartyCookiesEnabled
                        })
                    } else {
                        this.loadUDFP()
                    }
                }
                // @ts-ignore
                window[Symbol.for('udc_cb')] = ({ fp, err }: { fp: any; err: any }) => {
                    if (err || !fp || fp._ctx.isBot) {
                        fp = undefined
                    } else {
                        fp = {
                            // add schema
                            $schema: 'https://api.undetect.io/public/fingerprint.schema.json',
                            ...fp
                        }
                    }
                    this.postMessageToIframe({
                        ...params,
                        stfp: fp,
                        thirdPartyCookiesEnabled: this.thirdPartyCookiesEnabled
                    })
                }
                this.load3pc1()
            } catch (e) {
                this.postMessageToIframe({
                    ...params,
                    stfp: undefined,
                    thirdPartyCookiesEnabled: this.thirdPartyCookiesEnabled
                })
            }
        })
    }

    private load3pc1(): void {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = Khipu.WS_KHIPU_URL + '/3pc1'
        this.mountElement.appendChild(script)
    }

    private load3pc2(): void {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = Khipu.WS_KHIPU_URL + '/3pc2'
        this.mountElement.appendChild(script)
    }

    private loadUDFP(): void {
        const udfp = document.createElement('script')
        udfp.type = 'text/javascript'
        udfp.src = 'https://px.srvcdn.net/udc/dad8a1ee.js'
        this.mountElement.appendChild(udfp)
    }

    private mountIframe(): void {
        this.mountElement.appendChild(this.iframeElement)
    }

    private umountIframe(): void {
        if (this.iframeElement) {
            this.mountElement.removeChild(this.iframeElement)
            this.iframeElement = undefined
        }
    }

    private umountModal(): void {
        if (this.iframeElement) {
            this.modal.close()
            this.iframeElement = undefined
        }
    }

    private getPublicToken(
        linkToken: string,
        callback: (result: any) => void,
        settings?: any
    ): string {
        if (linkToken === undefined) {
            throw new Error('linkToken must be defined')
        }
        if (callback === undefined) {
            throw new Error('callback must be defined')
        }
        const defaultSettings = { modalOptions: { maxWidth: 450, maxHeight: 860 } }
        const forcedSettings = {
            uiType: 'opendata',
            options: {
                ...(settings ? settings.options : {}),
                skipExitPage: true
            }
        }
        const finalSettings = {
            ...defaultSettings,
            ...settings,
            ...forcedSettings
        }
        const successCallback = (result: any) => {
            callback({
                OperationId: result.operationId,
                Status: 'OK',
                Data: {
                    PublicToken: result.resultMessage
                },
                AdditionalInformation: null,
                Error: null,
                LifeSpan: null
            })
        }
        const failureCallback = (result: any) => {
            let errorCode = ''
            let description = '' + result.body
            const m = description.match(/^(E\d+): (.*)$/)
            if (m !== null && m.length === 3) {
                errorCode = m[1]
                description = m[2]
            }
            callback({
                OperationId: result.operationId,
                Status: 'ERROR',
                Data: null,
                AdditionalInformation: null,
                Error: {
                    Code: errorCode,
                    Type: 'DO_NOT_RETRY',
                    Description: description
                },
                LifeSpan: null
            })
        }
        const warningCallback = (result: any) => {
            let errorCode = ''
            let description = '' + result.body
            const m = description.match(/^(E\d+): (.*)$/)
            if (m !== null && m.length === 3) {
                errorCode = m[1]
                description = m[2]
            }
            callback({
                OperationId: result.operationId,
                Status: 'ERROR',
                Data: null,
                AdditionalInformation: null,
                Error: {
                    Code: errorCode,
                    Type: 'DO_NOT_RETRY',
                    Description: description
                },
                LifeSpan: null
            })
        }
        this.init(finalSettings, successCallback, warningCallback, failureCallback)
        return this.start(linkToken)
    }

    public startOperation(
        operationIdOrDescriptor: string,
        callback: (result: any) => void,
        settings?: any
    ): string {
        if (operationIdOrDescriptor === undefined) {
            throw new Error('operationIdOrDescriptor must be defined')
        }
        if (callback === undefined) {
            throw new Error('callback must be defined')
        }
        const defaultSettings = { modalOptions: { maxWidth: 450, maxHeight: 860 } }
        const forcedSettings = { uiType: 'payment' }
        const finalSettings = {
            ...defaultSettings,
            ...settings,
            ...forcedSettings
        }
        const successCallback = (result: any) => {
            callback({
                operationId: result.operationId,
                exitTitle: result.title,
                exitMessage: result.body,
                exitUrl: result.exitUrl,
                result: 'OK',
                events: result.events
            })
        }
        const failureCallback = (result: any) => {
            callback({
                operationId: result.operationId,
                exitTitle: result.title,
                exitMessage: result.body,
                exitUrl: result.exitUrl,
                result: 'ERROR',
                events: result.events,
                failureReason: result.reason || result.failureReason
            })
        }
        const warningCallback = (result: any) => {
            callback({
                operationId: result.operationId,
                exitTitle: result.title,
                exitMessage: result.body,
                exitUrl: result.exitUrl,
                result: 'WARNING',
                events: result.events,
                failureReason: result.reason || result.failureReason
            })
        }
        const mustContinueCallback = (result: any) => {
            callback({
                operationId: result.operationId,
                exitTitle: result.title,
                exitMessage: result.body,
                exitUrl: result.exitUrl,
                continueUrl: `https://khipu.com/payment/info/${result.operationId}`,
                result: 'CONTINUE',
                events: result.events,
                failureReason: result.reason || result.failureReason
            })
        }
        this.init(
            finalSettings,
            successCallback,
            warningCallback,
            failureCallback,
            mustContinueCallback
        )
        return this.start(operationIdOrDescriptor)
    }

    private start(paymentDescriptor: string): string {
        if (!paymentDescriptor) {
            console.error('Invalid paymentDescriptor ', paymentDescriptor)
            return ''
        }
        this.paymentDescriptor = paymentDescriptor
        if (this.iframeElement) {
            this.umountIframe()
        }
        this.renderIframe()
        if (this.settings.modal !== true) {
            this.mountIframe()
        } else {
            this.modal = new KhipuModal({
                mountElement: this.mountElement,
                contentElement: this.iframeElement,
                ...this.settings.modalOptions,
                theme: this.settings.options.style.theme
            })
        }
        return this.paymentDescriptor
    }

    private restart(): void {
        this.close()
        this.start(this.paymentDescriptor)
    }

    private closeModal(url?: string): void {
        this.close()
        if (this.settings.closeCallback !== undefined) {
            this.settings.closeCallback(url)
        } else if (url !== undefined) {
            window.location.assign(url)
        }
    }

    private close(): void {
        if (this.settings.modal !== true) {
            this.umountIframe()
        } else {
            this.umountModal()
        }
    }

    public init(
        settings: {
            mountElement: HTMLDivElement | null
            options: {
                skipExitPage: boolean
                modal: boolean
                style?: {
                    theme?: string
                }
            }
            modalOptions?: {
                maxWidth: number
                maxHeight: number
            }
            uiType?: string
            locale?: string
            sessionCookieName?: string
            sessionCookieValue?: string
            skipFP?: boolean
            closeCallback?: (url?: string) => void
        },
        successCallback: (response: any) => void,
        warningCallback: (response: any) => void,
        failureCallback: (response: any) => void,
        mustContinueCallback: (response: any) => void = null
    ): void {
        const defaultSettings = {
            mountElement: null,
            options: { skipExitPage: false, modal: false }
        }
        this.settings = {
            ...defaultSettings,
            ...settings
        }
        if (this.settings.mountElement) {
            this.mountElement = this.settings.mountElement
        } else {
            this.mountElement = document.createElement('div')
            this.mountElement.id = 'khipu-web-root'
            document.body.appendChild(this.mountElement)
            this.settings.modal = true
        }
        this.successCallback = successCallback
        this.warningCallback = warningCallback
        this.failureCallback = failureCallback
        this.mustContinueCallback =
            mustContinueCallback !== null ? mustContinueCallback : warningCallback
    }
}

class KhipuModal {
    private readonly contentElement: HTMLIFrameElement
    private readonly mountElement: HTMLDivElement
    private readonly maxWidth: number
    private readonly maxHeight: number
    private readonly cssBuilder: KhipuCssBuilder
    private readonly theme: string
    private modalElement: HTMLDivElement

    constructor(options: {
        contentElement: HTMLIFrameElement
        mountElement: HTMLDivElement
        maxWidth: number
        maxHeight: number
        theme?: string
    }) {
        this.contentElement = options.contentElement
        this.mountElement = options.mountElement
        this.maxWidth = options.maxWidth
        this.maxHeight = options.maxHeight
        this.cssBuilder = new KhipuCssBuilder('khipu-modal-style')
        this.theme = options.theme ?? 'light'
        this.render()
        this.mount()
    }

    public close(): void {
        this.umount()
        this.cssBuilder.destroy()
    }

    private umount(): void {
        this.mountElement.removeChild(this.modalElement)
    }

    private mount(): void {
        this.cssBuilder.build()
        this.mountElement.appendChild(this.modalElement)
    }

    private render(): void {
        const modalElement = document.createElement('div')
        modalElement.classList.add('khipu-modal')
        const overlayElement = document.createElement('div')
        overlayElement.classList.add('khipu-overlay')
        const modalContentElement = document.createElement('div')
        modalContentElement.classList.add('khipu-modal-content')
        modalContentElement.appendChild(this.contentElement)
        modalElement.appendChild(overlayElement)
        modalElement.appendChild(modalContentElement)
        this.modalElement = modalElement
        this.configureCss()
    }

    private configureCss(): void {
        this.cssBuilder
            .addProperties('.khipu-modal', {
                position: 'fixed',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                'z-index': '990'
            })
            .addProperties('.khipu-modal .khipu-overlay', {
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.65)',
                'z-index': '995'
            })
            .addProperties('.khipu-modal .khipu-modal-content', {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden',
                background: this.theme === 'dark' ? '#000' : '#fff',
                padding: '0',
                width: '98%',
                height: '98%',
                'max-width': `${this.maxWidth || 450}px`,
                'max-height': `${this.maxHeight || 860}px`,
                'box-sizing': 'border-box',
                'box-shadow': '0 1px 5px rgba(0, 0, 0, 0.7)',
                'border-radius': '4px',
                'z-index': '999'
            })
            .addProperties('.khipu-modal .khipu-modal-content iframe', {
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                margin: '0',
                padding: '0',
                border: '0',
                overflow: 'hidden',
                transition: 'all .5s linear'
            })
    }
}

class KhipuCssBuilder {
    private readonly name: string
    private cssConfiguration: { [label: string]: { [key: string]: string } } = {}
    private styleElement: HTMLStyleElement

    constructor(name: string) {
        this.name = name
    }

    public addProperty(label: string, key: string, value: string): KhipuCssBuilder {
        const cssProperties = this.cssConfiguration[`${label}`] || {}
        cssProperties[key] = value
        this.cssConfiguration[`${label}`] = cssProperties
        return this
    }

    public addProperties(label: string, cssProperties: { [key: string]: string }): KhipuCssBuilder {
        Object.keys(cssProperties).forEach((propertyKey) => {
            this.addProperty(label, propertyKey, cssProperties[propertyKey])
        })
        return this
    }

    private renderCssProperty(key: string, value: string): string {
        return `${key}: ${value};`
    }

    private renderCssPropertyList(cssProperties: { [key: string]: string }): string {
        return Object.keys(cssProperties)
            .map((propertyKey) => this.renderCssProperty(propertyKey, cssProperties[propertyKey]))
            .join(' ')
    }

    private renderCssConfiguration(
        label: string,
        cssProperties: { [key: string]: string }
    ): string {
        return `${label} { ${this.renderCssPropertyList(cssProperties)} }`
    }

    private render(): string {
        return Object.keys(this.cssConfiguration)
            .map((label) => this.renderCssConfiguration(label, this.cssConfiguration[`${label}`]))
            .join('\n')
    }

    private mount(): void {
        if (document.querySelector(`style[id="${this.name}"]`)) {
            return
        }
        this.styleElement = document.createElement('style')
        this.styleElement.id = this.name
        this.styleElement.appendChild(document.createTextNode(this.render()))
        document.querySelector('body').appendChild(this.styleElement)
    }

    private umount(): void {
        document.querySelector('body').removeChild(this.styleElement)
    }

    public build(): void {
        this.mount()
    }

    public destroy(): void {
        this.umount()
    }
}
