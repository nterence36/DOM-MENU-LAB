var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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

//Add a class of flex-aroundto topMenuEl
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
