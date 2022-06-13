import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {text} from '@storybook/addon-knobs'


import Button, { ButtonTypes} from './';

export default {
  label: 'Example/Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const btnText = text("Text", "Click Me");

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <div style={{marginBottom: "15px"}}>
      {ButtonTypes.map((type) => (
        <Button label={`${type} button`} variant={type} style={{marginRight: "20px"}}   />
      ))}
    </div>
    <div>
        <Button {...args}   />
        <span style={{color: "#f0f0f0" , marginLeft: "15px"}}> {"<----- Tweak controls to see change in realtime"}</span>
    </div>
  </>
)

export const AllButtons = Template.bind({});
AllButtons.args = {
  style: {color: "white"},
  label: btnText,
  onClick:() => alert("Button Clicked")
};


