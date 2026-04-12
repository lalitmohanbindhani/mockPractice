const printFullName = function (hometown, city) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + city,
  );
};

const name = {
  firstName: "Lalit Mohan",
  lastName: "Bindhani",
};

const name2 = {
  firstName: "Akshay",
  lastName: "Saini",
};

printFullName.call(name, "Bhubaneswar", "Jajpur");
printFullName.call(name2, "Delhi", "Mumbai");
printFullName.apply(name2, ["Delhi", "Mumbai"]);
let printMyName = printFullName.bind(name2, "Delhi", "Mumbai");
printMyName();
