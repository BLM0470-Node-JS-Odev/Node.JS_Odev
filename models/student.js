const students = [];
module.exports = class Student {
    constructor(name, email, counter, department){
        this.name = name;
        this.email = email;
        this.counter = counter;
        this.department = department;
    }

    saveStudent() {
        students.push(this);
    }

    static getAll() {
        return products;
    }
    
}