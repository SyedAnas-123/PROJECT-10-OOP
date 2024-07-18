import inquirer from "inquirer";
//class student
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
//class person
class Person {
    studens = [];
    addStudent(obj) {
        this.studens.push(obj);
    }
}
//person ke array ko initiate kiya hai idhr
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("WELCOME !!");
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "WHO WOULD YOU LIKE TO INTERACT WITH? ",
                choices: ["staff", "student", "exit"],
            },
        ]);
        if (ans.select == "staff") {
            console.log("YOU APPROACH THE STAFF ROOM . PLEASE FEEL FREE TO ASK ANY QUESTION ");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "ENTER THE STUDENTS NAME YOU WISH TO ENGAGE WITH",
                },
            ]);
            const student = persons.studens.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`HELLO I AM ${name.name} .NICE TO MEET YOU !`);
                console.log("NEW STUDENT ADDED");
                console.log("CURRENT STUDENT LIST :");
                console.log(persons.studens);
            }
            else {
                console.log(`HELLO I AM ${student.name} . NICE TO SEE YOU AGAIN !`);
                console.log("EXISTING STUDENT LIST : ");
                console.log(persons.studens);
            }
        }
        else if (ans.select == "exit") {
            console.log("EXITING THE PROGRAM");
            process.exit();
        }
    } while (true);
};
programStart(persons);
