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

export type AppState = {
    task:{
        currentTask: number,
    },
    game:{
        score: number,
        answer: boolean,
        status: boolean
    },
    fieldApi: any,
    picsApi: any,
    pic: any
    
    
}
