import type { Meta, StoryObj } from '@storybook/angular';
import { FormFieldErrorControlComponent } from './form-field-error-control.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FormFieldErrorControlComponent> = {
  component: FormFieldErrorControlComponent,
  title: 'FormFieldErrorControlComponent',
};
export default meta;
type Story = StoryObj<FormFieldErrorControlComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/form-field-error-control works!/gi)).toBeTruthy();
  },
};
