export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export type SuccessCallback<T> = (response: T) => void
export type FailureCallback = (error: Error) => void

export class APIService {
    static async request<T>(
        url: string,
        method: HttpMethod,
        onSuccess: SuccessCallback<T>,
        onFailure: FailureCallback,
        body?: any
    ): Promise<void> {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })

            if (!response.ok) throw new Error('Error in service layer')
            if (onSuccess) onSuccess(await response.json())
        } catch (error) {
            onFailure(error as Error)
        }
    }
}
