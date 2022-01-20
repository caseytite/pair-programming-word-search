const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return "Array is empty";
  }

  let result = "";
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = letters[0].map((col, i) =>
    letters.map((row) => row[i]).join("")
  );

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  if (result !== true) {
    for (v of verticalJoin) {
      if (v.includes(word)) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
  }
  return result;
};

module.exports = wordSearch;
