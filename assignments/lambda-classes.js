// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    gradeStudent(student) {
        let points = parseInt((Math.random()*20) - 10);
        console.log(`Instructor ${this.name} added ${points} to ${student.name}'s grade.`);
        return points;
    }
}

class Student extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects,
        this.grade = attributes.grade
    }
    listSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(instructor) {
        let student = this;
        if (this.grade > 70) {
            return console.log(`${this.name} has graduated with a grade of ${this.grade}% !`);
        } else {
            console.log(`${this.name} failed with a grade of ${this.grade}%...`);
            this.grade += instructor.gradeStudent(student);
            return console.log(`Current grade: ${this.grade}%`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}
//Instructors
const Britt = new Instructor({
    name: "Britt",
    age: 30,
    location: "Canada",
    specialty: "Web Development",
    favLanguage: "JavaScript",
    catchPhrase: "Git your guided project ready."
});

const Jake = new Instructor({
    name: "Jake",
    age: 35,
    location: "New York",
    specialty: "Instructing",
    favLanguage: "JavaScript",
    catchPhrase: "Let's get this party started!"
});

const Brian = new Instructor({
    name: "Brian",
    age: 37,
    location: "California",
    specialty: "Back-end web development",
    favLanguage: "SQL",
    catchPhrase: "Let's get this started!"
});

//Students
let Taran = new Student({
    name: "Taran",
    age: 22,
    location: "Virginia",
    previousBackground: "Game Development",
    className: "Web22",
    favSubjects: [
        "JavaScript", "Java", "C#"
    ],
    grade: 70
});

let Jess = new Student({
    name: "Jess",
    age: 20,
    location: "Virginia",
    previousBackground: "Working with animals",
    className: "Web22",
    favSubjects: [
        "JavaScript", "HTML"
    ],
    grade: 70
});

let Jill = new Student({
    name: "Jill",
    age: 29,
    location: "Ontario",
    previousBackground: "Web Design",
    className: "Web22",
    favSubjects: [
        "HTML", "CSS"
    ],
    grade: 70
});

//Project Managers
const Leslie = new ProjectManager({
    name: "Leslie",
    age: 25,
    location: "Nevada",
    gradClassName: "Web19",
    favInstructor: "Britt"
});

const Jack = new ProjectManager({
    name: "Jack",
    age: 40,
    location: "California",
    gradClassName: "Web17",
    favInstructor: "Brian"
});

const Jonas = new ProjectManager({
    name: "Jonas",
    age: 31,
    location: "Washington State",
    gradClassName: "Web18",
    favInstructor: "Jake"
});

console.log("Instructors -");
console.log(`Britt's catch phrase is, "${Britt.catchPhrase}"`);
console.log(`Jake's specialty is ${Jake.specialty}!`);
console.log(`Brian's favorite language is ${Brian.favLanguage}!`);

console.log("Students -");
console.log(`Taran is a student in ${Taran.className}!`);
console.log(`Jess has a background in ${Jess.previousBackground}!`);
console.log(`Jill's Favorite subjects are ${Jill.favSubjects}!`);

console.log("Project Managers -");
console.log(`Leslie graduated from ${Leslie.gradClassName}!`);
console.log(`Jack's favorite instructor is ${Jack.favInstructor}!`);
console.log(`Jonas graduated from ${Jonas.gradClassName}!`);

Jess.speak();
Britt.demo("Web22");
Jake.grade(Jill, "Web22");
Taran.listSubjects();
Jill.graduate(Brian);
Leslie.standUp("Web22");