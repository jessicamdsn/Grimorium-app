import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Sidebar from '../layout/Sidebar';

type SidebarStoryArgs = React.ComponentProps<typeof Sidebar> & { tema?: 'light' | 'dark' };

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
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
} satisfies Meta<SidebarStoryArgs>;

export default meta;
type Story = StoryObj<SidebarStoryArgs>;

export const Default: Story = {
};