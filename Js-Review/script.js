const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*--------------------Destrcucturing Lesson ------------------ */

const book = getBook(2);

/* const title = book.title;
 const author = book.author; */ // without Destrcucturing

// With Object Destrcucturing

const { title, author, genres, pages, publicationDate } = book; // Propert name as it is - Curley Brasis used

console.log(author, title, genres);

/*--------------------Destrcucturing With Array ------------------ */
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];   without Array Destrcucturing

// With Array Destrcucturing - Array ekakin values pick karanawa
const [primaryGenre, secondaryGenre] = genres; // Square Brackets are used in Array Destrcucturing

console.log(primaryGenre, secondaryGenre);

/* Rest and Spread Operator */

// Rest Operator
const [firstGenre, ...otherGenres] = genres; // Rest Operator must be in the last in Destrcucturing Element
console.log(primaryGenre, otherGenres);

// Spread Operator
// Spread Operator with Arrays - Add a new Array index at last(Spread Operator Antimata dannath puluwan)
const newGenres = [...genres, "epic fantasy"];
newGenres;

// Spread Operator with Objects

const updatedBook = {
  ...book,
  // Adding a new Property
  moviePublicationDate: "2001-10-08",

  // Overriding an existing Property
  pages: 1210,
};
updatedBook;

// Template Literlas

const summary = `${title}, a ${pages} is a book ${genres[1]}  ok  ${
  publicationDate.split("-")[0]
}`;
summary;

const bookpage = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(`The Total Number of Pages are ${bookpage}`);

// function getyear(id) {
//   return `The date is ${publicationDate.split("-")[0]}`;
// }

// Short Circuiting and Logical Operators
