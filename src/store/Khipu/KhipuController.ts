import { Khipu } from './Khipu'
import { PaymentResponse } from './PaymentResponse'
import { PaymentRequest } from './PaymentRequest'
import { HttpMethod } from '@/utils/APIService'
export class KhipuController {
    public static invoke(paymentId: string) {
        const callback = (result: any) => {
            console.log(`calback invoked:`, result)
        }
        const options = {
            mountElement: document.getElementById('khenshin-web-root'),
            modal: true,
            modalOptions: {
                maxWidth: 450,
                maxHeight: 860
            },
            options: {
                style: {
                    primaryColor: '#8347AD',
                    fontFamily: 'Roboto'
                },
                skipExitPage: false
            }
        }

        const khipu = new Khipu()
        khipu.startOperation(paymentId, callback, options)
    }

    public static async createPayment(params: PaymentRequest): Promise<PaymentResponse> {
        const currentDate: Date = new Date()
        const futureDate: Date = new Date(currentDate.getTime() + 60 * 60 * 1000)
        const isoExpireDate: string = futureDate.toISOString()

        const resp = await fetch(`https://payment-api.khipu.com/v3/payments`, {
            method: HttpMethod.POST,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '63498648-dab5-42d8-9f71-a2da7ac5e997'
            },
            body: JSON.stringify({
                amount: params.amount,
                currency: params.currency,
                subject: params.subject,
                return_url: params.return_url,
                cancel_url: params.cancel_url,
                notify_url: params.notify_url,
                picture_url:
                    'https://lametamorfosisdelalma.s3.sa-east-1.amazonaws.com/la-revolucion-simbolica-cut.jpg',
                expires_date: isoExpireDate,
                notify_api_version: '3.0'
            })
        })

        const response: PaymentResponse = await resp.json()
        return response
    }
}
