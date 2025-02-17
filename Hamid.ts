//Classes and object
class person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    display(): void{
        console.log(this.name);
        console.log(this.age);
    }
}