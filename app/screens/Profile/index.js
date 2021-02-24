import React from 'react';
import {View, Button, Text} from 'react-native';
import Header from '../../components/header';

function Profile(props) {
  return (
    <View style={{flex: 1}}>
      <View>
        <Header
          title="My Profile"
          showNotification={true}
          showCart={true}
          back={false}
          {...props}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Work on Progress</Text>
      </View>
    </View>
  );
}

export default Profile;
