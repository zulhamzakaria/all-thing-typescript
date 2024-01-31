/*
    in JS, promise wrapping will return the last value
*/

type wrappedPromise = Promise<Promise<Promise<string>>>;
// AwaitedResult is string
type AwaitedResult = Awaited<wrappedPromise>;

// TS awaited is a simplication of promise wrapping in which it returns
// the last value. Awaited<T> recursively unwrap the value
async function example<T>(input: T) {
  const output: Awaited<T> = await input;
}
