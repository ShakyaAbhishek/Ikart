import React from 'react';
import {Appbar} from 'react-native-paper';
import {Platform, View, StatusBar, Alert, Text} from 'react-native';
import {Text as PaperText, Badge} from 'react-native-paper';
import {connect} from 'react-redux';

class Header extends React.Component {
  // common header component
  render() {
    return (
      <View>
        <StatusBar backgroundColor={'#00c97b'} barStyle="light-content" />
        <Appbar.Header style={{backgroundColor: '#00c97b'}}>
          {this.props.back !== false ? (
            <Appbar.BackAction
              onPress={() => {
                this.props.navigation.goBack();
              }}
              color="white"
            />
          ) : null}
          <Appbar.Content title={this.props.title} color="white" />
          {this.props.showCart ? (
            <View style={{flexDirection: 'row'}}>
              <Appbar.Action
                icon={'cart-outline'}
                onPress={() => this.props.navigation.navigate('MyCart')}
                color="white"
              />
              <View style={{position: 'absolute', right: 0, top: 5}}>
                <Badge style={{backgroundColor: 'white'}}>
                  {this.props.cartList.length}
                </Badge>
              </View>
            </View>
          ) : null}
          {this.props.showNotification ? (
            <Appbar.Action
              icon={'bell-outline'}
              onPress={() => this.props.navigation.navigate('Notifications')}
              color="white"
            />
          ) : null}
        </Appbar.Header>
      </View>
    );
  }
}
export default connect(
  (state) => ({
    cartList: state.CartReducer.cartList,
  }),
  null,
)(Header);
