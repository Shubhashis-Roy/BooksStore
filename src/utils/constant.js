export const TrandingBooks_API =
  "https://private-anon-fe0c3db687-bookstore.apiary-mock.com/data/books";

export const NewBooks_API = "https://api.itbook.store/1.0/new";

export const NewArrivalbooks_API =
  "https://api.itbook.store/1.0/search/mongodb";

export const Authors_API =
  "https://private-anon-fe0c3db687-bookstore.apiary-mock.com/authors";

export const Search_API = "https://api.itbook.store/1.0/search/";

export const NumericPart = (inputString) => {
  let Numericnum = parseFloat(inputString.replace(/\$/g, ""));
  let originalNumber = parseFloat(Numericnum.toFixed(0));
  return originalNumber;
};

export const removeDecimal = (num) => {
  let originalNumber = parseFloat(num.toFixed(0));
  return originalNumber;
};

export const addPrice = (array) => {
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + Math.round(currentValue.price.displayValue);
  }, 0);

  return sum;
};
