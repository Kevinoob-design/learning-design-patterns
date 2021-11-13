export type httpServerAdapterFunctionCb = ({ ...handlers }) => (req: Request, res: Response, next?: Function) => void

export interface IHttpServerAdapter {

    use: (path: string, cb: httpServerAdapterFunctionCb) => void

    listen: (port: number, cb?: () => void) => void

    get: (path: string, cb: httpServerAdapterFunctionCb) => void

    post: (path: string, cb: httpServerAdapterFunctionCb) => void

    put: (path: string, cb: httpServerAdapterFunctionCb) => void

    delete: (path: string, cb: httpServerAdapterFunctionCb) => void

    patch: (path: string, cb: httpServerAdapterFunctionCb) => void

}
