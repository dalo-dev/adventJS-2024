# Challenge #18: 📇 Santa's Magic Agenda

## 🧠 Problem instructions

Santa Claus has a magic diary 📇 where he keeps the addresses of the children to deliver the presents. The problem: **the diary's information is mixed and misformatted.** The lines contain a magic phone number, a child's name, and their address, but everything is surrounded by strange characters.

Santa needs your help to find specific information from the diary. Write a function that, **given the diary's content and a phone number, returns the child's name and address.**

Keep in mind that in the diary:

- Phone numbers are formatted as +X-YYY-YYY-YYY (where X is one or two digits, and Y is a digit).
- Each child's name is always between < and >

The idea is for you to write a function that, given the full phone number or part of it, returns the child's name and address. **If it doesn't find anything or there is more than one result**, you must return `null`.

```javascript
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

findInAgenda(agenda, "34-600-123-456");
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, "600-987");
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, "111");
// null
// Explanation: No results

findInAgenda(agenda, "1");
// null
// Explanation: Too many results
```

## 💡 Approach and Solution

The `findInAgenda` function extracts and processes contact information from a structured agenda string and identifies a specific contact based on a partial phone number.

### Approach

1. **Split the Agenda into Entries**:

   - Use `split("\n")` to separate the agenda into individual contact entries.

2. **Parse Each Contact**:

   - Iterate over each entry and extract the name, phone number, and address using string slicing and manipulation methods:
     - Extract the phone number by finding the substring starting at `+` and taking the next 15 characters.
     - Extract the name by identifying the substring within `<` and `>`.
     - Extract the address by removing the name and phone number from the entry.

3. **Filter for Matching Phone Numbers**:

   - Check if there is exactly one entry where the phone number includes the given partial `phone` string.
   - If there is not exactly one match, return `null`.

4. **Retrieve Matching Contact**:

   - Locate the matching contact using `findIndex` on the filtered entries.
   - Return an object containing the `name` and `address` of the matched contact.

## 🎉 What I Learned

- Parsing structured strings requires careful handling of delimiters and substring indices.
- Filtering and finding elements in arrays are efficient ways to work with data collections.
- Handling ambiguous or invalid matches is essential for robustness in real-world scenarios.
