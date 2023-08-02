var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main');
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'
mainEl.style.backgroundColor = "var(--main-bg";

// Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Add a class of flex-ctrto mainEl
mainEl.classList.add("flex-ctr");

// Select and cache the <nav id="top-menu">element in a variable named topMenuEl
const topMenuEl = document.querySelector("#top-menu");

//Set the height topMenuElelement to be 100%
topMenuEl.style.height = "100%";

// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "#0e9aa7";

//Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around")

//Iterate over the entire menuLinksarray and for each "link" object:
 for (let items of menuLinks) {
    //Create an <a>element.
    let a = document.createElement('a');

    //On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
    a.href = items.href;

    //Set the new element's content to the value of the textproperty of the "link" object.
    a.innerText = items.text;

    //Append the new element to the topMenuElelement.
    topMenuEl.appendChild(a)
 }

// Part two:

//Select and cache the <nav id="sub-menu">element in a variable named subMenuEl
const subMenuEl = document.querySelector("#sub-menu");

//Set the height subMenuEl element to be 100%
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

//Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = "0";

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
 const topMenuLinks = document.querySelectorAll('a');

//Declare a global showingSubMenuvariable and initialize it to false
let showingSubMenu = false;

// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.log the content of the <a>to verify the handler is working.
// Progress Check
// Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.
// Clicking anywhere other than on a link should do nothing.

topMenuEl.addEventListener('click', ele => {
    ele.preventDefault();
   

    if(ele.target.tagName !== 'A'){
        return
    }
    console.log(ele.target.innerText);
   topMenuLinks.forEach(ele => {
        ele.classList.remove("active");
        showingSubMenu = false;
        //Set the CSS topproperty of subMenuEl to 0.
        subMenuEl.style.top = "0";
        return
    });
    ele.target.classList.add("active")

    if (showingSubMenu = true){
      buildSubMenu(menuLinks.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      showingSubMenu = false;
      subMenuEl.style.top = '0';
    }
    
 
    // OR
    // for(let i = 0; i < topMenuLinks.length; i++) {
    //     topMenuLinks[i].classList.remove('active');
    // }
    // if(ele.target.tagName ==="A"){
    //     console.log(ele.target.innerText)
    //     ele.target.classList.add('active')
    // }
})


// Task 5.3
// Next in the event listener, if the clicked <a> link has a class of active:

// Remove the activeclass from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// return to exit the handler.


function buildSubMenu(elem){

  subMenuEl.textContent = "";
    // let newArr = [];

  // for(let i = 1; menuLinks.length; i++){
  //   let links = menuLinks[i].subLinks

    
  //   // let sub = document.createElement('a');
  //   // sub.href = ele.href;
  //   // sub.textContent = ele.text;
  //   // subMenuEl.appendChild(sub);
  //   return links
  // }
  // let links = menuLinks.filter(subLinks)
  // for (let i = 1; i < links.length; i++){ 
  // let links = []
  //  links.push(menuLinks[i].subLink)
  const subLinksArr = menuLinks.filter((element) => {
    return element.subLinks
  })
 
   subLinksArr.forEach((ele) =>{
   let sub = document.createElement('a');
    sub.href = ele.href;
    sub.textContent = ele.text;
    subMenuEl.appendChild(sub);    
     
  })

  
  // const subLinksArr = menuLinks.filter((element) => {
  //   return element.subLinks
  // })
  // console.log(subLinksArr)

  }