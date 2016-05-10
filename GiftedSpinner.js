'use strict'

var React = require('react');

var ReactNative = require('react-native');

var {
  View,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform
} = ReactNative;

var GiftedSpinner = React.createClass({

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
  },

  render() {
    return (
      <View>
        {this._getSpinner()}
      </View>
    );
  },

});


module.exports = GiftedSpinner;
