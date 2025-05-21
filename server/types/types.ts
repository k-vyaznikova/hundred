export enum CellStatus  {
    default = '', //  не нажата 
    yes = 'yes', // правильно
    no = 'no' //не правильно
}
export type Num = {
    n: number,
    sound: string,
    status: CellStatus
}

export type Pic = {
    picture: string
}

export type AppState = {
    task:{
        currentTask: number,
    },
    answer:{
        currentAnswer: number
    }
    
    
}


