const printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

const name = {
  firstName: "Lalit Mohan",
  lastName: "Bindhani",
};

const name2 = {
  firstName: "Akshay",
  lastName: "Saini",
};

printFullName.call(name);
printFullName.call(name2);
