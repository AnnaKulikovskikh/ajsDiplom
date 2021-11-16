import themes from './themes';
import Team from './Team';
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Vampire from './Vampire';
import PositionedCharacter from './PositionedCharacter';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.positions = [];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.addNewGameListener(GameController.startGame);
  }

  startGame() {
    let myTeam = Team.generation([Bowman, Swordsman], 1, 2);
    for (let i of myTeam) {
      let access = [0,1,8,9,16,17,24,25,32,33,40,41,48,49,56,57];
      access = access.filter( ( el ) => !this.positions.position.includes( el ) );
      this.positions.push({
        position: access[Math.floor((Math.random() * access.length))],
        character: i,
      })
    }
    let enemyTeam = Team.generation([Undead, Vampire], 1, 2);
    for (let i of enemyTeam) {
      let access = [6,7,14,15,22,23,30,31,38,39,46,47,54,55,62,63];
      access = access.filter( ( el ) => !this.positions.position.includes( el ) );
      this.positions.push({
        position: access[Math.floor((Math.random() * access.length))],
        character: i,
      })
    }
    GamePlay.redrawPositions(positions);
  }
  
  
  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
