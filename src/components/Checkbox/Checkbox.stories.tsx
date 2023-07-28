// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';
import {ChangeEvent, useCallback, useState} from "react";

const meta: Meta<typeof Default> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;


export const Default: Story = {
  args: {
    disabled: false,
    readOnly: false,
    name: 'switch',
    label: 'Обязательное тестирование',
    value: 'value',
    checked: true,
    defaultChecked: true,
    autoFocus: true,
    onChange: (value) => console.log(value)
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.defaultChecked)

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked)
    }, [])

    return (
        <Checkbox {...args} checked={checked} onChange={onChange} />
    )
  }
};

