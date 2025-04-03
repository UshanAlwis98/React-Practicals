const Tvseries = [
  {
    id: 1,
    Title: "Game of Thrones",
    Company: "Warner Brothers",
    publicationDate: "2025-01-01",
    Genres: ["Adventure", "Novel", "Fantasy", "Black Comedy"],
    pagesCount: 445,
  },

  {
    id: 2,
    Title: "Prison Break",
    Company: "EA Sports",
    publicationDate: "2026-02-01",
    pagesCount: 155,
    Genres: ["Fantasy", "Novel", "Adventure", "Black Comedy"],
    Reviews: {
      goodReads: {
        rating: 1.5,
        ratingsCount: 0,
        reviewsCount: 10,
      },

      Librarything: {
        rating: 2.5,
        ratingsCount: 87,
        reviewsCount: 11,
      },
    },
  },

  {
    id: 3,
    Title: "Halloween",
    publicationDate: "2027-03-01",
    pagesCount: 375,
    Reviews: {
      goodReads: {
        rating: 1.5,
        ratingsCount: 1,
        reviewsCount: 10,
      },
    },
  },
];

//ES5 Old Function

// function myOldFunction(x, y) {
//   return x + y;
// }

// console.log(
//   myOldFunction(
//     Tvseries[1].Reviews.Librarything.ratingsCount,
//     Tvseries[2].Reviews.goodReads.reviewsCount
//   )
// );

//ES6 New Arrow Function

const newArrowFunction = (k, z) => k + z;

console.log(
  newArrowFunction(
    Tvseries[1].Reviews.Librarything.ratingsCount,
    Tvseries[2].Reviews.goodReads.reviewsCount
  )
);

const Destrcucturingpart = {
  Tvseries: [0].title,
  Tvseries: [1].publicationDate,
};
