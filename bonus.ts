
//// bonus masalalasi
//// 1- masala

abstract class Product{
    constructor(public nom:string,public narx:number){
    }
    abstract getDiscountPrice():string;
}

class Clothes extends Product{
    getDiscountPrice(): string {
        return `${this.nom} : Chegirmadagi narxi=>${this.narx*0.9}`;
    }
}

class Electronics extends Product{
    getDiscountPrice(): string {
        return `${this.nom} : Chegirmadagi narxi=>${this.narx*0.8}`;
    }
}

class Book extends Product{
    getDiscountPrice(): string {
        return `${this.nom} : Chegirmadagi narxi=>${this.narx*1}`;
    }
}

const category:Record<"clothes" | "electronics" | "books", Product[]>={
    clothes:[
        new Clothes("koylak",100000),
        new Clothes("shim",200000),
        new Clothes("jenfir",50000)
    ],
    electronics:[
        new Electronics("macbook",900),
        new Electronics("lenova",700)
    ],
    books:[
        new Book("Farxod va shirin",100),
        new Book("Zulmatdgai saltanat",120)
    ]
}
// Object.values(category).forEach(e => e.forEach(el=>console.log(el.getDiscountPrice())));



//// 2-masala

interface Users{
    name:string
    email:string
    password:string
    age?:number
}

const regfistratsiyaUser1:Required<Users>={
    name:'Fazliddin',
    email:'Fazliddin@gmail.com',
    password:'Fazliddin123',
    age:29
}

function updateUsers(user:Users,update:Partial<Users>):Users{
    return {...user,...update};
}
let oldUser:Users={
    name:'Fazliddin',
    email:'Fazliddin@gmail.com',
    password:'Fazliddin123',
}

const updateU:Partial<Users>={
    password:'Fazliddin1234',
    age:25
}
// console.log(oldUser);
oldUser=updateUsers(oldUser,updateU);
// console.log(oldUser);


const user7:Pick<Users,'name' | 'email'>={
    name:'Ali',
    email:'ali@gmail.com'
}
// console.log(user7);


////  3-masala


abstract class Shape1{
    abstract area(a?:number,b?:number,c?:number):number;
}

class Circle1 extends Shape1{
    area(a:number): number {
        console.log('\nS=PI*R*R')
        return 3.14*a**2
    }
}

class Rectangle1 extends Shape1{
    area(a: number, b: number): number {
        console.log('\nS=a*b');
        return a*b
    }
}

class Triangle1 extends Shape1{
    area(a: number, b: number, c: number): number {
        let p = (a + b + c) / 2
        console.log('\nS=p * (p - a) * (p - b) * (p - c)');
        return Math.sqrt(p * (p - a) * (p - b) * (p - c))
    }
}

const shaklar1:Shape1[]=[new Circle1(),new Rectangle1(),new Triangle1()];

shaklar1.forEach((e,i)=>{
    if(i==0){
        console.log(e.area(4));
    }
    else if(i==1){
        console.log(e.area(4,4));
    }
    else{
        console.log(e.area(3,4,5));
    }
});

type AreaReturnType = ReturnType<Circle["area"]>;
type CircleParams = ConstructorParameters<typeof Circle>;
type AreaParams = Parameters<Circle["area"]>;