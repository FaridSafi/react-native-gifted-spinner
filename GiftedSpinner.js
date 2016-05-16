'use strict'


import React, { Component } from 'react';
import {
  View,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform,
} from 'react-native';

export default class GiftedSpinner extends Component {

  _getSpinner() {
    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid
          style={{
            height: 20,
          }}
          styleAttr="Inverse"
          {...this.props}
        />
      );
    } else {
      return (
        <ActivityIndicatorIOS
          animating={true}
          size="small"
          {...this.props}
        />
      );
    }
  }

  render() {
    return (
      <View>
        {this._getSpinner()}
      </View>
    );
  }

};

