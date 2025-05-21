class Game {
    public score: number;
    public inProcess: boolean = false;
    constructor(){
        this.score = 0;
        this.inProcess = true;
    }
    increment(point: number = 10): number{
        this.score += point;
        return this.score > 0 ? this.score : 0;
    }

    decrement(point: number = 5): number{
        this.score -= point;
        return this.score > 0 ? this.score : 0;
    }

    finishGame(){
        this.inProcess = false;
    }
}

export default Game;
