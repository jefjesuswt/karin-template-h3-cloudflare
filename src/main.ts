import { KarinFactory } from "@karin-js/core";
import { H3Adapter } from "@karin-js/platform-h3";
import { AppController } from "./app/app.controller";

const app = await KarinFactory.create(new H3Adapter(), {
  scan: false,
  controllers: [AppController],
});

await app.init();

export default {
  fetch: (app.getHttpAdapter() as any).fetch,
};
