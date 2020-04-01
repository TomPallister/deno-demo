import { assertEquals } from "./test_deps.ts";
import { getHelloWorld } from "./hello.ts";

Deno.test(function helloWorld() {
    assertEquals(getHelloWorld(), "\x1b[1mHello World\x1b[22m");
});
