/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const list = document.getElementsByClassName("student-item");

/*Function to iterate through array and display only those that meet arguments*/

function showPage (list, page) {

  let pageHi = page*10;
  let pageLo = (page*10) - 10;

    for (let i = 0; i < list.length; i++) {
      
          if (i >= pageLo && i < pageHi) {

            list[i].style.display = "";}

          else {

            list[i].style.display = "none";}

    }

}

/*Initially show first 10 student*/

showPage(list, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks (list) {

  const items = list.length;
  const pages = Math.ceil(items * 0.1);

  const mainPage = document.querySelector(".page");
  const div = document.createElement("div");
  div.className = "pagination";

  const ul = document.createElement("ul");

  for (let i = 1; i <= pages; i++) {

    const li = document.createElement("li");
    li.innerHTML = "<a href>" + i + "</a>"
    ul.appendChild(li);

  }

  div.appendChild(ul);
  mainPage.appendChild(div);

}





// Remember to delete the comments that came with this file, and replace them with your own code comments