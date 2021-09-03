
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const secs = Array.from(document.querySelectorAll("section"));
const menu = document.getElementById("nav-list");
let listItemNumbers = secs.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function buildListItem(){
  for (section of secs){
    secLink = section.getAttribute("id")
    secName = section.getAttribute("data-nav");

    // create an item for eah one
    listItem = document.createElement("li");

    // add text to the item
    listItem.innerHTML = `<a class = 'menu-link' href= '#${secLink}' > ${secName}  </a>`;

    // add list item to the menu
    menu.appendChild(listItem);
  }
}




//determine if the section in viewport
function secInView (elem) {
  let sectionPosition = elem.getBoundingClientRect();
  return (sectionPosition.top >= 0)
}

// gives the section being viewd a different appearance
function toggleHighlightClass (){
  for (section of secs){
    if(secInView(section)){
      if (!section.classList.contains('highlight-class')){
        section.classList.add('highlight-class')
      }
    } else {
      section.classList.remove('highlight-class')
    }
  }
}



// build the nav
buildListItem();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll' , toggleHighlightClass);
