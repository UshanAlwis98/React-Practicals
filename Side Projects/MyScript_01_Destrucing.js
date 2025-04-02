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

const { name, genres, author } = book;
console.log(name);
