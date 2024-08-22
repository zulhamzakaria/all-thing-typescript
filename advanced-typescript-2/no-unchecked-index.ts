const nums = [1, 2, 3];

// out-of-bound error
// set noUncheckedIndexedAccess to true inside the tsconfig
// combine it with ? or ! operator
const val = nums[3];

const people: { [id: number]: string } = Object.create(null);
