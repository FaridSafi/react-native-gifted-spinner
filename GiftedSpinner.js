import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

export default class GiftedSpinner extends Component {
  render() {
    return (
      <ActivityIndicator
        animating={true}
        size="small"
        {...this.props}
      />
    );
  }
}
