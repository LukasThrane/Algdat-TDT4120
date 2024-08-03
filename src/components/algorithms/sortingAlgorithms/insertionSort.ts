export const insertionSort = async (
  arr: number[],
  updateArray: (arr: number[]) => void,
  updateIndexes: (indexes: number[]) => void
) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      updateIndexes([j, j + 1]);
      arr[j + 1] = arr[j];
      j = j - 1;
      updateArray([...arr]);
      await new Promise(requestAnimationFrame);
    }
    arr[j + 1] = key;
    updateArray([...arr]);
    updateIndexes([]);
    await new Promise(requestAnimationFrame);
  }
};
