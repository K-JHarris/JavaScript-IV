// CODE here for your Lambda Classes
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors

class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
};

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.speciality = attr.speciality;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }  
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} recieves a failing score on ${subject}`)
    }
};

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has completed a sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(student, channel){
        console.log(`${student.name} announces to ${channel} to @channel standy times!`) //this ones weird
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
const MemeMan = new ProjectManager({
    name: `Meme Man`,
    age: `Timeless`,
    location: `In all things`,
    gender: `Meme Man is beyond gender`,
    specialty: `The human mind`,
    favLanguage: `Memes`,
    catchPhrase: `bottom text`,
    gradClassName: `Memeology19`,
    favInstructor: `Himself`
});

const BillNye = new Instructor({
    name: `Bill Nye`,
    age: 40, //no idea how old bill nye is and i dont get a 3 on this project if I google it
    location: `My house`,
    gender: `Male`,
    specialty: `Science`,
    favLanguage: `I assume english`,
    catchPhrase: `Bill Bill Bill Bill Bill Bill Bill`
});
const notBillNye = new Instructor({ //i got really lazy with having multiple objects on each class
    name: `Nill Bye`,
    age: 40, //no idea how old bill nye is and i dont get a 3 on this project if I google it
    location: `Faraway`,
    gender: `Male`,
    specialty: `Ass kicking`,
    favLanguage: `German`,
    catchPhrase: `When the going gets tough, the tough get going`
});

const Khari = new Student({
    name: 'Khari',
    age: 21,
    location: 'California',
    gender: 'Nb',
    previousBackground: 'NEET',
    className: 'webpt4',
    favSubjects: 'sleep'
});
const notKhari = new Student({
    name: 'Bhari',
    age: 12,
    location: 'Chechnya',
    gender: 'Male',
    previousBackground: 'Construction Worker',
    className: 'webpt2',
    favSubjects: 'Lumber Working'
});

MemeMan.debugsCode(Khari, `math`)
MemeMan.standUp(Khari, `memeland`)
Khari.speak();
notKhari.speak();
notBillNye.demo(`Science`);
BillNye.grade(Khari, `Math`);