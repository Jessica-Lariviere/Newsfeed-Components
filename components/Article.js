// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import data from "./data"


data.push({
  
  title: 'Professional Software Development in 2019',
  date: 'Jan 1st, 2019',
  firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
        hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
        Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? num twooooooooooooooooooooo`,

  secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
        hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
        hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
        hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? more `,

  thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
        Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
        Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.also mooooore`
});

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>
  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.
  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
function articleMaker(obj){
  //make
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const pDate = document.createElement('p');
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const span = document.createElement('span');
    
  
    
    //class them
    div.classList.add('article');//add class to div
    pDate.classList.add('date');
    span.classList.add('expandButton');
    
  // text content
 h2.textContent = obj.title;
 pDate.textContent = obj.date;
 p1.textContent = obj.firstParagraph;
 p2.textContent = obj.secondParagraph;
 p3.textContent = obj.thirdParagraph;

  
  span.textContent = ('+');

  //event listener

span.addEventListener('click', function (event){
  div.classList.toggle('article-open')
})

  // nest
  div.prepend(h2);
  div.appendChild(pDate);
  div.appendChild(p1)
  div.appendChild(p2)
  div.appendChild(p3)
  div.appendChild(span)
  
  
  
    return div;
  }

let div = document.querySelector('.articles')

data.forEach(function(item){
  let ele = articleMaker(item)
  div.appendChild(ele)
});

