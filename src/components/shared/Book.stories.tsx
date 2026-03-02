import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Book from './Book';

type BookStoryArgs = React.ComponentProps<typeof Book> & { tema?: 'light' | 'dark' };

const meta = {
  title: 'Shared/Book',
  component: Book,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    BookName: { control: 'text' },
    tema: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    Author: {control: 'text'},
    imageUrl: {control: 'text'}
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
} satisfies Meta<BookStoryArgs>;

export default meta;
type Story = StoryObj<BookStoryArgs>;

export const withData: Story = {
  args: {
    BookName: 'O Principe Cruel',
    imageUrl: 'https://m.media-amazon.com/images/I/81FH6q0EqYS._AC_UF1000,1000_QL80_.jpg',
    Author: 'Holly Black',
  },
};
export const Empt: Story = {
  args: {
    BookName: '',
    imageUrl: '',
    Author: '',
  },
};

