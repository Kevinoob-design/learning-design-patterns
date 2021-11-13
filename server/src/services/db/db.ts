import { IDbServiceAdapter } from "../../types"

class Db implements IDbServiceAdapter {

    constructor () {

    }

    findById = async (_id: number) => {

        return {
            name: "fulano",
            lastName: "de tal",
            tell: 590232123
        }
    }
}

const db = new Db()

export { db }


