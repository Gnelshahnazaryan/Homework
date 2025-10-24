class Animal{

    constructor(name){
        
        this.name = name;

    }

    speak(){

        console.log(`${this.name} is speaking`);
    
    }

}


class Dog extends Animal{

}


let dog = new Dog("Jeko");
dog.speak();
