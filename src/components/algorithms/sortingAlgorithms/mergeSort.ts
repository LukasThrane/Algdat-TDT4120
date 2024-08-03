export const mergeSort = async (
  arr: number[],
  updateArray: (arr: number[]) => void,
  updateIndexes: (indexes: number[]) => void,
  start = 0,
  end = arr.length
) => {
  if (end - start <= 1) return;
  const mid = Math.floor((start + end) / 2);
  await mergeSort(arr, updateArray, updateIndexes, start, mid);
  await mergeSort(arr, updateArray, updateIndexes, mid, end);

  let left = arr.slice(start, mid);
  let right = arr.slice(mid, end);
  let k = start,
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    updateIndexes([k]);
    if (left[i] < right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
    updateArray([...arr]);
    await new Promise(requestAnimationFrame);
  }
  while (i < left.length) {
    updateIndexes([k]);
    arr[k++] = left[i++];
    updateArray([...arr]);
    await new Promise(requestAnimationFrame);
  }
  while (j < right.length) {
    updateIndexes([k]);
    arr[k++] = right[j++];
    updateArray([...arr]);
    await new Promise(requestAnimationFrame);
  }
  updateIndexes([]);
};
