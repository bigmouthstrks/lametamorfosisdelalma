import axios, { type AxiosRequestConfig } from 'axios'

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
            const config: AxiosRequestConfig = {
                url,
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: body
            }

            const response = await axios(config)

            if (onSuccess) onSuccess(response.data as T)
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
    ): Promise<T | undefined> {
        try {
            const config: AxiosRequestConfig = {
                url,
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'cache-control': 'public, max-age=31536000, s-maxage=300',
                    'content-disposition': 'inline; filename="products.json"',
                    ...headers
                },
                data: body
            }

            const response = await axios(config)
            return response.data as T
        } catch (error) {
            onFailure(error as Error)
            throw error
        }
    }
}
