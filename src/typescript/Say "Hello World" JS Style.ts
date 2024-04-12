/*
Write the definition of the function "say" such that calling this:

say("Hello")("World")

returns "Hello World"
 */
export const say = (hello: string) => (world: string) => `${hello} ${world}`
