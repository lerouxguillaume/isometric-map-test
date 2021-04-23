import 'phaser';
import Phaser from "phaser";

var controls;

var game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'container',
  width: 640,
  height: 640,
  backgroundColor: 0xbfbfbf,
  pixelArt: true,
  scene: {
    preload: function() {
      this.load.image('ground', 'assets/images/ground_tileset.png');
      this.load.image('wall', 'assets/images/wall_tileset.png');
      this.load.tilemapTiledJSON('map', 'assets/json/test.json');
    },
    create: function() {

      const map = this.make.tilemap({ key: 'map' });

      const tilesets = [
        map.addTilesetImage('ground_tileset', 'ground'),
        map.addTilesetImage('wall_tileset', 'wall')
      ];

      map.createLayer('wall', tilesets);
      map.createLayer('ground', tilesets);

      // this.cameras.main.scrollX = 120;
      // this.cameras.main.scrollY = 80;

      var cursors = this.input.keyboard.createCursorKeys();

      var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.04,
        drag: 0.0005,
        maxSpeed: 0.7
      };

      controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    },
    update: function(time, delta)
    {
      controls.update(delta);
    }
  },
});
