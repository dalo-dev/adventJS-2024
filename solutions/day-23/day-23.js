function findMissingNumbers(nums) {
  const maxValue = Math.max(...nums);
  const missingNumbers = Array.from({ length: maxValue }, (_, i) => i + 1);
  return missingNumbers.filter((number) => !nums.includes(number));
}
