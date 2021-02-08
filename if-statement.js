const fruit = 'orange';
let nameLength = fruit =>
{
  let length = fruit.length > 5 ? "The fruit name has more than five characters.": "The fruit name has five characters or less."
  return length;
} 
console.log(nameLength(fruit));