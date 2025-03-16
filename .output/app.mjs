import { createJiti } from "../../node_modules/.pnpm/jiti@2.4.2/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "h3-mock-serve": "D:/CoderKing/Projects/Complete Project/king-admin/mock"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("D:/CoderKing/Projects/Complete Project/king-admin/mock/app")} */
const _module = await jiti.import("D:/CoderKing/Projects/Complete Project/king-admin/mock/app.ts");

export const app = _module.app;
