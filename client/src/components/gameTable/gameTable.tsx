
import React, {useState, useEffect} from 'react';
import * as styles from './gameTable.module.scss';
import { Num,  CellStatus} from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../types/types';
import {playSound, trueAnswer, badAnswer} from './../../utils/service'


interface GameTableProps {
    grid: Map<number, Num>,
    inString?: number,
    cellSize?: number,
    setTaskFunc: () =>  Function
}

const GameTable = (props: GameTableProps) => {

    /**redux */
    const dispatch = useDispatch();
    const [fieldState, setFieldState] = useState(props.grid);
    const currentTask = useSelector((state: AppState) => state.task.currentTask);
    const currentTaskSetter = props.setTaskFunc();

    
    const cells = [];
    fieldState.forEach((value, key, map) => {
        cells.push(
            <button key={key}
                className = {`${styles['game-table__cell']} ` + 
                    (value.status === CellStatus.yes ? `${styles['game-table__cell_green']} ` : '') + 
                    (value.status === CellStatus.no ? `${styles['game-table__cell_red']} ` : '')
                }
                onClick = {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {cellClickHandler(key)}}
            >
                {key}
            
            </button>
        )
    });  
    



    let cellClickHandler = (key) => {

        let tmpGrid = structuredClone(props.grid);


        let curValue = tmpGrid.get(key);
        key === currentTask ?
            setTrue(key, curValue, tmpGrid)
                : 
            setFalse(key, curValue, tmpGrid);
        setFieldState(tmpGrid);
    }


    let setTrue  = (key: number, curValue: Num, grid:  Map<number, Num>) => {
        grid.set(key, {...curValue, status: CellStatus.yes});
        const num = Math.floor(Math.random() * 100);
        currentTaskSetter(num);
        trueAnswer();
        dispatch({
            type: 'PIC', 
            payload: 'http://localhost:8080/images/true-answer/' +  (Math.floor(Math.random() * 5) + 1) + '.jpg'
            }
        );
        dispatch({
            type: 'INCREMENT', 
            payload: 10
            }
        );
        dispatch({type: 'TRUE_ANSWER'});
    };    
        


    let setFalse = (key: number, curValue: Num, grid:  Map<number, Num>) => {
        grid.set(key, {...curValue, status: CellStatus.no});
        currentTaskSetter(currentTask);
        badAnswer();
        dispatch({
            type: 'DECREMENT', 
            payload: 10
            }
        );
        dispatch({type: 'BAD_ANSWER'});
    }
    return (
        <div className = {styles['game-table']}>
            {currentTask === 0 ? 
                <div className={styles['game-table__disabled']}></div>
                :
                <div></div>
            }
            {cells}
        </div>
    );
}

export default GameTable;
