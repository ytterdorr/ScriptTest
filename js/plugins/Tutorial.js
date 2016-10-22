// Tutorial 19 - Create a basic scene

function Window_Sample() {
    this.initialize.apply(this, arguments);
}

Window_Sample.prototype = Object.create(Window_Base.prototype);
Window_Sample.prototype.constructor = Window_Sample;

Window_Sample.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh(); // Refresh every time
};

Window_Sample.prototype.windowWidth = function() {
    return 240;
    //return Graphics.width -50;
};

Window_Sample.prototype.windowHeight = function() {
    return this.fittingHeight(1);
    //return Graphics.height -50;
};

Window_Sample.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear(); // Clear between every reload
    // window.location = "http://www.google.com";
    this.drawTextEx("<a href='https://www.google.se/?gfe_rd=cr&ei=V7HpV5T8MI-r8wff5puoBA'>'Hey there...'</a>", 0, 0); // What's in the window
};


Window_Sample.prototype.open = function() { // Not really necessary?
    this.refresh();
    Window_Base.prototype.open.call(this);
};



//


function Sample_Scene() {
    this.initialize.apply(this, arguments);
}

Sample_Scene.prototype = Object.create(Scene_MenuBase.prototype);
Sample_Scene.prototype.constructor = Sample_Scene;

Sample_Scene.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Sample_Scene.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    // Create window
    this._sampleWindow = new Window_Sample(0, 0);
    this._sampleWindow.x = Graphics.width / 2 - 100;
    this._sampleWindow.y = Graphics.width / 2 - 100;
    // add window
    this.addWindow(this._sampleWindow); 

};

Sample_Scene.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
};

Sample_Scene.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
	if (Input.isTriggered('cancel')) {
		SoundManager.playCancel();
		SceneManager.goto(Scene_Map);
	}
};