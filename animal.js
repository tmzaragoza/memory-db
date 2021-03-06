function AnimalConstructor(name, species){
  this.name = name;
  this.species = species;
}
AnimalConstructor.prototype.speak = function() {
  return `Hi I am ${this.name} and I am a ${this.species}`;
};


const AnimalFactory = (name, species) => ({
  name,
  species,
  speak() {
    return `Hi I am ${this.name} and I am a ${this.species}`;
  }
});

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  static description() {
    throw 'You are required to implement the description method';
  }

  speak() {
    return `Hi I am ${this.name} and I am a ${this.species}`;
  }

}


module.exports = {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
};
