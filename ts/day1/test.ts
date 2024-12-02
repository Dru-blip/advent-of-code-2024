import * as day1 from "./day1.ts";
import * as day1op from "./day1-op.ts";

Deno.bench({
    name: "day1",
    fn: async () => {
       await day1.process();
    },
});

Deno.bench({
    name: "op",
    fn: async () => {
        await day1op.processFile();
    },
});
