const najdiNajmanji = (polje) => {
  if (Array.isArray(polje)) {
    let najmanji;
    polje.forEach((element) => {
      if (
        typeof element === "number" &&
        (najmanji === undefined || element < najmanji)
      ) {
        najmanji = element;
      }
    });
    return najmanji;
  } else {
    return undefined;
  }
};

module.exports = najdiNajmanji;
