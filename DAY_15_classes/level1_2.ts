// 1

class Animal {
    name: string;
    age: number;
    color: string;
    legs: number;

    constructor(name: string, age: number, color: string, legs: number) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs
    }

    name_animal(): string {
        return 'Name : ' + this.name
    }
    age_animal(): any {
        return 'Age : ' + this.age
    }
    color_animal(): string {
        return 'Couleur : ' + this.color
    }
    legs_animal(): any {
        return 'Jambes (jambes et bras c mieux que patounes): ' + this.legs
    }
    public full_animal(): any {
        return 'Prénom : ' + this.name + ' Age : ' + this.age + ' Couleur : ' + this.color + ' Jambes : ' + this.legs
    }

};



const animal = new Animal('ANIMAL', 666, 'rouge comme un demon', 54);
console.log('ton animal chelou : ', animal);

console.log('method name : ', animal.name_animal());
console.log('method age : ', animal.age_animal());
console.log('method color : ', animal.color_animal());
console.log('method legs : ', animal.legs_animal());

// 2 

class Cat extends Animal {
    communication!: string
}

const chat = new Cat('Hank', 3, 'blanc, noir, roux', 4);
chat.communication = 'hurler';
console.log('nouvelle prop chat :', chat.communication);
console.log('tout chat : ', chat.full_animal() + ' moyen de communication : ' + chat.communication);

// 2 bis

class Dog extends Animal {
    skills!: string
};
const chien = new Dog('Mishka', 3, 'marron, noir, blanc', 4);
chien.skills = 'assis, coucher, la patte, roule, saute, allez zou, bisous';
console.log('nouvelle prop chien : ', chien.skills);
console.log('tout chien : ', chien.full_animal() + ' les skills du chiens sont : ' + chien.skills);

// level 2 (je le fais là pcq il a besoin des classes créées en level 1)

class Level2 extends Animal {
    public override full_animal() {
        console.log('Saluut le level 2 !!')
    }
};

const level = new Level2('Je suis lanimal de niveau 2', 987, 'moche', 8)
level.full_animal();