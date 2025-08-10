import type { Meta, StoryObj } from '@storybook/angular';
import { FormFieldComponent } from './form-field.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FormFieldComponent> = {
  component: FormFieldComponent,
  title: 'FormFieldComponent',
};
export default meta;
type Story = StoryObj<FormFieldComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/form-field works!/gi)).toBeTruthy();
  },
};
