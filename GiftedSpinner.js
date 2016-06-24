'use strict'

var React = require('react');

var {
  View,
  ActivityIndicator,
  ProgressBarAndroid,
  Platform
} = require('react-native');

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
        <ActivityIndicator
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
