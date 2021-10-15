export default class Team {
    constructor(allowTypes, maxLevel, characterCount) {
    this.allownTypes = allowTypes;
    this.maxlevel = maxLevel;
    this.characterCount = characterCount;
    }
    
    genTeam () {
        return generateTeam(this.allowedTypes, this.maxLevel, this.characterCount);
    }
}
