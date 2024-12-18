function findInAgenda(agenda, phone) {
  const splittedAgenda = agenda.split("\n");
  const filteredAgenda = splittedAgenda.map((person) => {
    const number = person
      .slice(person.indexOf("+") + 1, person.indexOf("+") + 15)
      .trim();
    const name = person
      .slice(person.indexOf("<") + 1, person.indexOf(">"))
      .trim();
    const address = person
      .replace(`<${name}>`, "")
      .replace(`+${number}`, "")
      .trim();

    return {
      name,
      number,
      address,
    };
  });

  if (filteredAgenda.filter((kid) => kid.number.includes(phone)).length !== 1)
    return null;

  const foundKidId = filteredAgenda.findIndex((kid) =>
    kid.number.includes(phone)
  );

  return {
    name: filteredAgenda[foundKidId].name,
    address: filteredAgenda[foundKidId].address,
  };
}
