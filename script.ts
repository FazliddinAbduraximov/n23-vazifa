/////. class decarator
function logClass(constructor:Function){
    console.log("Bu class nomi",constructor.name);
}
@logClass
class Animal{
    constructor(name:string){
    }
}
const dog=new Animal('Rex');

function Entity(constructor:Function){
    constructor.prototype.createAt=new Date();
}
@Entity
@logClass
class User{
    fullName:string;
    email:string;
    constructor(fullName:string,email:string){
        this.fullName=fullName;
        this.email=email;
    }
}

const user1=new User('fazliddin',"faz@gmail.com");
console.log(user1["createAt"]);



/// metod decarator

function logMetod(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    const original=descriptor.value;
    descriptor.value=function (...args:any[]) {
        console.log(`Method ${propertyKey} chaqirildi`,args);
        return original.apply(this,args);
    }
}
function logMetod2(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    const original=descriptor.value;
    descriptor.value=function (...args:any[]) {
        console.log(`logMethod2`);
        return original.apply(this,args);
    }
}

class Calculyator{
    @logMetod
    @logMetod2
    add(a:number,b:number){
        return a+b;
    }
}

const calculyator = new Calculyator();
console.log(calculyator.add(1,1));



//// property decorator
function ReadOnly(target:any,propertyKey:string){
    Object.defineProperty(target,propertyKey,{
        writable:false,
        configurable:false
    })
}

class Users{
    @ReadOnly
    name:"Ali";
}

const user2=new Users();

// user2.name="vali"


///// Parmetr decarator

function LogParam(target:any,methodName:string,paramIndex:number){
    console.log(`Bu parametr ${paramIndex} ${methodName} metodga tegishli`);
}

class User2{
    greet(@LogParam name:string){
        console.log(`Salom ${name}`)
    }
}

const user3=new User2();
user3.greet('Fazliddin');