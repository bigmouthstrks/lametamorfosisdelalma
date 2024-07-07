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

    static async returningRequest<T>(
        url: string,
        method: HttpMethod,
        onFailure: FailureCallback,
        headers?: any,
        body?: any
    ): Promise<T> {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json',
                    Authorization:
                        'Bearer vercel_blob_rw_5SKeeCZ6ao7d1LIe_aAMwpm8CMlFgOgi7okLTXvCYShWKCk',
                    'cache-control': 'public, max-age=31536000, s-maxage=300',
                    'content-disposition': 'inline; filename="products.json"'
                },
                body: JSON.stringify(body)
            })

            if (!response.ok) throw new Error('Error in service layer')
            return (await response.json()) as T
        } catch (error) {
            onFailure(error as Error)
            throw error
        }
    }
}
