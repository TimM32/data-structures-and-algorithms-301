'use strict';

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    let data = {[key]: value};
    this.buckets[position] = data;
  }

  get(key){
    let position = this.hash(key);
    if(this.buckets[position]){
      return this.buckets[position][key];
    } else {
      return null;
    }
  }

  has(key){
    let position = this.hash(key);
    let result = this.buckets[position] ? true : false;
    return result;
  }

  keys(){
    let results = this.buckets.reduce((keysArr, bucket) => {
      if(bucket){
        keysArr.push(Object.keys(bucket)[0]);
        return keysArr;
      } else {
        return keysArr;
      }
    }, []);
    return results;
  }

}

const repeatedWords = (string) => {
  let table = new HashTable(1024);
  let lowerString = string.toLowerCase();
  let splitString = lowerString.split(' ');
  for(let i = 0; i < splitString.length; i++){
    if(!table.get(splitString[i])){
      table.set(splitString[i], 1);
    } else {
      return splitString[i];
    }
  }
};

module.exports = { HashTable, repeatedWords };
