export const say = (text) => {
    var tts = window.speechSynthesis;
    var utter = new SpeechSynthesisUtterance(text);
    tts.speak(utter);
}

