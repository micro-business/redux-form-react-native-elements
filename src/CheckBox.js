// @flow

import React, { Component } from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { CheckBox as ExistingCheckBox } from 'react-native-elements'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import Styles, { DefaultColors } from './Styles';

class CheckBox extends Component {
  onChange = () => this.props.input.onChange(!this.props.input.value);

  render = () => {
    const { input, checkedColor, ...rest } = this.props;

    return (
      <ExistingCheckBox
        {...rest}
        checked={!!input.value}
        onIconPress={this.onChange}
        containerStyle={Styles.checkbox}
        size={36}
        iconType="MaterialIcons"
        checkedIcon="check-box"
        uncheckedIcon="check-box-outline-blank"
        checkedColor={checkedColor}
      />
    );
  };
}

CheckBox.propTypes = {
  checkedColor: PropTypes.string,
};

CheckBox.defaultProps = {
  checkedColor: DefaultColors.defaultThemeColor,
};

export default CheckBox;
