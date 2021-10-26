import generateTeam from './generators';

export default class Team {
//   constructor(allowTypes) {
//     if (allowTypes = new Character) {
//         throw new Error('Not allowed type!');
//     }
//     this.allownTypes = allowTypes;
//   }
    
  static generation(allowTypes, maxLevel, characterCount) {
    return generateTeam(allowTypes, maxLevel, characterCount);
  }    
}
