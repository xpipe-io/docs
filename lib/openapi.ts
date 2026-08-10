import {createOpenAPI} from "fumadocs-openapi/server";
import {generateFiles} from "fumadocs-openapi";

export const openapi = createOpenAPI({
    input: ["./public/openapi.yaml"],
    // This is apparently broken?
    // proxyUrl: "/api/proxy"
});
