class Animal{

    constructor(name){
        
        this.name = name;

    }

    speak(){

        console.log(`${this.name} is speaking`);
    
    }

}


class Dog extends Animal{

    speak(){

        console.log(`${this.name} is barking`);
        
    }


}


let dog = new Dog("Dog");
dog.speak();
