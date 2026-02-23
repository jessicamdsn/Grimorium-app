import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { AuthContext } from "@/src/contexts/AuthContexts";

type NavbarStoryArgs = React.ComponentProps<typeof Navbar> & { 
  user: any; 
  tema?: 'light' | 'dark'; 
};

const meta = {
  title: 'Shared/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false, 
        iframeHeight: 100,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    user: { control: 'object' },
     tema: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
  decorators: [
    (Story, context) => {
      const args = context.args as NavbarStoryArgs;
      const temaClass = context.args.tema === 'dark' ? 'dark' : 'light';
      return (
        <div className={temaClass}>
            <AuthContext.Provider value={{ 
            user: args.user, 
            logout: () => {},
            login: async () => {},
            signup: async () => {},
            isAuthenticated: !!args.user
            }}>
                <Story />
            </AuthContext.Provider>
        </div>
      );
    },
  ],
} satisfies Meta<NavbarStoryArgs>;

export default meta;
type Story = StoryObj<NavbarStoryArgs>;

export const Logado: Story = {
  args: {
    user: {
      name: 'User Grimorium',
      email: 'user@grimorium.com',
      aplication: 'Grimorium-app'
    }
  },
};

export const Deslogado: Story = {
  args: {
    user: null
  },
};