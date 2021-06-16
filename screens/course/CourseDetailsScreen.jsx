import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { connect, useSelector } from 'react-redux';

import CourseList from '../../components/Feacherd/CourseList';
import IconComponent from '../../components/UI/icons/IconComponent';

import { addToCart } from '../../redux/cart/cart.action';

const CourseDetailsScreen = ({ navigation, cartItems }) => {
  const { course } = useSelector((state) => ({ ...state }));

  const courseId = navigation.getParam('courseId');
  // const { course } = navigation.getParam('course');

  const data = course.filter((el) => el._id === courseId);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CourseList
            title={item.title}
            imageURL={item.image}
            ratings={item.ratings}
            totalRatings={item.totalRatings}
            author={item.author}
            price={item.price}
            description={item.description}
            totalStudent={item.totalStudent}
            longDescription={item.longDescription}
            language={item.language}
            AddToCart={() => cartItems(item)}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartItems: (item) => dispatch(addToCart(item)),
});

CourseDetailsScreen.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IconComponent}>
        <Item IconComponent={Entypo} iconName='share' color='#687980' />
        <Item
          IconComponent={Ionicons}
          iconName='cart-outline'
          color='#687980'
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default connect(null, mapDispatchToProps)(CourseDetailsScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
