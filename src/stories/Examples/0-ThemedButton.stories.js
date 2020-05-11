import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemedButton } from '../../ThemedButton';


export default {
  title: 'Examples/Themed Button',
  component: ThemedButton,
};

export const Text = () => <ThemedButton onClick={action('clicked')}>Hello ThemedButton</ThemedButton>;

export const Emoji = () => (
  <ThemedButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ThemedButton>
);
