import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import s from './App.module.css'
import {on} from "cluster";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    return (
        <div className={s.App}>



           <Accordion
               title={"Menu"}
               collapsed={accordionCollapsed}
               onChange={() => setAccordionCollapsed(!accordionCollapsed)} />

            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;



