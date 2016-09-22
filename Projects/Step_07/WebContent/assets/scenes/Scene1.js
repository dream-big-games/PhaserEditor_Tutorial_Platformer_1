// Generated by Phaser Editor v1.2.1

/**
 * Scene1.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function Scene1(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	var BG = this.game.add.sprite(-18, -27, 'BG', null, this);
	BG.scale.setTo(1.2388787593597599, 1.1360282940928768);

	this.game.add.tileSprite(416, 598, 384, 93, 'tiles', '14', this);

	this.game.add.sprite(288, 598, 'tiles', '13', this);

	this.game.add.sprite(800, 598, 'tiles', '15', this);

	var player = this.game.add.sprite(520, 444, 'player', 0, this);
	player.anchor.setTo(0.5, 0.0);
	player.animations.add('walk', [0, 1], 4, true);
	player.animations.add('jump', [2], 60, false);
	player.animations.add('idle', [3], 60, false);
	this.game.physics.arcade.enable(player);
	player.body.setSize(84.5, 91.66665649414062, 53.3333740234375, 43.333343505859375);

	var collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);

	this.game.add.tileSprite(288, 607, 639, 21, 'tiles', 'physics', collisionLayer);

	 // public fields

	this.fPlayer = player;
	this.fCollisionLayer = collisionLayer;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here

