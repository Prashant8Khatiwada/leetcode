var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  const rows = new Array(numRows).fill("");
  let currRow = 0;
  let direction = -1;

  for (const char of s) {
    rows[currRow] += char;

    if (currRow === 0 || currRow === numRows - 1) {
      direction *= -1;
    }

    currRow += direction;
  }

  return rows.join("");
};

const result = convert("PAYPALISHIRING", 3);
console.log(result);
