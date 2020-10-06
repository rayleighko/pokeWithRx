import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions extends AxiosRequestConfig {
    uri?: string;
    path: string;
}

const defaultPort = parseInt(process.env.REACT_APP_DEFAULT_API_PORT || '4000');

const apis: {
    [key: string]: {
        url: string,
        port: number,
    }
} = {
    production: {
        url: "https://pokeapi.co/api/v2/",
        port: defaultPort,
    },
    development: {
        url: "https://pokeapi.co/api/v2/",
        port: defaultPort,
    },
    local: {
        url: "https://pokeapi.co/api/v2/",
        port: defaultPort,
    },
    test: {
        url: "https://pokeapi.co/api/v2/",
        port: defaultPort,
    }
}

class HttpClient {
    private uri: string
    private mode: string
    private headers: Headers
    private token: string | null

    constructor() {
        this.mode = process.env.NODE_ENV || 'local'
        this.uri = apis[this.mode].url
        this.headers = new Headers({ Accept: "application/json" });
        this.token = localStorage.getItem("token");
    }

    public request = async (options: RequestOptions) => {
        if (this.token) this.headers.set("Authorization", `Bearer ${this.token}`);

        try {
            const { status = 200, statusText, data }: AxiosResponse = await axios({
                ...options,
                url: options.uri ? options.uri : `${this.uri}/${options.path}`,
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