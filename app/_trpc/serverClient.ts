import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";
// import { createContext } from "@server/context";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
