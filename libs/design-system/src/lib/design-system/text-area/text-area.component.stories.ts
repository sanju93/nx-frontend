import type { Meta, StoryObj } from '@storybook/angular';
import { MatTextAreaComponent } from './text-area.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MatTextAreaComponent> = {
  component: MatTextAreaComponent,
  title: 'MatTextAreaComponent',
};
export default meta;
type Story = StoryObj<MatTextAreaComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-area works!/gi)).toBeTruthy();
  },
};
