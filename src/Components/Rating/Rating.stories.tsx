import React, { useState } from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import {Rating, RatingPropsType, RatingValueType} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
}
const EmptyRating: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyRating1 = EmptyRating.bind({})
EmptyRating1.args = {value:0, onClick:(x=>x)}
EmptyRating1.args = {value:1, onClick:(x=>x)}
EmptyRating1.args = {value:2, onClick:(x=>x)}
EmptyRating1.args = {value:3, onClick:(x=>x)}
EmptyRating1.args = {value:4, onClick:(x=>x)}


/*
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};
*/
