export const bucketSort = async (
  arr: number[],
  updateArray: (arr: number[]) => void,
  updateIndexes: (indexes: number[]) => void
) => {
  if (arr.length === 0) return;

  const bucketCount = Math.ceil(Math.sqrt(arr.length));
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  const range = (maxValue - minValue + 1) / bucketCount;
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / range);
    buckets[bucketIndex].push(arr[i]);
  }

  let index = 0;
  for (let i = 0; i < buckets.length; i++) {
    const bucket = buckets[i];
    bucket.sort((a, b) => a - b);
    for (let j = 0; j < bucket.length; j++) {
      arr[index++] = bucket[j];
      updateArray([...arr]);
      updateIndexes([index - 1]);
      await new Promise(requestAnimationFrame);
    }
  }
  updateIndexes([]);
};
