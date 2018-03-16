// @flow

import React, { Component } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { Input as ExistingTextInput } from 'react-native-elements'; // eslint-disable-line import/no-extraneous-dependencies

export default class TextInput extends Component {
  onBlur = event => this.props.input.onBlur(event.nativeEvent.text);

  render = () => {
    const { input, ...rest } = this.props;

    return <ExistingTextInput {...rest} onBlur={this.onBlur} onChangeText={input.onChange} onFocus={input.onFocus} value={input.value} />;
  };
}
