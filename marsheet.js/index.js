
//markSheet of all subjects

var mathMarks = 90;
var scienceMarks = 95;
var englishMarks = 70;
var urduMarks = 80;
var socialstudiesMarks = 85;
var islamiatMarks = 98;
var computerMarks = 95;
var totalMarks = 700;

// Calculate total marks
var obtainedMarks =
  mathMarks +
  scienceMarks +
  englishMarks +
  urduMarks +
  socialstudiesMarks +
  islamiatMarks +
  computerMarks;

// Calculate percentage
var percentage = (obtainedMarks / 700) * 100;

// grades based on percentage
var grade;
if (percentage >= 90) {
  grade = "A+";
  reMarks = "Excellent";
} else if (percentage >= 80) {
  grade = "A";
  reMarks = "WellDone";
} else if (percentage >= 70) {
  grade = "B";
  reMarks = "Good";
} else if (percentage >= 60) {
  grade = "C";
  reMarks = "Fair";
} else if (percentage >= 50) {
  grade = "D";
  reMarks = "Poor";
} else {
  grade = "F";
  reMarks = "Need more Improvement";
}

// Now, in this step we Print marksheet
console.log("Mathematics: " + mathMarks);
console.log("Science: " + scienceMarks);
console.log("English: " + englishMarks);
console.log("Urdu: " + englishMarks);
console.log("Social-studies: " + englishMarks);
console.log("Islamiat: " + englishMarks);
console.log("Computer: " + englishMarks);
console.log("Total Marks: " + totalMarks);
console.log("Obtained Marks: " + obtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
console.log("ReMarks: " + reMarks);
