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
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);
    let positions = [];
    let myTeam = Team.generation([new Bowman, new Swordsman], 1, 2);
    for (let i of myTeam) {
      positions.push[PositionedCharacter.getPosition(i)];
    };
    let enemyTeam = Team.generation([new Undead, new Vampire], 1, 2);
    for (let i of enemyTeam) {
      positions.push[PositionedCharacter.getPosition(i)];
    };
    
    //const callback1 = this.gamePlay.bindToDOM(this.gamePlay.container);
    //this.gamePlay.addNewGameListener(callback1);
    
    const callback = this.gamePlay.redrawPositions(positions);
    this.gamePlay.addNewGameListener(callback);
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
