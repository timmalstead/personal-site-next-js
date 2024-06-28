export const GET = async (request: Request) =>
    Response.json({ hello: "from the api", request: JSON.stringify(request) })
