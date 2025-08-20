//// 1-masala
type l_role='admin' | 'user' | 'guest'
type User={
    id:number,
    fullname:string,
    is_activ:boolean,
    role:l_role
}

const users: User[] = [
    { id: 1, fullname: "Ali Valiyev", is_activ: true, role: "admin" },
    { id: 2, fullname: "Dilnoza Karimova", is_activ: false, role: "user" },
    { id: 3, fullname: "Farrux Abdullayev", is_activ: true, role: "guest" },
    { id: 4, fullname: "Malika Usmonova", is_activ: true, role: "user" },
    { id: 5, fullname: "Javlon Sobirov", is_activ: false, role: "guest" }
]

// console.log(users)

///// 2-masala

type alyncProduct={
    name: string
    price: number
    discount: number | null
}

const products: alyncProduct[] = [
    { name: "Telefon", price: 350, discount: 50 },
    { name: "Noutbuk", price: 1200, discount: 100 },
    { name: "Televizor", price: 800, discount: null },
    { name: "Sichqoncha", price: 25, discount: 5 },
    { name: "Klavitura", price: 45, discount: null }
]
// console.log(products);

//// 3-masala

type location={
    latitude: number,
    longitude: number
}

const locations: location[] = [
    { latitude: 41.2995, longitude: 69.2401 }, // Toshkent
    { latitude: 39.6550, longitude: 66.9597 }, // Samarqand
    { latitude: 40.1039, longitude: 65.3688 }, // Buxoro
    { latitude: 37.2374, longitude: 67.2783 }, // Termiz
    { latitude: 42.4600, longitude: 59.6150 }  // Nukus
]
// console.log(locations);

//// 4-masala

type calculyator={
    a: number
    b: number
    operation: '+' | '-' | '*' | '/'
}
function cal(data:calculyator):number | string{
    return  data.operation=='+'?data.a+data.b:data.operation=='-'?data.a-data.b:data.operation=='*'?data.a*data.b:data.a==0?data.a/data.b:'nolga bolish mumkun emas';
}
const ifoda:calculyator={
    a:3,
    b:4,
    operation:'*'
}
// console.log(cal(ifoda));

//// 5-masala

class Animal{
    public name:string;
    protected age:number;
    private type:string;
    constructor(name: string, age: number, type: string){
        this.name=name;
        this.age=age;
        this.type=type;
    }

    getInfo(){
        return `Name:${this.name} Age:${this.age} Type:${this.type}`;
    }
}
const sabaka = new Animal("Rex", 3, "it")
const cat = new Animal("tom", 2, "mushuk")
const cow = new Animal("masha", 8, "sigir")
// console.log(sabaka.getInfo())
// console.log(cat.getInfo())
// console.log(cow.getInfo())


////6-masala

class BankAccount {
    readonly accountNumber: number
    private balance: number
    static bankName: string

    constructor(bankName: string, balance: number, accountNumber: number) {
        BankAccount.bankName = bankName 
        this.balance = balance
        this.accountNumber = accountNumber
    }
    get accountBalance(): number {
        return this.balance
    }
    set deposit(sum: number) {
        this.balance += sum
    }
}
const milliy = new BankAccount("Milliy Bank", 1000, 12345)

// console.log(BankAccount.bankName)
// console.log(milliy.accountNumber)
// console.log(milliy.accountBalance)
// milliy.deposit = 1000
// console.log(milliy.accountBalance)


//// 7-masala
enum Status {
    ACTIVE,
    INACTIVE,
    BLOCKED
}
interface User1 {
    id: number
    username: string
    email: string
    status: Status
}

const user1: User1 = {
    id: 1,
    username: "fazliddin",
    email: "fazliddin@example.com",
    status: Status.ACTIVE
}

const user2: User1 = {
    id: 2,
    username: "ali",
    email: "ali@example.com",
    status: Status.INACTIVE
}

const user3: User1 = {
    id: 3,
    username: "vali",
    email: "vali@example.com",
    status: Status.BLOCKED
}

// console.log(user1)
// console.log(user2)
// console.log(user3)

//// 8-masala
function wrapInArray<T>(value: T): T[] {
    return [value]
}

console.log(wrapInArray(123))
console.log(wrapInArray('123'))
console.log(wrapInArray([32323]))
console.log(wrapInArray<string | null>(null)) // (string|null)[]
