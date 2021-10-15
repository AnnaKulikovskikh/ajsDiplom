import themes from './themes';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);

    //const callback1 = this.gamePlay.bindToDOM(this.gamePlay.container);
    //this.gamePlay.addNewGameListener(callback1);
    console.log(`positions = ${this.gamePlay.positions}`);
    //const callback = this.gamePlay.redrawPositions(this.gamePlay.positions);
    //this.gamePlay.addNewGameListener(callback);
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
