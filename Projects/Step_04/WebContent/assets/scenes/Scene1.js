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

	this.game.add.sprite(520, 444, 'player', 0, this);

	this.game.add.tileSprite(416, 598, 384, 93, 'tiles', '14', this);

	this.game.add.sprite(288, 598, 'tiles', '13', this);

	this.game.add.sprite(800, 598, 'tiles', '15', this);


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

