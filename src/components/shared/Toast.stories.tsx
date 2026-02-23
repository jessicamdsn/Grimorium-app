import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Toast from './Toast';
import { fn } from 'storybook/test';

type ToastStoryArgs = React.ComponentProps<typeof Toast> & { tema?: 'light' | 'dark' };

const meta = {
  title: 'Shared/Toast',
  component: Toast,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 150,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' }, 
    type:  {
      control: 'inline-radio',
      options: ['success' , 'error'],
    },
    tema: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
  args:{
    onClose: fn()
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
} satisfies Meta<ToastStoryArgs>;

export default meta;
type Story = StoryObj<ToastStoryArgs>;

export const Error: Story = {
  args:{
    type: 'error',
    message:'ocorreu um erro'
  }
};

export const Sucess: Story = {
  args: {
    type: "success",
    message: "Realizado com sucesso"
  }
};