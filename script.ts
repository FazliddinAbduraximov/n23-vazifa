/// 1- masala
abstract class Transport{
    abstract move():void;
}

class Car extends Transport{
    move(): void {
        console.log('Car is moving on road')
    }
}

class Bike extends Transport{
    move(): void {
        console.log('Bike is moving fast')
    }
}

class Plane extends Transport{
    move(): void {
        console.log('Plane is flying"')
    }
}

const car:Transport=new Car();
const bike:Transport=new Bike();
const plane:Transport=new Plane();
// car.move();
// bike.move();
// plane.move();

/// ranqilishni masssiv yoli
const barchas:Transport[]=[new Car(),new Bike(),new Plane()];

// console.log('\nMassiv bilan class metodiga murojat qilish\n')
// barchas.forEach(e=>e.move());


////. 2-masala

abstract class Shape{
    abstract area(a?:number,b?:number,c?:number):number;
}

class Circle extends Shape{
    area(a:number): number {
        console.log('\nS=PI*R*R')
        return 3.14*a**2
    }
}

class Rectangle extends Shape{
    area(a: number, b: number): number {
        console.log('\nS=a*b');
        return a*b
    }
}

class Triangle extends Shape {
    area(a: number, b: number, c: number): number {
        let p = (a + b + c) / 2
        console.log('\nS=p * (p - a) * (p - b) * (p - c)');
        return Math.sqrt(p * (p - a) * (p - b) * (p - c))
    }
}

const shaklar:Shape[]=[new Circle(),new Rectangle(),new Triangle()];

// shaklar.forEach((e,i)=>{
//     if(i==0){
//         console.log(e.area(4));
//     }
//     else if(i==1){
//         console.log(e.area(4,4));
//     }
//     else{
//         console.log(e.area(3,4,5));
//     }
// });


//// 3-masala

abstract class Animal{
    abstract ovoz():void;
}

class It extends Animal{
    ovoz(): void {
        console.log('Vov Vov')
    }
}

class Mushuk extends Animal{
    ovoz(): void {
        console.log('Miyow Miyow')
    }
}

class Sigir extends Animal{
    ovoz(): void {
        console.log('Mo Mo')
    }
}

const hayvonlar:Animal[]=[new It(), new Mushuk(),new Sigir()];
// hayvonlar.forEach(e=>e.ovoz());


//// 4-masala
//// utilitalar

interface User{
    name:string,
    age?:number,
    email?:string,
    password?:string
}

const user1:Required<User>={
    name:'Alisher',
    age:25,
    email:'alisher@gmail.com',
    password:'Alisher123'
}
// console.log(user1);


//// 5-massiv

interface User1{
    name:string,
    age?:number,
    email?:string,
    password?:string
}

function updateProfile(user:User1,update:Partial<User1>):User1{
    return {...user,...update}
}
const user:User1={
    name:"Fazliddin"
}
const userUp:Object={
    age:29,
    email:'fazliddin@gmail.com',
    password:'Fazliddin123'
}
// console.log(user)
// console.log(userUp)
// console.log(updateProfile(user,userUp))


//// 6-masala

interface User2{
    name:string,
    age?:number,
    email?:string,
    password?:string
}

const user2:Pick<User2, "name" | "age">={
    name:'Alisher',
    age:54
}
const user3:Omit<User2,"name" | "email">={
    age:34
}

// console.log(user2)
// console.log(user3)

//// 7-masala

type Status = "pending" | "success" | "failed";

const status1:Exclude<Status,'pending'> ='failed';
const status2:Exclude<Status,"pending" |"failed"> = "success"
const status3:Extract<Status, "success" | "failed">='failed'
const status4:Extract<Status, "success" | "failed">='success'
// console.log(status1)
// console.log(status2)
// console.log(status3)
// console.log(status4)

//// 8-masala

type Role = "admin" | "editor" | "viewer"

const permissions: Record<Role, string[]> = {
  admin: ["create", "edit", "delete", "view"],
  editor: ["edit", "view"],
  viewer: ["view"]
}

// console.log(permissions.admin)
// console.log(permissions.editor)
// console.log(permissions.viewer)


//// 9-masala

type MaybeName = string | null | undefined;
const maybeName:NonNullable<MaybeName>='Fazliddin'
// console.log(maybeName)







//// 10-masala
/// returntype

function func(){
    return {
        name:'Ali',
        age:23
    }
}

type userType=ReturnType<typeof func>;
const user5:userType={name:'vali',age:24};

// console.log(user5)

function pow(a:number,b:number):number{
    return a**b;
}
type parametrs=Parameters<typeof pow>;
const sonlar:parametrs=[44,44];




