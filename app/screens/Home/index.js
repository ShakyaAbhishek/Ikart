import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import ProductCard from '../ProductCard';
import Carousel from 'react-native-banner-carousel';
import {allData} from '../../assets/data';
import BannerImage from '../../assets/images/banner.png';
import {useSelector, useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

const images = [1, 2, 3];

function HomeScreen(props) {
  const [state, setState] = useState({
    categoriesIconList: allData.categories,
    allProductData: allData.allMemberProducts.products,
    allDealData: allData.allOfferDeals.products,
  });

  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.CartReducer.cartList);

  useEffect(() => {
    handleCartData();
  }, [cartList]);

  const handleCartData = () => {
    // check whether item is present in cart or not
    let updatedata = state.allProductData;
    let updatedatadeal = state.allDealData;
    let check1 = false;
    let check2 = false;

    if (cartList.length == 0) {
      for (let i = 0; i < updatedata.length; i++) {
        updatedata[i].inCart = false;
      }
      for (let j = 0; j < updatedatadeal.length; j++) {
        updatedatadeal[j].inCart = false;
      }
    } else {
      for (let i = 0; i < updatedata.length; i++) {
        check1 = false;
        for (let j = 0; j < cartList.length; j++) {
          if (updatedata[i].id == cartList[j].id) {
            updatedata[i].inCart = true;
            check1 = true;
          }
          if (check1 === false) {
            updatedata[i].inCart = false;
          }
        }
      }

      for (let i = 0; i < updatedatadeal.length; i++) {
        check2 = false;
        for (let j = 0; j < cartList.length; j++) {
          if (updatedatadeal[i].id == cartList[j].id) {
            updatedatadeal[i].inCart = true;
            check2 = true;
          }
        }
        if (check2 === false) {
          updatedatadeal[i].inCart = false;
        }
      }
    }

    setState({
      ...state,
      allProductData: updatedata,
      allDealData: updatedatadeal,
    });
  };

  const renderAllCategories = (item) => {
    // for rendering all categories
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.categoryIconContainer}>
          <Image source={item.icon} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
        <Text style={{paddingTop: hp('1%'), fontFamily: 'Roboto-Medium'}}>
          {item.categoryName}
        </Text>
      </View>
    );
  };

  const renderProducts = (item) => {
    // for showing product card method
    return (
      <ProductCard
        product={item}
        allMemberData={state.allProductData}
        allDealData={state.allDealData}
        {...props}
      />
    );
  };

  const renderPage = (image, index) => {
    // image slider
    return (
      <View key={index} style={{}}>
        <Image
          style={{width: '91.9%', height: 200}}
          source={BannerImage}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, marginBottom: hp('2%')}}>
      <View>
        <Header
          title="Hi, Rahul"
          showNotification={true}
          showCart={true}
          back={false}
          {...props}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.allCategoriesContainer}>
          <SubHeading subHeadingText={'All Categories'} />
          <FlatList
            data={state.categoriesIconList}
            renderItem={({item}) => renderAllCategories(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginVertical: hp('2%'), marginHorizontal: wp('0.5%')}}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: 5,

              paddingHorizontal: 10,
            }}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              activePageIndicatorStyle={{backgroundColor: '#00c97b'}}
              pageSize={wp('100%')}>
              {images.map((image, index) => renderPage(image, index))}
            </Carousel>
          </View>
        </View>
        <View>
          <SubHeading subHeadingText={'Grocery Member Deals'} />
          <FlatList
            data={state.allProductData}
            renderItem={({item}) => renderProducts(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View>
          <SubHeading subHeadingText={'Grocery Deals & Offers'} />
          <FlatList
            data={state.allDealData}
            renderItem={({item}) => renderProducts(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const SubHeading = (props) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.subHeadingText}>{props.subHeadingText}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.viewBtn}>
          <Text style={{color: 'red'}}>View All</Text>
          <Icon name="chevron-right" size={25} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
  },
  viewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeadingText: {
    fontFamily: 'Roboto-Medium',
  },
  allCategoriesContainer: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: hp('3%'),
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('4%'),
  },
});
