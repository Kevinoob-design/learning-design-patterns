import { IHttpServiceAdapter } from "../../types"

import http, { RequestOptions, OutgoingHttpHeaders } from "http"

import { URL } from "url"

abstract class Http implements IHttpServiceAdapter {

    static readonly get = async <T>(path: string) => await this.request<T>(path, "GET")

    static readonly post = async<T>(path: string, body?: object) => {

        const bodyStringify = JSON.stringify(body)

        const headers = {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(bodyStringify)
        }

        return await this.request<T>(path, "POST", bodyStringify, headers)
    }

    static readonly put = async<T>(path: string, body?: object) => {

        return await Promise.resolve()
    }

    static readonly delete = async<T>(path: string, body?: object) => {

        return await Promise.resolve()
    }

    private static readonly request = <T>(url: string, method: string, body: string = "", headers: OutgoingHttpHeaders = {}) => {

        return new Promise<T>((resolve, reject) => {

            const Url = new URL(url)

            const options: RequestOptions = {

                host: Url.host,
                path: Url.pathname,
                method: method,
                headers: headers,
            }

            if (Url.port) options.port = Url.port

            const client = http.request(options, (res => {

                res.setEncoding("utf8")

                let chunks = ""

                res.on("data", (chunk => {

                    chunks = chunks.concat(chunk)
                }))

                res.on("end", () => {

                    if (res.statusCode > 400) return reject({ success: false, data: chunks })

                    const data = JSON.parse(chunks)

                    resolve(data)
                })

                res.on("error", (err) => {

                    console.error(err)

                    reject(err)
                })
            }))

            client.end(body)
        })
    }
}

export { Http as httpService }
