// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const fruitList = fruits.join();
  const fruitString = fruits.toString();
  console.log(fruitList);
  console.log(fruitString);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const fruitsArr = fruits.split(",");
  console.log(fruitsArr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const r = array.reverse();
  console.log(r);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const n = array.slice(2);
  console.log(n);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  let goodScore = students.find(function (name) {
    return name.score === 90;
  });
  console.log("5번");
  console.log(goodScore);
}

// Q6. make an array of enrolled students
{
  const enrolledStudents = students.filter(function (enroll) {
    return enroll.enrolled === true;
  });
  console.log("6번");
  console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const sortScore = students.map(function (scores) {
    return scores.score;
  });
  console.log("7번");
  console.log(sortScore);
}

// Q8. check if there is a student with the score lower than 50
{
  const lowStudent = students.filter(function (low) {
    return low.score < 50;
  });
  console.log("8번");
  console.log(lowStudent);
}

// Q9. compute students' average score
{
  const sumScores = students.reduce(function (total, curr) {
    return total + curr.score;
  }, 0);
  const avScores = sumScores / students.length;
  console.log("9번");
  console.log(avScores); //73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const allScores = students
    .map((eachScores) => eachScores.score)
    .sort((a, b) => a - b)
    .join();
  console.log("10번");
  console.log(allScores);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// done at Q10.