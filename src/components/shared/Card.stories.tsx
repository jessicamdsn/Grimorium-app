import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Card from './Card';

type CardStoryArgs = React.ComponentProps<typeof Card> & { tema?: 'light' | 'dark' };

const meta = {
  title: 'Shared/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    titulo: { control: 'text' },
    tema: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    children: {control: 'text'}
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
} satisfies Meta<CardStoryArgs>;

export default meta;
type Story = StoryObj<CardStoryArgs>;

export const Default: Story = {
  args: {
    titulo: 'Titulo do Card',
    children: (
      <div className="space-y-2">
        <p>Este card agora tem um subtitulo</p>
        <ul className="list-disc list-inside text-xs">
          <li>Efeito Hover ativado</li>
          <li>Bordas suavizadas</li>
          <li>Detalhe em cor personalizada</li>
        </ul>
      </div>
    ),
  },
};
