import { Elysia } from "elysia";

const container = new Elysia({ name: "container" }).decorate("container", {
  message: `Hello Elysia Updatee ${process.env.TEST_ENV}`,
});

const home = new Elysia().use(container).get("/", (context) => {
  return context.container.message;
});

const app = new Elysia().use(home).listen(3003);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
