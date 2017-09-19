import extend from 'extend'
import observable from 'riot-observable'

export default class Speech {
    constructor(options) {
        observable(this)
        this.options = {
            language: 'de-DE',
            voice: speechSynthesis.getVoices()[6],
        }
        this.options = extend(this.options, options)
    }

    speak(text) {
        this.trigger('start')
        console.log('speak ' + text);
        this.synthesis = new SpeechSynthesisUtterance(text)
        this.synthesis.voice = this.options.voice
        this.synthesis.lang = this.options.voice
        speechSynthesis.speak(this.synthesis)
        this.synthesis.onend = ()=>{
            this.trigger('end')
        }
    }
}
