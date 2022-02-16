import React from "react";
import {ClockViewPropsType} from "./Clock";


//Функция утилита добовляющая 0
export const getString = (number: number) => number < 10 ? '0' + number : number



export const DigitalClockView = (props:ClockViewPropsType) => {
    return  <div>
        <span>{getString(props.date.getHours())}</span>
        :
        <span>{getString(props.date.getMinutes())}</span>
        :
        <span>{getString(props.date.getSeconds())}</span>
    </div>
}