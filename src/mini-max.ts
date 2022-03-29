function miniMaxSum(arr: number[]): void {
  let minSum = 0;
  const minSortedArray = arr.sort((a, b) => a - b);
  for (let index = 0; index < minSortedArray.length - 1; index++) {
    minSum += arr[index];
  }

  let maxSum = 0;
  const maxSortedArray = arr.sort((a, b) => b - a);
  for (let index = 0; index < maxSortedArray.length - 1; index++) {
    maxSum += arr[index];
  }

  console.log(`${minSum} ${maxSum}`);
}
