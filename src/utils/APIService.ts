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
                mode: 'cors',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
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
