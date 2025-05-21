import React, {useEffect, useState} from 'react';
import * as styles from './page.module.scss';
import GameTable from './../../components/gameTable';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from './../../types/types';
import NumsService from './../../services/nums.service'
import {useGetFieldQuery} from './../../reducers/field'
import {useGetPicsQuery} from '../../reducers/pics'
import Button from './../../components/button';
import repeat from './../../assets/imgs/buttons/repeat.svg';
import skip from './../../assets/imgs/buttons/skip.svg';


import {playSound} from './../../utils/service'
import FunPic from '../../components/funPic';

interface PageProps {}

const Page = (props: PageProps) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, error } = useGetFieldQuery(new Map());
    const currentTask = useSelector((state: AppState) => state.task.currentTask);
    const score = useSelector((state: AppState) => state.game.score);
    const { data: dataPic, isLoading: isLoadingPic, isError: isErrorPic, error: errorPic } = useGetPicsQuery([]);
    const [pic, setPic] = useState('');
    const answer = useSelector((state: AppState) => state.game.answer);
    const status = useSelector((state: AppState) => state.game.status);

    useEffect(()=>{
        if(dataPic && answer)
            setPic('http://localhost:8080' + dataPic[Math.floor(Math.random() * dataPic.length)].picture) 
        else if (!answer)
            setPic('')
    }, [currentTask, answer])



    const currentTaskSetter = (num: number | 0) => {
        if(!num)
            num = Math.floor(Math.random() * 100);
        dispatch({
            type: 'CURRENT_TASK', 
            payload: {
                next_task: num, 
                callback: () => playSound('http://localhost:8080' + data.get(num)?.sound)
            }
        })
    };

    const startGame = () => {
        dispatch({type: 'START_GAME'});
        dispatch({type: 'ZERO'});
        dispatch({type: 'BAD_ANSWER'});
        currentTaskSetter(0);
    }

    const stopGame = () => {
        dispatch({type: 'END_GAME'});
    }

    const skipTask = () =>{
        dispatch({
            type: 'DECREMENT', 
            payload: 30
            }
        );
        currentTaskSetter(0);
    }


    if (isLoading || isError) {
        return <div>Loading...</div>;
    }
  

    /**/
    return (
        status ? 
            <div className = {styles['game-field']}>
                <div className = {styles['left-side']}>
                    <div className={styles['game-field__greetings']}>
                    Привет, <span className={styles['game-field__greetings_pink-large']}>друг</span>, удачи с заданиями!
                    </div>
                    
                    <GameTable grid={data} setTaskFunc = {() => {return currentTaskSetter}}/>
                </div>

                <div className = {styles['game-info']}>
                    <div className = {styles['game-info__top']}>
                        <Button action = {() => startGame()} text = {'Cтарт'}/>
                        <Button action = {() => stopGame()} text = {'Стоп'} type = {'secondary'}/>     
                    </div>
                    
                    <div className={styles['game-info__center']}>
                        <div className = {score > 0 ? styles['game-info__score'] : styles['game-info__score_zero']}>{score}</div>
                        <FunPic picUrl = {pic}/>
                    </div>
                    <div className={styles['game-info__bottom']}>
                        <Button action = {() => currentTaskSetter(currentTask)} img = {repeat}/>
                        <Button action = {() => skipTask()} img = {skip} type = {'secondary'}/> 
                    </div>
                </div>
            </div>
            :
            <div className = {styles['game-field_end']}>
                <div>
                Твой счёт:
                <div className={styles['game-field__score']}>{score}</div>

                <Button action={ ()=>startGame()} type='cta' text='Попробовать еще раз'/>
                </div>

            </div>

            
       
    );
    
}

export default Page;
