1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById() select and element by its id, getElementsByClassName() selects elements by their class name, querySelector() selects elements by their tag name and return a array, class name and id, querySelectorAll selects all elements bt the same tagname , class name and id and return a array,

2. How do you create and insert a new element into the DOM?
Ans: Create an element id the DOM with document createElement() and insert it with appendChild().

3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is when an event is triggered on a child element, it goes to the parent element, and if not stopped it goes up to the document.


4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is an event listener on the parent element that allows the parent element to handle events of the child element and using this elements the don't need muliple event listeners.


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stop the default action of and element and stopPropagation() stop event bubbling.