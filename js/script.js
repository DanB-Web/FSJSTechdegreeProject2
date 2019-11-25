/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const list = document.getElementsByClassName("student-item");
const mainPage = document.querySelector(".page"); 

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

    appendPageLinks(list);

}

function appendPageLinks (list) {

  
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
  mainPage.appendChild(div);

}

/*Initially show first 10 student*/

showPage(list, 1);

/*Add event listener to pass relevent parameters to showPage function*/

const pages = document.querySelector(".pagination")

pages.addEventListener ("click", (event) => {

  const links = document.getElementsByTagName("a");

  for (let i = 0; i < links.length; i++ )

  {
    links[i].className = "";
  }

  event.target.className = "active";

  showPage (list, event.target.textContent)

});


// Remember to delete the comments that came with this file, and replace them with your own code comments