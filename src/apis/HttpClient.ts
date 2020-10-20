import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions extends AxiosRequestConfig {
    url?: string;
    path?: string;
}

class HttpClient {
    private url: string
    private headers: Headers

    constructor() {
        this.url = ''
        this.headers = new Headers({ Accept: "application/json" });
    }

    public request = async (options: RequestOptions) => {
        try {
            if (options.url) {
                this.url = options.url
            }

            const { status = 200, statusText, data }: AxiosResponse = await axios({
                ...options,
                url: options.path ? `${this.url}/${options.path}` : this.url,
                headers: this.headers,
            });

            const isError = status < 200 || status >= 300;

            return { status, json: isError ? this.errorHandler(statusText) : data };
        } catch (err) {
            return { status: 500, json: this.errorHandler(err) }
        }
    }

    private successHandler = () => {

    }

    private errorHandler = (statusText: string) => {
        throw new Error(statusText);
    }
}

export default new HttpClient()