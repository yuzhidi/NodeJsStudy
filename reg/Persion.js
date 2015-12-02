var Person = {
        name: "Tim",
        age: 28,
        greeting: function () {
            return "Hello " + this.name + ".  Wow, you are " + this.age + " years old.";
        }
};

console.dir({greeting:Person.greeting()});

var greeting = Person.greeting;
console.dir({greeting:greeting()}); //  // Will get undefined for `this.name` and `this.age`

var Dog = {
    name: "Alfred",
    age: 110,
    greeting: Person.greeting
}

console.dir({Doggreeting:Dog.greeting()}); // This will work and it will show the dog's data.

console.log("---------- Taming \"this\"  -------");

var Alien = {
      name: "Zygoff",
        age: 5432
}

console.dir({Alien:Person.greeting.call(Alien)});

function makeOlder(years, newname) {
    this.age += years;
    if (newname) {
         this.name = newname;
    }
}

console.log("------ makeOlder --------");
makeOlder.call(Person, 2, "Old Tim");
makeOlder.apply(Dog, [1, "Shaggy"]);
console.dir({Person: Person, Dog: Dog});



