import Speech from './speech'

export default class SpeechDialog {
	constructor(annyang, commands) {
        window.x = this
        this.annyang = annyang
        this.sounds = require('../data/sounds')
        this.commands = commands
        this.timeoutDuration = 5e3
        this.timeout = 0
        this.audio = document.createElement('audio')
        this.annyang.addCallback('resultMatch', (phrase, command, alternatives) => {this.commandMatch(phrase, command, alternatives)})
        this.annyang.addCallback('result', (phrases) => {})
        this.setActiveCommand()
        this.setCommands()
	}

    commandMatch(phrase, command, alternatives) {
        clearTimeout(this.timeout)
        let activeCommand = this.getActiveCommand()[command]
        this.playSound(activeCommand)
        this.speak(activeCommand)
        this.setCommands(command)
        // timeouts have to be managed differently depending on dialog stage
        this.timeout = setTimeout(()=>{
            this.setCommands()
            this.playSound(this.sounds.off)
        },this.timeoutDuration)
    }

    setCommands(command=false) {
        this.annyang.removeCommands()
        if (this.getActiveCommand().hasOwnProperty(command)) {
            this.setActiveCommand(command)
        } else {
            this.setActiveCommand()
        }
        this.annyang.addCommands(this.getActiveCommand())
    }

    playSound(command) {
        if (command.hasOwnProperty('sound')) {
            this.audio.setAttribute('src', command.sound);
            this.audio.play();
        }
    }

    speak(command) {
        console.log(command.speak);
        if (command.hasOwnProperty('speak')) {
            this.annyang.pause()
            var speech = new Speech()
            speech.on('end', ()=>{
                this.annyang.resume()
            })
            speech.speak(command.speak)
        }
    }

    getActiveCommand() {
        return this.activeCommand
    }

    setActiveCommand(command = false) {
        if (command && this.activeCommand[command].hasOwnProperty('options')) {
            this.activeCommand = this.activeCommand[command].options
        } else {
            this.activeCommand = this.commands
        }
    }

}
