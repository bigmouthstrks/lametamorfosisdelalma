import { Khipu } from './Khipu'
import { PaymentResponse } from './PaymentResponse'
import { PaymentRequest } from './PaymentRequest'

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
        const resp = await fetch(`https://payment-api.khipu.com/v3/payments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '36899be1-4931-4e4d-9a7a-f6952b94af92'
            },
            body: JSON.stringify({
                amount: params.amount,
                currency: params.currency,
                subject: params.subject
            })
        })
        const response: PaymentResponse = await resp.json()
        return response
    }
}
