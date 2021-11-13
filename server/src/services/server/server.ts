import express, { Express } from "express"
import morgan from "morgan"
import { IHttpServerAdapter, httpServerAdapterFunctionCb } from "../../types"

class Server implements IHttpServerAdapter {

    private app: Express

    constructor () {

        this.app = express()

        this.app.use(morgan("dev"))
    }

    use = (path: string, cb: httpServerAdapterFunctionCb) => this.app.use(path, cb)

    listen = (port: number, cb?: () => void) => this.app.listen(port, cb)

    get = (path: string, cb: httpServerAdapterFunctionCb) => this.app.get(path, cb)

    post = (path: string, cb: httpServerAdapterFunctionCb) => this.app.post(path, cb)

    put = (path: string, cb: httpServerAdapterFunctionCb) => this.app.put(path, cb)

    delete = (path: string, cb: httpServerAdapterFunctionCb) => this.app.delete(path, cb)

    patch = (path: string, cb: httpServerAdapterFunctionCb) => this.app.patch(path, cb)
}

const server = new Server()

export { server }
