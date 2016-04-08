'use strict'

var React = require('react-native');

var {
  View,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform
} = React;

var GiftedSpinner = React.createClass({
  _getSpinner() {
    //add android size support
    if(this.props.size === 'large'){
      this.androidPH = 36;
    }else{
      this.androidPH = 20;
    }
    //
    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid
          style={{
            height: this.androidPH,
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
