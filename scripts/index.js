"use strict";

console.log('loading...');

// Variables

const coursesTableCard = document.getElementById("coursesTableCard"); // Table w/ Courses Listed on Home Page

const coursestablebody = document.getElementById("coursestablebody"); // the weather table

/*____________________________________________________________________________________________*/


// Next...
window.onload = function() {

    getAllCoursesFromAPISite();   

}


/*____________________________________________________________________________________________*/

// Function

        function getAllCoursesFromAPISite() {
          
            fetch('http://localhost:8081/api/courses')
              .then(response => response.json())
              .then(data => {
                let coursesArray = data;
                console.log(data); // all courses, array of objects
                populateCourseTable(coursesArray);
                })
            }
        
          
          function populateCourseTable(coursesArray) {
        
            for (let course of coursesArray) {
            
        let newRow = coursestablebody.insertRow(-1);
        let idCell = newRow.insertCell(0);
        idCell.innerHTML = course.id;

        let deptCell = newRow.insertCell(1);
        deptCell.innerHTML = course.dept;

        let courseNumCell = newRow.insertCell(2);
        courseNumCell.innerHTML = course.courseNum;

        let courseNameCell = newRow.insertCell(3);
        courseNameCell.innerHTML = course.courseName;
            }
            console.log('All courses are in the table');
          }