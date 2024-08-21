export {};

type wrappedPromises = Promise<Promise<Promise<string>>>;

// awaited = value type, await = value
// string
type unwrapWithAwait = Awaited<wrappedPromises>;

async function exampe<T>(input: T) {
  const output: Awaited<T> = await input;
}
