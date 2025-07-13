function transpile(source: string): string {
  // Replace Python 'print(...)' with JS 'console.log(...)'
  let declaredVars = new Set<string>();
  let lines = source.split("\n");
  let resultLines: string[] = [];

  for (let line of lines) {
    let printMatch = line.match(/^\s*print\s*\((.*)\)\s*$/);
    let assignMatch = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);

    if (printMatch) {
      resultLines.push(`console.log(${printMatch[1]});`);
    } else if (assignMatch) {
      let varName = assignMatch[1];
      let value = assignMatch[2];
      if (!declaredVars.has(varName)) {
        declaredVars.add(varName);
        resultLines.push(`let ${varName} = ${value};`);
      } else {
        resultLines.push(`${varName} = ${value};`);
      }
    } else if (line.trim() === "") {
      resultLines.push("");
    }
  }

  return resultLines.join("\n");
}

function transpileV2(source: string): string {
  // Replace Python 'print(...)' with JS 'console.log(...)'
  let result = source.replace(/^\s*print\s*\((.*)\)\s*$/gm, "console.log($1);");
  // Replace simple variable assignments (e.g., x = 5) with JS 'let x = 5;'
  result = result.replace(
    /^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/gm,
    "let $1 = $2;"
  );
  return result;
}

// Example usage
const pythonCode = `
    print("Hello, World!")
    x = 5
    y = 10
    z = x + y
    print(z)
`;

// V1 and V2 are interchangeable in this case, but V2 is more concise
// const jsCode = transpile(pythonCode);
const jsCode = transpileV2(pythonCode);
console.log(jsCode);

function executeJsCode(jsCode: string): void {
  try {
    // Create a new Function constructor instead of using eval
    const func = new Function(jsCode);
    func();
  } catch (error) {
    console.error("Error executing JS code:", error);
  }
}

// Execute the transpiled JS code
executeJsCode(jsCode);
// Output in the console:
// console.log("Hello, World!");
// let x = 5;
// let y = 10;
// let z = x + y;
// console.log(z);
// 15

// const f = new Function(
//     "console",
//     `
//         let x = 5;
//         const y = 10;
//         const z = x + y;
//         console.log(z);
//         console.log('Executing function...');
//         return z;
//     `
// );
// console.log(f(console)); // Outputs: 15
