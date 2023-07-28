
// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Drawer from "./Drawer";
import Input from "../Input/Input";
import Group from "../Group/Group";
import Label from "../Label/Label";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import Error from "../Error/Error";

const meta: Meta<typeof Drawer> = {
    component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
    args: {
        isOpened: true,
        title: 'Профиль ученика'
    },
    render: (args) => (
        <Drawer {...args}>
            {({  }) => (
                <>
                    <Group>
                        <Label text="Название группы" />
                        <Input placeholder="Введите название группы" error={true} />
                        <Error text="Введите верное значение" />
                    </Group>
                    <Group>
                        <Label text="Размер группы" />
                        <Input placeholder="Введите размер группы" />
                    </Group>

                    <Group>
                        <Label text="Курс группы" />
                        <Select
                            placeholder="Выберите курс группы"
                            options={[
                                { label: "Python", value: "id-1" },
                                { label: "React", value: "id-2" }
                            ]}
                            onChange={(value) => console.log(value)}
                        />
                    </Group>

                    <Group>
                        <Label text="Формат обучения группы" />
                        <Select
                            placeholder="Выберите формат обучения"
                            options={[
                                { label: "Offline", value: "offline" },
                                { label: "Online", value: "online" }
                            ]}
                            onChange={(value) => console.log(value)}
                        />
                    </Group>

                    <Group>
                        <Label text="Расписание группы" />
                        <Textarea placeholder="Напишите комментарий" />
                    </Group>

                    <Group>
                        <Label text="Комментарии группы" />
                        <Textarea placeholder="Опишите рассписание" />
                    </Group>

                    <Group>
                        <Label text="Учитель" />
                        <Input placeholder="Укажите ФИО учителя" />
                    </Group>

                    <Group>
                        <Label text="Цвет группы" />
                        <Select
                            placeholder="Выберите цвет группы"
                            options={[
                                { label: "Offline", value: "offline" },
                                { label: "Online", value: "online" }
                            ]}
                            onChange={(value) => console.log(value)}
                        />
                    </Group>
                </>
            )}
        </Drawer>
    )
};
