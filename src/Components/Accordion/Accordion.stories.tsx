import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import Accordion, {AccordionPropsType} from './Accordion';
import {callbackify} from "util";


export default {
    title: ' Accordion stories',
    component:  Accordion,
}
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args= {
    title: "Menu",
    collapsed: false,
    onChange:() => false
}


