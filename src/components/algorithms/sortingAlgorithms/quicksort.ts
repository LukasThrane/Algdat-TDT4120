export const quicksort = async (
  arr: number[],
  updateArray: (arr: number[]) => void,
  updateIndexes: (indexes: number[]) => void,
  left = 0,
  right = arr.length - 1
) => {
  if (left >= right) return;

  const pivotIndex = await partition(
    arr,
    left,
    right,
    updateArray,
    updateIndexes
  );
  await quicksort(arr, updateArray, updateIndexes, left, pivotIndex - 1);
  await quicksort(arr, updateArray, updateIndexes, pivotIndex + 1, right);
};

const partition = async (
  arr: number[],
  left: number,
  right: number,
  updateArray: (arr: number[]) => void,
  updateIndexes: (indexes: number[]) => void
) => {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    updateIndexes([i, j]);
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      updateArray([...arr]);
      await new Promise(requestAnimationFrame);
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  updateArray([...arr]);
  await new Promise(requestAnimationFrame);
  updateIndexes([]);
  return i + 1;
};
