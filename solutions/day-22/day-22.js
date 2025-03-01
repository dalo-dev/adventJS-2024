function generateGiftSets(gifts) {
  const result = [];

  function backtrack(currentIndex, currentSet) {
    if (currentIndex === gifts.length) {
      if (currentSet.length > 0) result.push([...currentSet]);
      return;
    }

    currentSet.push(gifts[currentIndex]);
    backtrack(currentIndex + 1, currentSet);

    currentSet.pop();
    backtrack(currentIndex + 1, currentSet);
  }

  backtrack(0, []);
  result.sort((a, b) => a.length - b.length);

  return result;
}
