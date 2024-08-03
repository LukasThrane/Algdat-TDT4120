export const bubbleSort = async (
  arr: number[],
  updateArray: (arr: number[]) => void,
  updateIndexes: (indexes: number[]) => void
) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      updateIndexes([i, i + 1]);
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        updateArray([...arr]);
        await new Promise(requestAnimationFrame);
        swapped = true;
      }
    }
  } while (swapped);
  updateIndexes([]);
};
