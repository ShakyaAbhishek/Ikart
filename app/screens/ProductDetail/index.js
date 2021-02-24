import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Header from '../../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/AntDesign';
import PlusIcon from '../../assets/images/plus.png';
import MinusIcon from '../../assets/images/minus.png';
import {useSelector, useDispatch} from 'react-redux';
import * as cartActions from '../../redux/action/cartAction';
import {showMessage, hideMessage} from 'react-native-flash-message';

function ProductDetail(props) {
  const [state, setState] = useState({
    productData: {},
    shownMore: false,
    btnText: 'Add to Cart',
  });

  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.CartReducer.cartList);

  useEffect(() => {
    if (props.route && props.route.params) {
      setState({...state, productData: props.route.params.data});
    }
  }, []);

  const addToCart = () => {
    // method to add item in cart
    if (state.productData.inCart === false) {
      dispatch(cartActions.addInCart(state.productData));
      props.navigation.navigate('MyCart');
      showMessage({
        type: 'success',
        message: 'Item is added into cart',
      });
    } else {
      props.navigation.navigate('MyCart');
    }
  };

  const toggleNumberOfLines = () => {
    // method for read more read less function
    setState({...state, shownMore: !state.shownMore});
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Header
          title="Product Details"
          showNotification={false}
          showCart={false}
          back={true}
          {...props}
        />
      </View>
      <View style={{flex: 1}}>
        {Object.keys(state.productData).length ? (
          <ScrollView>
            <View style={styles.bannerContainer}>
              <Image
                source={state.productData.iconBig}
                style={styles.bannerImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.commonViewPadding}>
              <View style={styles.commonVerticalPadding}>
                <Text style={styles.productNameText}>
                  {state.productData.name}
                </Text>
              </View>
              <View>
                <Text
                  style={styles.productDscptnText}
                  numberOfLines={state.shownMore ? undefined : 4}>
                  {state.productData.discription}
                </Text>
                <Text
                  onPress={() => toggleNumberOfLines()}
                  style={{color: 'tomato'}}>
                  {state.shownMore ? 'Read less...' : 'Read more...'}
                </Text>
              </View>
              <View style={styles.ratingMainContainer}>
                <View style={styles.ratingInnerContainer}>
                  <Text style={styles.ratingText}>3 Ratings</Text>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={3}
                    starSize={20}
                    fullStarColor="orange"
                  />
                </View>
                <View style={styles.priceInfoContainer}>
                  <Text style={{color: 'gray', fontFamily: 'Roboto-Regular'}}>
                    RS. 30 for 100G
                  </Text>
                </View>
              </View>
              <View style={styles.priceQtyContainer}>
                <View style={{width: '50%'}}>
                  <Text style={styles.currentPriceText}>
                    {'Rs.' + state.productData.price}
                  </Text>
                  <View style={styles.priceOfferContainer}>
                    <Text style={styles.regularPriceText}>Rs. 110.00</Text>
                    <Text style={styles.offerText}>20% OFF</Text>
                  </View>
                </View>
                <View style={styles.qtyContainer}>
                  <Image source={MinusIcon} style={styles.qtyImage} />
                  <Text style={styles.qtyText}>{state.productData.nqty}</Text>
                  <Image source={PlusIcon} style={styles.qtyImage} />
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.btnStyle} onPress={addToCart}>
                  <Text style={styles.btnTextStyle}>
                    {state.productData.inCart ? 'Go to Cart' : 'Add to Cart'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
}

export default ProductDetail;

const styles = StyleSheet.create({
  bannerContainer: {
    width: wp('100%'),
    height: hp('30%'),
    backgroundColor: 'white',
  },
  bannerImage: {
    width: wp('100%'),
    height: '100%',
  },
  commonViewPadding: {
    padding: hp('2%'),
  },
  commonVerticalPadding: {
    paddingVertical: hp('2%'),
  },
  productNameText: {
    fontSize: hp('2.4%'),
    fontFamily: 'Roboto-Bold',
  },
  productDscptnText: {
    color: 'gray',
    lineHeight: hp('2.6%'),
    fontFamily: 'Roboto-Regular',
  },
  ratingMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('2%'),
  },
  ratingInnerContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingText: {
    paddingTop: '2%',
    fontFamily: 'Roboto-Bold',
  },
  priceInfoContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
  priceQtyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentPriceText: {
    color: 'tomato',
    fontFamily: 'Roboto-Black',
    fontSize: hp('2.5%'),
  },
  priceOfferContainer: {
    flexDirection: 'row',
    paddingVertical: hp('1%'),
  },
  regularPriceText: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontFamily: 'Roboto-medium',
  },
  offerText: {
    color: '#00c97b',
    fontFamily: 'Roboto-Bold',
    paddingLeft: wp('2%'),
  },
  qtyContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  qtyImage: {
    width: 35,
    height: 35,
  },
  qtyText: {
    paddingHorizontal: wp('3%'),
    fontFamily: 'Roboto-Bold',
  },
  btnStyle: {
    alignItems: 'center',
    paddingVertical: hp('2%'),
    borderRadius: 30,
    marginVertical: hp('4%'),
    backgroundColor: '#00c97b',
  },
  btnTextStyle: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: hp('2.3%'),
  },
});
