function compareTriplets(a: number[], b: number[]): number[] {
  let alicePoint = 0;
  let bobPoint = 0;

  for (let index = 0; index < a.length; index++) {
    if (a[index] > b[index]) {
      alicePoint++;
    } else if (a[index] < b[index]) {
      bobPoint++;
    }
  }
  return [alicePoint, bobPoint];
}
