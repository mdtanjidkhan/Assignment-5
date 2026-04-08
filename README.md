##1. What is the difference between var, let, and const?
​var: This is the old way. It is function-scoped. It can be re-declared and updated, which often leads to bugs.
​let: This is the modern way and it is block-scoped (lives only inside { }). You can update the value, but you cannot re-declare it in the same scope.
​const: This is also block-scoped. Once you assign a value, it cannot be changed or re-declared. It stands for "constant.


##​2. What is the Spread Operator (...)?

  Answer : ​The spread operator allows you to "spread" or copy the elements of an array or object into another place.
​Example from your code: You used classList.add(...tabActive). This takes all the classes inside the tabActive array and adds them to the element one by one.

##​3. What is the difference between map(), filter(), and forEach()?

 Answer : ​forEach(): Used to loop through an array. It does not return anything. Use it when you just want to do something (like appending a card to the UI).
​map(): Used to loop through an array and returns a new array with modified data. You used this to turn your labels array into HTML tags.
​filter(): Used to loop through an array and returns a new array containing only the items that meet a specific condition. You used this for your "Open" and "Closed" tabs.

##​4. What is an Arrow Function?

   Answer : ​An arrow function is a shorter and cleaner way to write functions in JavaScript. It uses the => syntax instead of the function keyword.
​Example: const displayPost = (posts) => { ... }
​It is more readable and handles the this keyword differently, which is very helpful in modern development.


##​5. What are Template Literals?

 Answer : ​Template literals are strings wrapped in backticks (`) instead of quotes. They allow you to:
​Write multi-line strings easily.
​Embed variables or logic directly using ${ }.
