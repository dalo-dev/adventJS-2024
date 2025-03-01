function execute(code) {
  let result = 0;
  for (let i = 0; i < code.length; i++) {
    const instruction = code[i];
    if (instruction === "+") result++;
    else if (instruction === "-") result--;
    else if (instruction === "{") {
      if (result) continue;
      else while (code[i] !== "}") i++;
    } else if (instruction === "]") {
      if (!result) continue;
      else while (code[i] !== "[") i--;
    } else continue;
  }
  return result;
}
