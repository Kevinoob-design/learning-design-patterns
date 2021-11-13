type respuesta = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
  }

import { server, httpService } from "./services"

(async () => {
    const PORT: number = Number(process.env.PORT)

    server.listen(PORT, () => console.info(`Server running on port ${PORT}`))

    const locquesea = await httpService.get<respuesta>("https://jsonplaceholder.typicode.com/todos/1")

    locquesea.id

})()


// const body = [
//     {
//         "id": 1,
//         "title": "Post 1"
//     },
//     {
//         "id": 2,
//         "title": "Post 2"
//     },
//     {
//         "id": 3,
//         "title": "Post 3"
//     }
// ]

// httpService.post("https://my-json-server.typicode.com/typicode/demo/posts", body)
