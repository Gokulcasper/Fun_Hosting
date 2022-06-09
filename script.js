// Hosting

//Function Declaration

addNoDeclaration(); //In Fun_Declaration you can Call Function at any where.
function addNoDeclaration() {
  console.log("Add Number from Function Declaration");
}

//Function Expression

let addNoExpression = function () {
  console.log("Add Number from Function Expression");
};
addNoExpression(); // //In Fun_Expression we can Call Function at End of Function.
