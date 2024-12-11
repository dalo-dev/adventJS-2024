function compile(instructions) {
  const registers = {};

  for (let i = 0; i < instructions.length; i++) {
    const [command, arg1, arg2] = instructions[i].split(" ");
    switch (command) {
      case "MOV":
        registers[arg2] = isNaN(arg1) ? registers[arg1] || 0 : Number(arg1);
        break;

      case "INC":
        registers[arg1] = (registers[arg1] || 0) + 1;
        break;

      case "DEC":
        registers[arg1] = (registers[arg1] || 0) - 1;
        break;

      case "JMP":
        if ((registers[arg1] || 0) === 0) i = Number(arg2) - 1;
        break;
    }
  }

  return registers.A;
}
