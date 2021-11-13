export abstract class IHttpServiceAdapter {

    static readonly get: <T>(path: string) => Promise<any>

    static readonly post: <T>(path: string, body?: object) => Promise<any>

    static readonly put: <T>(path: string, body?: object) => Promise<any>

    static readonly delete: <T>(path: string, body?: object) => Promise<any>
}
