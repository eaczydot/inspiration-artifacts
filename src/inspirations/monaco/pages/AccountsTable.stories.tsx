import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AccountsTable } from './AccountsTable';
import './accounts-table.css';
const meta={title:'Inspiration/Monaco/Pages/Accounts Table',component:AccountsTable,parameters:{layout:'fullscreen'},tags:['autodocs']} satisfies Meta<typeof AccountsTable>;
export default meta; type Story=StoryObj<typeof meta>; export const Default:Story={};
