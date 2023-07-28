
import type { Meta, StoryObj } from '@storybook/react';

import Menu from "./Menu";

const meta: Meta<typeof Menu> = {
    component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    render: (args) => (
        <Menu
            body={() => (
                <>
                    <Menu.Link icon="calendar" onClick={() => console.log('da')}>Группы</Menu.Link>
                    <Menu.Link icon="user" onClick={() => console.log('da')}>Ученики</Menu.Link>
                    <Menu.Link icon="smartphonePlus" onClick={() => console.log('da')}>Онлайн уроки</Menu.Link>
                    <Menu.Link icon="filter" onClick={() => console.log('da')}>Тестирование</Menu.Link>
                    <Menu.Link icon="editCircle" onClick={() => console.log('da')}>Задания</Menu.Link>
                    <Menu.Link icon="fileText" onClick={() => console.log('da')}>Файлы</Menu.Link>
                    <Menu.Link icon="bell" onClick={() => console.log('da')}>Уведомления</Menu.Link>
                    <Menu.Link icon="starRectangle" onClick={() => console.log('da')}>Дипломные проекты</Menu.Link>
                </>
            )}
            footer={() => (
                <>
                    <Menu.Link icon="setting" onClick={() => console.log('da')}>Настройки</Menu.Link>
                    <Menu.Link icon="arrowLeftCircle" onClick={() => console.log('da')}>Выйти</Menu.Link>
                </>
            )}
        />

    )
};
