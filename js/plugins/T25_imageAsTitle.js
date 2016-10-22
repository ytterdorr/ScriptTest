//T25_imageAsTitle
var commandImages = ['Menu01', 'Menu02', 'Menu03'];




// Move the start menu out of sight.
Scene_Title.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_TitleCommand();
    this._commandWindow.visible = false; // Still clickable
    // Move commands out of the window
    this._commandWindow.x = Graphics.width * 2;
    this._commandWindow.y = Graphics.height * 2;
    this._commandWindow.setHandler('newGame',  this.commandNewGame.bind(this));
    this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    this._commandWindow.setHandler('options',  this.commandOptions.bind(this));
    this.addWindow(this._commandWindow);
};

// Create the first image
// Copy create, start and update
// Remove start?

// Alias create

/*
// This is the original create function.
Scene_Title.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.createForeground();
    this.createWindowLayer();
    this.createCommandWindow();
};
*/

var soulTitleTutorial_create = Scene_Title.prototype.create;

Scene_Title.prototype.create = function() {
    soulTitleTutorial_create.apply(this); // Do the usual stuff
    this.createImageCommands
};

Scene_Title.prototype.createImageCommands = function(){
	// Create new sprite
	var this._imageCommands = new Sprite();
	this.addChild(this._imageCommands);
};

Scene_Title.prototype.update = function() {
    if (!this.isBusy()) {
        this._commandWindow.open();
    }
    Scene_Base.prototype.update.call(this);
};