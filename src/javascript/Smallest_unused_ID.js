// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// ANSWER:

const nextId = (id) => {
  let n = 0
  while (id.includes(n)) n++
  return n
}

// OR

const nextId = (id) =>
  id.sort((a, b) => a - b).reduce((a, b) => a + (a == b), 0)

// OR

const nextId = (id) => {
  let uni = [...new Set(id)]
  let sor = uni.sort((a, b) => a - b)
  let check = sor.reduce((a, b) => a + (a == b), 0)
  return check
}
