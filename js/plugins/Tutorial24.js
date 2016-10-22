//Tutorial 24
// Plugin_Command

// Alias the plugin command function
var soul_interpreterCommand = Game_Interpreter.prototype.pluginCommand;

Game_Interpreter.prototype.pluginCommand = function(command, args) {
    // to be overridden by plugins
    soul_interpreterCommand.apply(this);
    // printString alert "Hello World"

    if (command == 'access'){
    	switch(args[0]) {
    		case 'item':
    			SceneManager.push(Scene_Item);
    			break;
    		case 'save':
    			SceneManager.push(Scene_Save);
    			break;
    	}
    }
};

