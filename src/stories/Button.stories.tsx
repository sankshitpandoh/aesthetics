import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/Button';

export default {
  label: 'Example/Button',
  component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // label: 'Button123',
  // onClick: (e: any) => console.log(e),
  style: {color: "white"},
  // variant: "gradGlow"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
