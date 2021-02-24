import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import * as cartActions from '../../redux/action/cartAction';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage, hideMessage} from 'react-native-flash-message';

function ProductCard(props) {
  const [state, setState] = useState({inCart: false, cartListData: []});

  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.CartReducer.cartList);

  const addToCart = (item) => {
    // method to add item in cart
    const i = state.cartListData.findIndex((data) => data.id == item.id);
    if (i > -1) {
      alert('Item is already in cart');
    } else {
      dispatch(cartActions.addInCart(item));
      showMessage({
        message: 'Item is added into cart',
        type: 'success',
      });
    }
  };

  useEffect(() => {
    setState({...state, cartListData: cartList});
  }, [cartList]);

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        props.navigation.navigate('ProductDetail', {data: props.product})
      }>
      <View style={styles.cardTopContainer}>
        <View style={styles.weightContainer}>
          <Text style={{fontFamily: 'Roboto-Bold'}}>
            {props.product.quantity + ' g'}
          </Text>
        </View>
        <TouchableOpacity onPress={() => addToCart(props.product)}>
          <Icon
            name={props.product.inCart ? 'checkcircleo' : 'pluscircleo'}
            size={25}
            color={props.product.inCart ? '#00c97b' : 'gray'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardImageContainer}>
        <Image
          source={props.product.iconSmall}
          style={{width: '100%', height: '90%'}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cardNameContainer}>
        <Text
          style={[
            styles.cardName,
            {color: 'gray', fontFamily: 'Roboto-Medium'},
          ]}>
          {props.product.name}
        </Text>
      </View>
      <View style={styles.cardNameContainer}>
        <Text style={styles.cardName}>{'Rs. ' + props.product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: wp('40%'),
    height: 220,
    marginLeft: wp('3%'),
    backgroundColor: 'white',
    borderRadius: 9,
  },
  cardTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    height: 50,
    alignItems: 'center',
  },
  weightContainer: {
    padding: 4,
    backgroundColor: '#e2e2e2',
  },
  cardImageContainer: {
    width: '100%',
    height: 120,
  },
  cardNameContainer: {
    paddingHorizontal: wp('4%'),
    height: 20,
    justifyContent: 'center',
  },
  cardName: {
    fontFamily: 'Roboto-Medium',
  },
});
