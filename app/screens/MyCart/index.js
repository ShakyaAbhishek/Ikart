import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageEditor,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/header';
import DeleteImage from '../../assets/images/delete.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import * as cartActions from '../../redux/action/cartAction';
import PlusIcon from '../../assets/images/plus.png';
import MinusIcon from '../../assets/images/minus.png';
import DownIcon from '../../assets/images/downarrow.png';
import UpIcon from '../../assets/images/uparrow.png';
import {showMessage, hideMessage} from 'react-native-flash-message';

function MyCart(props) {
  const [state, setState] = useState({
    cartViewOpen: false,
    cartListData: [],
  });

  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.CartReducer.cartList);

  useEffect(() => {
    let total = 0;
    cartList.map((item) => {
      total = Number(total) + Number(item.price) * Number(item.nqty);
    });

    setState({...state, cartListData: cartList, totalprice: total});
  }, [cartList]);

  const deleteCartItem = (item) => {
    //method to delete cart item
    dispatch(cartActions.deleteCart(item));
    showMessage({
      type: 'success',
      message: 'Item is deleted successfuly',
    });
  };

  const addtocart = (item) => {
    //method to increase cart item quntity
    dispatch(cartActions.updatecartincrease(item));
  };
  const decreaseincart = (item) => {
    //method to decrease cart item quntity
    if (item.nqty == 1) {
      dispatch(cartActions.deleteCart(item));
    } else {
      dispatch(cartActions.updatecartdecrease(item));
    }
  };

  const renderProducts = (item) => {
    // render cart list
    return (
      <View style={styles.containerFlatlist}>
        <View style={styles.subcontainerFlatlist}>
          <View style={styles.imageview}>
            <Image
              source={item.iconSmall}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={{}}>
            <Text style={styles.itemtext}>{item.name}</Text>
            <Text
              style={{
                color: 'grey',
                paddingVertical: hp('1%'),
                fontFamily: 'Roboto-Regular',
              }}>
              Rs. 30 for 100 grams
            </Text>
            <View style={styles.priceview}>
              <Text style={[styles.itemtext, {color: 'red'}]}>
                {'Rs. ' + item.price}
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{alignItems: 'flex-end'}}
              onPress={() => deleteCartItem(item)}>
              <Image
                style={{width: '100%', height: 30, marginLeft: wp('3%')}}
                source={DeleteImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.quantitycontainer}>
              <TouchableOpacity onPress={() => decreaseincart(item)}>
                <Image source={MinusIcon} style={{width: 34, height: 34}} />
              </TouchableOpacity>
              <Text style={[styles.itemtext, {paddingHorizontal: wp('3%')}]}>
                {item.nqty}
              </Text>
              <TouchableOpacity onPress={() => addtocart(item)}>
                <Image source={PlusIcon} style={{width: 34, height: 34}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Header back={true} title="My Cart" {...props} />
      </View>

      <View style={styles.itemsView}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.itemsubtext}>
            {state.cartListData.length + ' Items in your cart'}
          </Text>
        </View>

        <Text
          style={[styles.itemtext, {color: '#00c97b'}]}
          onPress={() => props.navigation.navigate('Home')}>
          + Add items
        </Text>
      </View>
      {state.cartListData.length ? (
        <View style={styles.productsView}>
          <FlatList
            data={state.cartListData}
            renderItem={({item}) => renderProducts(item)}
          />
        </View>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Roboto-Regular'}}>
            No Items in the Cart
          </Text>
        </View>
      )}
      <View
        style={[
          {
            height: state.cartViewOpen
              ? Dimensions.get('window').height / 2.1
              : Dimensions.get('window').height / 4.5,
          },
          styles.bottomView,
        ]}>
        <TouchableOpacity
          onPress={() =>
            setState({...state, cartViewOpen: !state.cartViewOpen})
          }>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() =>
                setState({...state, cartViewOpen: !state.cartViewOpen})
              }>
              <Image
                style={{width: 30, height: 30}}
                source={state.cartViewOpen ? DownIcon : UpIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {state.cartViewOpen ? (
            <View>
              <Text style={styles.headertextbill}>Order Summary</Text>

              <View style={styles.billview}>
                <Text style={styles.itemtextbill}>Sub Total</Text>
                <Text style={styles.itemtext}>Rs{state.totalprice}</Text>
              </View>
              <View style={styles.billview}>
                <Text style={styles.itemtextbill}>Tax & Fees</Text>
                <Text style={styles.itemtext}>0.00</Text>
              </View>
              <View style={styles.billview}>
                <Text style={styles.itemtextbill}>Item Discount</Text>
                <Text style={styles.itemtextbilloffer}>-Rs0</Text>
              </View>
              <View style={styles.billview}>
                <Text style={styles.itemtextbill}>
                  Delivery Charges(Pick Up)
                </Text>
                <Text style={styles.itemtext}>Rs.0</Text>
              </View>

              <View>
                <View style={styles.offersview}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon1
                      name="ticket-percent-outline"
                      color="green"
                      size={25}
                      backgroundColor="#E7FFFC"
                    />
                    <Text
                      style={{
                        marginHorizontal: wp('3%'),
                        marginTop: hp('0.5%'),
                        fontFamily: 'Roboto-Regular',
                      }}>
                      Enter Promo Code
                    </Text>
                  </View>
                  <Text
                    style={[styles.itemtextbilloffer, {marginTop: hp('0.5%')}]}>
                    Apply
                  </Text>
                </View>
              </View>
            </View>
          ) : null}

          <View style={styles.totalpriceView}>
            <View>
              <Text style={styles.itemtextbill}>Total Price</Text>
              <Text style={styles.headertextbill}>Rs. {state.totalprice}</Text>
            </View>
            <TouchableOpacity style={styles.buttonView}>
              <Text style={[styles.itemtext, {color: 'white'}]}>CHECK OUT</Text>
              <Icon
                name="rightcircle"
                style={{paddingLeft: wp('2%')}}
                color="white"
                size={40}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFlatlist: {
    padding: hp('2%'),
    backgroundColor: 'white',
    marginHorizontal: hp('1%'),
    marginVertical: hp('1%'),
    borderRadius: 15,
  },
  subcontainerFlatlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: hp('2%'),
    marginHorizontal: wp('1%'),
    paddingHorizontal: wp('5%'),
  },
  itemtext: {
    fontFamily: 'Roboto-Medium',
  },
  itemtextbill: {
    fontFamily: 'Roboto-Regular',
    color: 'grey',
  },
  itemtextbilloffer: {
    fontFamily: 'Roboto-Medium',
    color: 'green',
  },
  itemsubtext: {
    fontFamily: 'Roboto-Bold',
    color: 'grey',
    marginLeft: wp('1%'),
  },
  imageview: {
    height: 100,
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  quantitycontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceview: {
    flexDirection: 'row',
    paddingTop: hp('3%'),
  },
  bottomView: {
    width: '95%',

    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp('5%'),
    alignSelf: 'center',

    position: 'absolute',
    bottom: 0,

    borderRadius: 19,

    padding: 6,
    elevation: 9,
    shadowOpacity: 0.1,
  },
  billview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('0.5%'),
  },
  offersview: {
    borderStyle: 'dotted',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderRadius: 9,
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    marginVertical: hp('1%'),
    backgroundColor: '#CAE5CB50',
    flexDirection: 'row',
  },
  headertextbill: {
    paddingVertical: hp('1%'),
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  buttonView: {
    borderRadius: 25,
    backgroundColor: '#00c97b',
    paddingHorizontal: wp('4%'),

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalpriceView: {
    marginVertical: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productsView: {
    height: Dimensions.get('window').height / 1.3,
    paddingBottom: Dimensions.get('window').height / 4,
  },
});
export default MyCart;
