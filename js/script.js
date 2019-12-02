/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/*Useful global variables and class assignments*/

const list = document.getElementsByClassName("student-item");
const searchResults = document.getElementsByClassName("matched");
const mainPage = document.querySelector(".page"); 
const links = document.getElementsByTagName("a");
const header2 = document.querySelector("h2");

header2.className = "title";


/*Function to iterate through student list array and display only those that meet the arguments for related page number
- it calculates the required number of pages from the list.length property, and then uses an if...else loop to
set the style.display property of each element in the array*/

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

/*Function to create and append/insert populated page number div when called - it create a div to
append to the bottom of the main page, and uses a for...loop to populate a list inside the 
new div with an li for each required page. The li contains the relevant <a>. A final if... 
statement checks if the div needs to be appended to the main page (on initial page load) or
if it needs to replace an existing div*/

function appendPageLinks (list) {

  /*Create a div including page number ul, 
  based on passed list.length parameter*/

  const items = list.length;
  const pages = Math.ceil(items * 0.1);

  const div = document.createElement("div");
  div.className = "pagination";

  const ul = document.createElement("ul");

  for (let i = 1; i <= pages; i++) {

    const li = document.createElement("li");
    li.textContent = i; 
    li.innerHTML = "<a href = #>" + li.textContent + "</a>"
    ul.appendChild(li);

  }

  div.appendChild(ul);

  /*Check if div needs to be appended or inserted*/

  const check = !!document.querySelector(".pagination");

  if (check)
  {
    const pageNumbers = document.querySelector(".pagination");
    mainPage.replaceChild(div, pageNumbers);}

  else {mainPage.appendChild(div)}

  setPageEvent(); //Reinstall event listener

}

/*Function to search records - checks through records and sets its style.display
property and class depending on if it finds the neccessry search term. Matched 
classes are passed into the 'send' array to append the correct number of page links
via the appendPageLinks function. If no matches are found, the header display alerts
the user and the function is exited early. */

function searchName (searchInput, list) {

  let send = []; 

  for (let i = 0; i < list.length; i++) 

  {
  
          if (searchInput.length != 0 && list[i].textContent.toLowerCase().includes(searchInput))
              
          
          { list[i].style.display = "list-item";
            list[i].classList.add("matched");
            send.push(list[i]);}

          else {
          list[i].style.display = "none";}

  }

  if (send.length == 0)
  {
    header2.textContent = "No results found!";
    appendPageLinks(0);
    return;
  }

  appendPageLinks(send);
  links[0].className = "active";

}

/*Initialise the page with the first 10 students and set first link to "active"*/

showPage(list, 1);
appendPageLinks(list);
links[0].className = "active";

/*Dynamically create search bar and append it to title div*/

const title = document.querySelector(".page-header");
const searchDiv = document.createElement("div");
const searchButton = document.createElement("button");
const searchBox = document.createElement("input");

searchDiv.className = "student-search";
searchButton.textContent = "Search";
searchBox.type = "text";
searchBox.placeholder = "Search student records...";

searchDiv.appendChild(searchBox);
searchDiv.appendChild(searchButton);
title.appendChild(searchDiv);


/*Add event listener to pass relevent parameters to showPage and appendPageLinks functions when page numbers clicked
- it also sets the clicked page number className to 'active' for styling*/

function setPageEvent() {

const pages = document.querySelector(".pagination");

pages.addEventListener ("click", (event) => {

  for (let i = 0; i < links.length; i++ )

  {
    links[i].className = "";
  }

  event.target.className = "active";
  showPage (list, event.target.textContent)

});}


/*Event listener for the search button - either sends the search box contnent to the searchName
function, or resets the page to its original condition, depending on page state*/

searchButton.addEventListener('click', (event) => {

  if (searchButton.textContent === "Search"){

    event.preventDefault();
    const searchInput = searchBox.value.toLowerCase();
    searchName(searchInput, list);
    searchButton.textContent = "Reset"}

  else {
 
    showPage(list, 1);
    appendPageLinks(list);
    header2.textContent = "Students";
    links[0].className = "active";
    searchButton.textContent = "Search";
    searchBox.value = "";

    for (i = 0; i < list.length; i++)
    {list[i].classList.remove("matched");}

  }

});





        
