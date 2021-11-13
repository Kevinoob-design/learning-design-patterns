type Client = { name: string, lastName: string, tell: number }

export interface IDbServiceAdapter {

    findById: (_id: number) => Promise<Client>

}
