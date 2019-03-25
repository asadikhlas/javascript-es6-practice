const students = [
    {name:'asad',grade:4},
    {name:'umair',grade:6},
    {name:'shahbaz',grade:4}
]

//every code
let allStudentsPassedTheCourse = students.every(function(student){
    return student.grade >= 6 
})

//Some code
let allStudentsPassedTheCourse = students.some(function(student){
    return student.grade >= 6 
})



//Es5 way


// let allStudentsPassedTheCourse = false;

// for(let i = 0; i < students.length; i++){
//     let student = students[i]
//     if(student.grade < 6){
//         allStudentsPassedTheCourse = false;
//         break;
//     }else{

//         allStudentsPassedTheCourse = true
//     }
// }

console.log(allStudentsPassedTheCourse)