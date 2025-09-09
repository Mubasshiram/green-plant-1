1.Difference between var,let,and const?
Answer:
var: It can be re-declared and it is function scoped.
let: It cannot be redeclared but can be updated and it is block-scoped.
const: It has fixed value and It cannot be reassigned or updated.

2.Difference between map(),forEach(),and filter()?
Answer:
map(): It creates a new array by transforming each element
forEach(): It executes a function for each element but returns nothing.
filter(): It creates a new array with elements that pass condition.

3.Arrow functions in ES6?
Answer: Arrow functions are shorter syntax for writing functions.They don't have their own this context,return keyword and curly brackets.
Example: const add=(a, b)=> a + b;

4.Destructuring assignment in ES6?
Answer:
Destructuring helps to extract values from arrays or objects into variables.
Example:
const [x, y]=[7, 2];  
const {name,age}=person;

5.Template literals in ES6?
Answer:
Template literals are a new way to write strings in JavaScript that make it easier to include variables and create multi-line strings.Instead of using quotes,it uses backticks (` `) and can insert variables directly with `${variableName}` syntax.Template literals are much cleaner and easier to read.Instead of writing "Hello " + name + "!", we can write `Hello ${name}!` - which is shorter and more intuitive,when combining multiple variables or text.

