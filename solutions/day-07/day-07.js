// First version
function fixPackages(packages) {
  const stack = [];
  const packagesArray = packages.split("");
  for (let i = 0; i < packagesArray.length; i++) {
    if (packagesArray[i] === "(") {
      stack.push(i);
    } else if (packagesArray[i] === ")") {
      const start = stack.pop();
      const reversedContent = packagesArray.slice(start + 1, i).reverse();
      packagesArray.splice(start, i - start + 1, ...reversedContent);
      i = start + reversedContent.length - 1;
    }
  }
  return packagesArray.join("");
}

// Optimized version
function fixPackages(packages) {
  while (packages.includes("(")) {
    packages = packages.replace(/\(([^()]*)\)/g, (_, content) => {
      return content.split("").reverse().join("");
    });
  }
  return packages;
}
