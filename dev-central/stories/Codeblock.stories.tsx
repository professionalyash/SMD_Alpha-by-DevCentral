import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Codeblock from '../components/Codeblock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Codeblock',
  component: Codeblock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Codeblock>;

const Template: ComponentStory<typeof Codeblock> = (args) => <Codeblock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: "true",
    label: "this is cool",
    children: "#include<iostream> using namespace std;",
}
