// Given the numbers 1, 2, and 3, generate all possible sequences where the numbers sum to exactly 12, following these transition rules:
//
// After a 1, the next number can only be 2 or 3.
// After a 2, the next number can only be 1 or 3.
// After a 3, the next number can only be 1.
//
// Return all valid sequences.
//
// Example 1 (Valid):
// [1, 2, 3, 1, 2, 3]
//
// Sum: 1+2+3+1+2+3 = 12 ✓
// Transitions: 1→2 ✓, 2→3 ✓, 3→1 ✓, 1→2 ✓, 2→3 ✓ — all legal
//
// Example 2 (Valid):
// [3, 1, 3, 1, 3, 1]
//
// Sum: 3+1+3+1+3+1 = 12 ✓
// Transitions: 3→1 ✓, 1→3 ✓, 3→1 ✓, 1→3 ✓, 3→1 ✓ — all legal
//
// Example 3 (Invalid — bad transition):
// [2, 2, 2, 2, 2, 2]
//
// Sum: 12 ✓ but...
// Transition 2→2 is not allowed (2 can only go to 1 or 3) ✗
//
// Example 4 (Invalid — wrong sum):
// [1, 2, 1, 2, 3]
//
// Wait — check transition 2→1 here... actually let's check the sum first: 1+2+1+2+3 = 9, not 12 ✗ (also has an illegal 2→1... no wait, 2→1 IS legal. So this one's only invalid because of the sum, good example of "transitions fine, sum wrong")
//
//
//
//
