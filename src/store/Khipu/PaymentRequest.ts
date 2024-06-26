interface PaymentRequestModel {
    amount: number
    currency: string
    subject: string
    transaction_id?: string
    custom?: string
    body?: string
    bank_id?: string
    return_url?: string
    cancel_url?: string
    picture_url?: string
    notify_url?: string
    contract_url?: string
    notify_api_version?: string
    expires_date?: string
    send_email?: boolean
    payer_name?: string
    payer_email?: string
    send_reminders?: boolean
    responsible_user_email?: string
    fixed_payer_personal_identifier?: string
    integrator_fee?: string
    collect_account_uuid?: string
    confirm_timeout_date?: string
    mandatory_payment_method?: string
    psp_client_merchant_name?: string
}

export class PaymentRequest implements PaymentRequestModel {
    amount: number
    currency: string
    subject: string
    transaction_id?: string
    custom?: string
    body?: string
    bank_id?: string
    return_url?: string
    cancel_url?: string
    picture_url?: string
    notify_url?: string
    contract_url?: string
    notify_api_version?: string
    expires_date?: string
    send_email?: boolean
    payer_name?: string
    payer_email?: string
    send_reminders?: boolean
    responsible_user_email?: string
    fixed_payer_personal_identifier?: string
    integrator_fee?: string
    collect_account_uuid?: string
    confirm_timeout_date?: string
    mandatory_payment_method?: string
    psp_client_merchant_name?: string

    constructor(
        amount: number,
        currency: string,
        subject: string,
        transaction_id?: string,
        custom?: string,
        body?: string,
        bank_id?: string,
        return_url?: string,
        cancel_url?: string,
        picture_url?: string,
        notify_url?: string,
        contract_url?: string,
        notify_api_version?: string,
        expires_date?: string,
        send_email?: boolean,
        payer_name?: string,
        payer_email?: string,
        send_reminders?: boolean,
        responsible_user_email?: string,
        fixed_payer_personal_identifier?: string,
        integrator_fee?: string,
        collect_account_uuid?: string,
        confirm_timeout_date?: string,
        mandatory_payment_method?: string,
        psp_client_merchant_name?: string
    ) {
        this.amount = amount
        this.currency = currency
        this.subject = subject
        this.transaction_id = transaction_id
        this.custom = custom
        this.body = body
        this.bank_id = bank_id
        this.return_url = return_url
        this.cancel_url = cancel_url
        this.picture_url = picture_url
        this.notify_url = notify_url
        this.contract_url = contract_url
        this.notify_api_version = notify_api_version
        this.expires_date = expires_date
        this.send_email = send_email
        this.payer_name = payer_name
        this.payer_email = payer_email
        this.send_reminders = send_reminders
        this.responsible_user_email = responsible_user_email
        this.fixed_payer_personal_identifier = fixed_payer_personal_identifier
        this.integrator_fee = integrator_fee
        this.collect_account_uuid = collect_account_uuid
        this.confirm_timeout_date = confirm_timeout_date
        this.mandatory_payment_method = mandatory_payment_method
        this.psp_client_merchant_name = psp_client_merchant_name
    }
}
