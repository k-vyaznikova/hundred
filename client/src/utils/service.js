const playSound = (urlSound) => {
        var audio = new Audio(); 
        audio.src = urlSound; 
        audio.autoplay = true;
        //audio.volume = 0.1;
    }


const trueAnswer = () => {
    playSound('http://localhost:8080/sounds/answers/true.mp3')
} 

const badAnswer = () => {
    playSound('http://localhost:8080/sounds/answers/bad.mp3')
}


export {playSound, badAnswer, trueAnswer};    
