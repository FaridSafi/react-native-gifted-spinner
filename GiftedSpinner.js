'use strict'

var React = require('react');

var {
  View,
  ActivityIndicator,
  Platform
} = require('react-native');

var GiftedSpinner = React.createClass({
  
  _getSpinner() {
    return (
      <ActivityIndicator 
        animating={true}
        size="small"
        style={{
          height: 20,
        }}
        styleAttr="Inverse"
        {...this.props}
      />
    );
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
