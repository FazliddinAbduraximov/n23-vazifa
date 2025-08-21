var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/////. class decarator
function logClass(constructor) {
    console.log("Bu class nomi", constructor.name);
}
let Animal = class Animal {
    constructor(name) {
    }
};
Animal = __decorate([
    logClass,
    __metadata("design:paramtypes", [String])
], Animal);
const dog = new Animal('Rex');
function Entity(constructor) {
    constructor.prototype.createAt = new Date();
}
let User = class User {
    constructor(fullName, email) {
        this.fullName = fullName;
        this.email = email;
    }
};
User = __decorate([
    Entity,
    logClass,
    __metadata("design:paramtypes", [String, String])
], User);
const user1 = new User('fazliddin', "faz@gmail.com");
console.log(user1["createAt"]);
/// metod decarator
function logMetod(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method ${propertyKey} chaqirildi`, args);
        return original.apply(this, args);
    };
}
function logMetod2(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`logMethod2`);
        return original.apply(this, args);
    };
}
class Calculyator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    logMetod,
    logMetod2,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Calculyator.prototype, "add", null);
const calculyator = new Calculyator();
console.log(calculyator.add(1, 1));
//// property decorator
function ReadOnly(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
        configurable: false
    });
}
class Users {
}
__decorate([
    ReadOnly,
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
const user2 = new Users();
// user2.name="vali"
///// Parmetr decarator
function LogParam(target, methodName, paramIndex) {
    console.log(`Bu parametr ${paramIndex} ${methodName} metodga tegishli`);
}
class User2 {
    greet(name) {
        console.log(`Salom ${name}`);
    }
}
__decorate([
    __param(0, LogParam),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], User2.prototype, "greet", null);
const user3 = new User2();
user3.greet('Fazliddin');
