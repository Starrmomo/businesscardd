let students = [
{name : "fatima" , score :[ 90,60 ], },
{name : "charles", score :[32,75] ,},
{name : "adeola", score :[80 , 56], },
{name : "josh", score :[27, 46  ], }
]


function studentGrade (scores) {
  let total = 0;
for(let s of scores) {
total += s;

}

let average = total /scores.length;
return average;

}  
for (let student of students) {
    let avg = studentGrade(student.score);

if (avg >= 50) {
    console.log(student.name + " average = " + avg +" passed" );
}
    else{
        console.log(student.name + " average = " + avg +" failed")
    }



}




