
/*

As you know, a promise is in one of these states: pending, fulfilled, rejected.

Implement the async function getState that determines a state of a promise.

const p = Promise.resolve();
const state = await getState(p); // === "fulfilled"

const p = Promise.reject();
const state = await getState(p); // === "rejected"

const p = new Promise(() => {});
const state = await getState(p); // === "pending"

*/

async function getState(promise) {
  const pending = Symbol('pending');

  try {
    const x = await Promise.race([promise, Promise.resolve(pending)]);

    if (x === pending) return 'pending';
    return 'fulfilled';
  } catch {
    return 'rejected';
  }
}
