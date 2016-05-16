# react-native-gifted-spinner

Simple loading spinner that use React-Native ProgressBarAndroid or ActivityIndicatorIOS depending of the platform.


![](https://raw.githubusercontent.com/FaridSafi/react-native-gifted-spinner/master/screenshot/screenshot.png)


### Example

```js
var React = require('react-native');
var {
  View,
} = React;

var GiftedSpinner = require('react-native-gifted-spinner');

var Example = React.createClass({
  render() {
    //GiftedSpinner's size can be 'small' and 'large' just like ActivityIndicatorIOS
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <GiftedSpinner
          size='large'
          color='#6435c9'
        />
      </View>
    );
  }
});
```

### Installation

```npm install react-native-gifted-spinner --save```

### License

[MIT](LICENSE.md)

Feel free to ask me questions on Twitter [@FaridSafi](https://www.twitter.com/FaridSafi) !
