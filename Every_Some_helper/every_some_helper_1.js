const students = [
    {name:'asad',grade:6},
    {name:'umair',grade:7},
    {name:'shahbaz',grade:7}
]


let allStudentsPassedTheCourse = students.every(function(student){
    return student.grade >= 6 
})

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