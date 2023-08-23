const root = document.getElementById("root");

const NAME = "FREELANCERS";

const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const heading = document.createElement("h1");
    heading.innerText = NAME;
    root.appendChild(heading);

    const unorderedList = document.createElement("ul");
    unorderedList.setAttribute ("id", "theList");
    for (let i =0; i <= users.length - 1; i++) {
        const li = document.createElement("li");

        li.innerText = users[i].name + ", " + users[i].age + ", " + users[i].occupation;
        unorderedList.appendChild(li);
    }

    root.appendChild(unorderedList);
};

main();

