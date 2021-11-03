// What will be the result of the following code, why?

const husband = {firstName: 'William', lastName: 'Clinton'};
const wife = husband;
wife.firstName = 'Hillary';

console.log(husband);