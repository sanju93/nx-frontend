import type { Meta, StoryObj } from '@storybook/angular';
import { FormFieldErrorMessageComponent } from './form-field-error-message.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FormFieldErrorMessageComponent> = {
  component: FormFieldErrorMessageComponent,
  title: 'FormFieldErrorMessageComponent',
};
export default meta;
type Story = StoryObj<FormFieldErrorMessageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/form-field-error-message works!/gi)).toBeTruthy();
  },
};
