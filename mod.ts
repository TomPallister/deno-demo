import { Application } from "./deps.ts";
import { getHelloWorld } from "./hello.ts";

const app = new Application();
const port = 1993;
const hostname = "0.0.0.0"

app.use(ctx => {
  ctx.response.body = getHelloWorld();
});

console.log(`Starting server on port: ${port}`);

await app.listen({ hostname, port });