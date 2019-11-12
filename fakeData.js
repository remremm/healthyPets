var faker = require('faker');

const animal = ['dog', 'fish', 'cat'];
const breed = ['husky', 'malamute', 'corgi'];
const catBreed = ['tabby', 'persian', 'russian blue'];
const fishBreed = ['koi', 'gold', 'neemo'];

const data = [];

const makeData = () => {
  for(var i = 0; i < 100; i++){
    let animalType = animal[Math.floor(Math.random(0) * 3)];
    let breedType;
    if(animalType === 'dog'){
      breedType = breed[Math.floor(Math.random(0) * 3)];
    }else if(animalType === 'cat'){
      breedType = catBreed[Math.floor(Math.random(0) * 3)];
    }else if(animalType === 'fish'){
      breedType = fishBreed[Math.floor(Math.random(0) * 3)];
    }

    let name = faker.name.findName();
    let price = faker.commerce.price();
    let image = faker.image.animals();

    let animalData = {
      id: i + 1,
      name: name,
      animal: animalType,
      breed: breedType,
      price: price,
      imageUrl: image
    }
    
    data.push(animalData)
  }
}

makeData();

module.exports = data;

