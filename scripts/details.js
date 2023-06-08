"use strict";

console.log('loading...');

// Variables

//const coursesdetailsTableCard = document.getElementById("coursesdetailsTableCard"); // Table w/ Courses Listed on Home Page

const coursesdetailstablebody = document.getElementById("coursesdetailstablebody"); // the course details table

/*____________________________________________________________________________________________*/


// Next...
window.onload = function() {

    urlParamsFunction();   

}


/*____________________________________________________________________________________________*/

function urlParamsFunction(){
let urlParams = new URLSearchParams(location.search);
console.log(urlParams);

let id = -1;
if (urlParams.has("courseid") === true) {
 id = urlParams.get("courseid")
 console.log(id);

 let courseIdURL = "http://localhost:8081/api/courses/" + id; 
 fetch(courseIdURL)
 .then((response) => response.json())
 .then(course => {
    console.log(course);
    showDetailforCourse(course)

 })
 
}
}

function showDetailforCourse(course){
// This is where we will put the detailed course information into the table card

    let newRow = coursesdetailstablebody.insertRow(-1);
    
    let instructorCell = newRow.insertCell(0);
    instructorCell.innerHTML = course.instructor;

    let numDaysCell = newRow.insertCell(1);
    numDaysCell.innerHTML = course.numDays;

    let startDateCell = newRow.insertCell(2);
    startDateCell.innerHTML = course.startDate;

  }
  console.log('Course details are in the table');
