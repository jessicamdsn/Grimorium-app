import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import sounds from '../configurations/sounds';
import { fn } from 'storybook/test';

type SoundsStoryArgs = React.ComponentProps<typeof sounds> & { tema?: 'light' | 'dark' };

const meta = {
  title: 'Shared/sounds',
  component: sounds,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    tema: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
  decorators: [
    (Story, context) => {
      const temaClass = context.args.tema === 'dark' ? 'dark' : 'light';
      return (
        <div className={temaClass}>
            <Story />
        </div>
      );
    },
  ],
} satisfies Meta<SoundsStoryArgs>;

export default meta;
type Story = StoryObj<SoundsStoryArgs>;

export const Default: Story = {
};