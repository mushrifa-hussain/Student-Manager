// Student Manager - Calculate average marks using arrays and objects

let students = [
    { name: "Mushrifa Hussain", marks: 90 },
    { name: "Mufida Hussain", marks: 92 },
    { name: "Mohammad Musthafa", marks: 95 },
    { name: "Shameema Hussain", marks: 100 },
    { name: "Hussain Sulaiman", marks: 100 }
];

// Calculate total marks using reduce
let totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);

// Calculate average
let averageMarks = totalMarks / students.length;

// Display results
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks.toFixed(2));