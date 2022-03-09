// let fruits = [
//   "Apple",
//   "Banana",
//   "qiwi",
//   "peach",
// ];

// fruits.forEach(fruit => {
//   console.log(fruit);
// });



// let fruits = [
//   "Banana",
//   false,
//   13,
//   "hello",
//   ["1", "2", "3"],
//   { name: "Peter", lastname: "Parker" },
//   12345,
// ];


// String
// boolen
// integer
// string
// array
// 

// fruits.forEach(element => {
//   console.log(typeof element);
// });




// let people =[
//   {
//     name: "Peter",
//     lastname: "Parker",
//     age: 34,
//   },
//   {
//     name: "Lasley",
//     lastname: "Johnson",
//     age: "55",
//   },
//   {
//     name: "Sam",
//     lastname: "Cruz",
//     age: 11,
//   },
//   {
//     name: "Sadyr",
//     lastname: "Japarov",
//     age: 44,
//   },
//   {
//     name: "Elon",
//     lastname: "Mask",
//     age: 51,
//   },
// ];


// document.querySelector("#div-name");
// let divName = document.querySelector("#div-name");

// people.forEach((item) => {
//   let person = document.createElement("div");
//   let name = ${item.name}  ;
//   let lastname = ${item.lastname}: ;
//   let age = item.age;
//   person.append(name);
//   person.append(lastname);
//   person.append(age);
//   divName.append(person);
// });




let people = [{
        name: "Peter",
        resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
        profession: "front-end",
    },
    {
        name: "Peter",
        resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
        profession: "front-end",
    },
    {
        name: "Peter",
        resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
        profession: "front-end",
    },
    {
        name: "Peter",
        resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
        profession: "front-end",
    },
    {
        name: "Peter",
        resume: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos eligendi sapiente beatae, quasi totam omnis atque dignissimos numquam doloremque porro aspernatur enim fuga molestias facere, consequatur aperiam id possimus.",
        profession: "front-end",
    },
];

document.querySelector("#div-name");
let divName = document.querySelector("#div-name");

people.forEach((item) => {
    let person = document.createElement("div");


    let name = `$ { item.name }`;

    document.createElement("h2");
    let h2Element = document.createElement("h2");
    divName.append(h2Element);






    let resume = `$ { item.resume }:`
    ;

    let profession = item.profession;

    document.createElement("div");
    let divElement2 = document.createElement("div");

    divName.append(divElement2);












    person.append(name);
    person.append(resume);
    person.append(profession);


    divName.append(person);

    h2Element.append(name);
    // divElement2.append(profession);


});