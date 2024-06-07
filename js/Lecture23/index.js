

class Student {

    constructor(name, email, grid, course, age, number) {
        this.name = name;
        this.email = email;
        this.course = course;
        this.number = number;
        this.grid = grid;
        this.age = age;

    }

    studentDetails() {
        console.log(`name: ${this.name}  grid:${this.grid}`);
    }
    

}

let std1 = new Student("jigar", "jigar@gmail.com", 1234, "full stack", 110, 34567676788)

let std2 = new Student("deeper", "deeper@gmail.com", 7583, "full stack", 230, 85754453)
std1.studentDetails()