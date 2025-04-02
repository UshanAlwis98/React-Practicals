// Destrucing with Objects

const book = [
  {
    name: "Madol Duwa",
    id: 1,
    String: " is written",
    author: "Martin Wickramasinghe",
    genres: ["Novel", "Short Story", "Fiction", "Adventure"],
  },

  {
    name: "Hath Pana",
    id: 2,
    author: "Kumarathunga Munidasa",
    genres: ["Adventure", "K-drama", "Black Comedy"],
    Published_date: "2024-03-01",
  },
];

console.log(
  book[0].name +
    book[0].String +
    " by " +
    book[1].author +
    " as " +
    book[1].genres[0]
);

// Destructuring with Arrays

const [name, author] = book;

console.log(author, name);

// Rest Operator

const [primaryGenre, ...otherGenres] = book[0].genres;
console.log(otherGenres, primaryGenre);

const { genres } = book[0];

const newvarGenre = [...genres, "Hello"];
console.log(newvarGenre);

// ES 5 Function

function es5function(x, y) {
  return `The addition is ${x + y} `;
}

console.log(es5function(5, 6));

// ES 6 Function

const es6functionvar = (x, y) => `The addition in ES6 fUNCTION IS ${x + y}`;
console.log(es6functionvar(5, 4));
