import { MainScene } from './scenes/main';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Boilerplate',
  url: '',
  version: '1.0',
  width: 800,
  height: 600,
  backgroundColor: 0x3a404d,
  type: Phaser.AUTO,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [MainScene]
};
