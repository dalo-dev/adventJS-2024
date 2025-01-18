function fixGiftList(received, expected) {
  const diffReceivedExpected = {};
  const results = { missing: {}, extra: {} };
  const maxLength = Math.max(received.length, expected.length);

  for (let i = 0; i < maxLength; i++) {
    if (received[i]) {
      diffReceivedExpected[received[i]] ??= 0;
      diffReceivedExpected[received[i]]++;
    }

    if (expected[i]) {
      diffReceivedExpected[expected[i]] ??= 0;
      diffReceivedExpected[expected[i]]--;
    }
  }

  for (const [gift, amount] of Object.entries(diffReceivedExpected)) {
    if (amount > 0) results.extra[gift] = amount;
    else if (amount < 0) results.missing[gift] = amount * -1;
  }
  return results;
}
