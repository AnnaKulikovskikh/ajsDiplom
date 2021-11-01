import Character from './Character';

export default class PositionedCharacter {
  constructor(character, position) {
    if (!(character instanceof Character)) {
      throw new Error('character must be instance of Character or its children');
    }

    if (typeof position !== 'number') {
      throw new Error('position must be a number');
    }

    this.character = character;
    this.position = position;
    this.chargePositions = [];
  }

  static getPosition(character) {
    if (this.position == -1) {
    //return occasion position for new character
      let possible = [];
      let s = 6;
      if (character.type == "Bowman" || character.type == "Swordman" || character.type == "Magic") {
        let s = 0;
      }
      for (let i = 0; i < 8; i ++) {
        possible.push(s);
        possible.push(s + 1);
        s += boxSize;
      }  
      while (this.position == -1 || this.chargePositions.includes(this.position)) {
        this.position = possible[Math.floor(Math.random() * possible.length)];
      }
      this.chargePositions.push(this.position);
      return {position: this.position, character: this.character};
        
    } //if new Character
  } //getPosition

}
