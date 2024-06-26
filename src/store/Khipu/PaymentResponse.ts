interface PaymentResponseModel {
    payment_id: string
    payment_url: string
    simplified_transfer_url: string
    transfer_url: string
    app_url: string
    ready_for_terminal: boolean
}

export class PaymentResponse implements PaymentResponseModel {
    payment_id: string
    payment_url: string
    simplified_transfer_url: string
    transfer_url: string
    app_url: string
    ready_for_terminal: boolean

    constructor(
        payment_id: string,
        payment_url: string,
        simplified_transfer_url: string,
        transfer_url: string,
        app_url: string,
        ready_for_terminal: boolean
    ) {
        this.payment_id = payment_id
        this.payment_url = payment_url
        this.simplified_transfer_url = simplified_transfer_url
        this.transfer_url = transfer_url
        this.app_url = app_url
        this.ready_for_terminal = ready_for_terminal
    }
}
