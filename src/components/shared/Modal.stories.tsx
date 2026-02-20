import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Modal from './Modal';
import { fn } from 'storybook/test';

type ModalStoryArgs = React.ComponentProps<typeof Modal> & { tema?: 'light' | 'dark' };

const meta = {
  title: 'Shared/Modal',
  component: Modal,
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
    title: { control: 'text' },
    description: { control: 'text' },
    tema: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    type: {
      control: 'inline-radio',
      options: ['alert', 'confirm'],
    },
  },
  args: { 
    onConfirm: fn(),
    onClose:fn()
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
} satisfies Meta<ModalStoryArgs>;

export default meta;
type Story = StoryObj<ModalStoryArgs>;

export const Alert: Story = {
  args: {
    isOpen: true,
    title:'Titulo do Modal de Alerta',
    description: 'Descrição do alerta',
    type: 'alert', 
    },
};

export const Confirm: Story = {
  args: {
    isOpen: true,
    title:'Titulo do Modal de confirmação',
    description: 'Descrição da pergunta',
    type: 'confirm', 
    },
};
