import SOUNDS from '../data/sounds'
export default class Commands {
    constructor() {
        this.commands = {
            computer : {
                regexp: /.*computer.*/,
                callback: match=>{},
                sound: SOUNDS.on,
                //speak: 'ja?',
                options: {
                    switchRoom: {
                        regexp: /(?:gehen?|wechsle|wechseln).*?(Wohnzimmer|Küche|Arbeitszimmer|Schlafzimmer|Bad)/,
                        callback: room => {
                            console.log(this);
                        }
                    },
                    // (Licht)|(an|ein|aus|ab)
                    // LED color: (LED|ambiente)|(rot|orange|gelb|grün|blau|violett)
                    // LED state: (LED|ambiente)|(an|ein|aus|ab)
                    // LED lightness: (LED|ambiente)|(heller|dunkler)
                    // wohnzimmer
                    //     Ambient/LED
                    //     Licht
                    //     Sound
                    //     Lautstärke
                    //     Kanal
                    //     Musik
                    //     Rollläden
                    //     Heizung
                    //     Fenster
                    // küche
                    //     Licht
                    //     Sound
                    //     Lautstärke
                    //     Musik
                    //     Heizung
                    //     Fenster
                    // schlafzimmer
                    //     Ambient/LED
                    //     Licht
                    //     Sound
                    //     Lautstärke
                    //     Kanal
                    //     Musik
                    //     Rollläden
                    //     Heizung
                    //     Fenster
                    // arbeitszimmer
                    //     Arbeitslicht
                    //     Licht
                    //     Rollläden
                    //     Sound
                    //     Lautstärke
                    //     Musik
                    //     Heizung
                    //     Fenster
                    // bad
                    //     Licht
                    //     Sound
                    //     Lautstärke
                    //     Musik
                    //     Heizung
                    //     Fenster
                    //     Lüfter
                    // flur
                    //     Licht
                    //     LED/Ambient
                    //     Tür
                    //     Türschloss
                    //
                    // 'wechsle in Zimmer :room'
                    //     'licht :state'
                    //     'LED :state'
                    //     'LED :state'
                    beispiel: {
                        regexp: /beispiel/,
                        callback: match=>{},
                        reaction: '',
                        options: {}}
                }
            }
        }
    }
}
