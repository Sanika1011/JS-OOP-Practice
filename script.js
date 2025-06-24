class Person {
    constructor(name){
        // console.log("enter parent constructor");
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

    // work(){
    //     console.log("do nothing");
    // }
}

class Engineer extends Person{
    constructor(name){
        // console.log("enter child constructor");
        super(name);//to invoke parent class constructor
        // this.branch = branch;
        // console.log("exit child constructor");
    }
    work(){
        super.eat();
        console.log("need to work hard");
    }
}

// class Doctor extends Person{
//     work(){
//         console.log("treats patients");
//     }
// }


let engobj = new Engineer("sanika");
// let sanika = new Doctor();




// --------------------------class---------------------------------
// class Toyota{
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");    
//     }

//     setbrand(brand){
//         this.brand = brand;
//     }
// }

// let kia = new Toyota();
// kia.setbrand("kia");






// ----------------constructor----------------------------------------
// class Toyota {
//     constructor(brand, mileage){
//         console.log("creating new object...");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }


// let kia = new Toyota("kia",10); //constructor will be invoked
// console.log(kia);
// let mini = new Toyota("mini",20); //constructor will be invoked
// console.log(mini);







// ----------------------------Prototype---------------------------
// const student = {
//     fullName : "Mark Smith",
//     marks : 84.5,
//     printMarks : function() {
//         console.log("marks = " , this.marks);
//     },
// };


// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanarjun = {
//     salary : 5000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     },
// };

// karanarjun.__proto__ = employee;



// Q.1. Qs. You are creating a website for your college. Create a class 
// User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data. 

// let data = "imp data";

// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data = ", data);
//     }

// }

// let student1 = new User("john","abc@gmail.com");
// let student2 = new User("sam","sam@gmail.com");

// let teacher = new User("abc","yyz@gmail.com");



// Q.2. Create a new class called Admin which inherits from  User. Add a new method called
// editData to Admin that allows it to edit website data.


let data = "imp data";
class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
        
    viewData(){
        console.log("data = ", data);
    }
        
}

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "some new value";
    }
}


let student1 = new User("john","abc@gmail.com");
let student2 = new User("sam","sam@gmail.com");

let teacher = new User("abc","yyz@gmail.com");

let admin1 = new Admin("jack", "jack@gmail.com"); 