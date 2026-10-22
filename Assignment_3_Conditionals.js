
const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

let gradeDescription;
switch (grade) {
  case "A": gradeDescription = "Excellent"; break;
  case "B": gradeDescription = "Good"; break;
  case "C": gradeDescription = "Average"; break;
  case "D": gradeDescription = "Needs improvement"; break;
  default: gradeDescription = "Fail"; break;
}

const status = score >= 40 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
