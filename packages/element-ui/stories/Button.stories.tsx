import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

// This might be useful for testing???
const Template: Story = args => <Button {...args} />;

const Default: Story = () => <Button />;

const Primary: Story = () => <Button type="Primary" />;

const Secondary: Story = () => <Button type="Secondary" />;

export { Default, Primary, Secondary };
