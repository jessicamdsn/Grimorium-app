import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Popover from './popover';

type PopoverStoryArgs = React.ComponentProps<typeof Popover> & { tema?: 'light' | 'dark' };

const meta = {
  title: 'Shared/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
   docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    children: { control: 'text' },
    tema: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    align: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
  },
  decorators: [
    (Story, context) => {
      const temaClass = context.args.tema === 'dark' ? 'dark' : 'light';
      return (
        <div className={temaClass}>
           <div className="min-h-62.5 min-w-75 flex items-start justify-center pt-10 px-20 bg-background">
              <Story />
           </div>
        </div>
      );
    },
  ],
} satisfies Meta<PopoverStoryArgs>;

export default meta;
type Story = StoryObj<PopoverStoryArgs>;

export const Right: Story = {
  args: {
    label: 'Clique em mim' ,
    align: "left",
    children: (
      <div className="flex flex-col gap-2">
            <p className="font-bold text-foreground border-b border-zinc-700 pb-1 mb-1">
                Popover
            </p>
            <p>você pode colocar texto</p>
            <button
            className="mt-2 text-left bg-bginside text-grimorium hover:text-grimorium/50 font-bold">
                e botões
            </button>
        </div>
    ),
    },
};

export const Left: Story = {
  args: {
    label: "Clique em mim",
    children: (
      <div className="flex flex-col gap-2">
            <p className="font-bold text-foreground border-b border-zinc-700 pb-1 mb-1">
                Popover
            </p>
            <p>você pode colocar texto</p>
            <button
            className="mt-2 text-left bg-bginside text-grimorium hover:text-grimorium/50 font-bold">
                e botões
            </button>
        </div>
    ),
    align: "left",
  }
};

