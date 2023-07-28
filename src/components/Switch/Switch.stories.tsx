// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';
import {ChangeEvent, useCallback, useState} from "react";

const meta: Meta<typeof Default> = {
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;


export const Default: Story = {
  args: {
    disabled: false,
    readOnly: false,
    name: 'switch',
    value: 'value',
    checked: true,
    defaultChecked: true,
    autoFocus: false,
    onChange: (value) => console.log(value)
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.defaultChecked)

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked)
    }, [])

    return (
        <Switch {...args} checked={checked} onChange={onChange} />
    )
  }
};

