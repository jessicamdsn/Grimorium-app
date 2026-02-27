import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ThemeToggle from '../configurations/ThemeToggle';
import { ThemeProvider } from 'next-themes';

type ThemeToggleStoryArgs = React.ComponentProps<typeof ThemeToggle> & { tema?: 'light' | 'dark' };

const meta = {
  title: 'Shared/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['button', 'toggle'],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<ThemeToggleStoryArgs>;

export default meta;
type Story = StoryObj<ThemeToggleStoryArgs>;

export const toggle: Story = {
    args: {
        type:"toggle"
    }
};
export const button: Story = {
    args: {
        type:"button"
    }
};