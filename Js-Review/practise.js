const maparray = [4, 9, 16, 25, 36, 49];

console.log(maparray.map(Math.sqrt));

myArray = [1, 2, 0, 4, 5, 6, 7];
const reducearray = myArray.reduce(
  (accumaltor, numberSet) => accumaltor + numberSet,
  0
);
console.log(reducearray);

const sortArray = myArray.slice().sort((x, y) => y - x);
console.log(sortArray);
console.log(myArray);

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    movieAdaptation: true,
  },

  {
    id: 2,
    title: "The Harry Potter",
    publicationDate: "1998-07-29",
    author: "Martin Wickaramasinghe",
    movieAdaptation: false,
  },

  {
    id: 3,
    title: "Game of Thrones",
    publicationDate: "1968-09-10",
    author: "Kumarathunga Munidasa",
    movieAdaptation: false,
  },

  {
    id: 4,
    title: "Strike Back",
    publicationDate: "1988-10-31",
    author: "William Shakespere",
    movieAdaptation: true,
  },

  {
    id: 5,
    title: "Rambo",
    publicationDate: "1954-07-29",
    author: "Syllwester Stallon",
    movieAdaptation: true,
  },
];

const filterArray = data
  .filter((x) => x.publicationDate.split("-")[0] > 1980)
  .map((y) => y.title);
console.log(filterArray);
