// @flow

import React, { Component } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Input as ExistingTextInput } from 'react-native-elements'; // eslint-disable-line import/no-extraneous-dependencies

export default class TextInput extends Component {
  onBlur = event => this.props.input.onBlur(event.nativeEvent.text);

  render = () => {
    const { input: { onChange, onFocus, value, initial, name }, meta, ...rest } = this.props;
    const displayError = meta.touched ? (meta.error ? true : false) : false;

    return (
      <ExistingTextInput
        name={name}
        onBlur={this.onBlur}
        onChangeText={onChange}
        onFocus={onFocus}
        value={value}
        defaultValue={initial}
        displayError={displayError}
        errorMessage={meta.error}
        {...rest}
      />
    );
  };
}
