import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { getAllCourse } from '../../redux/course/course.action';

import Card from './Card';
import IconComponent from '../UI/icons/IconComponent';
import { colors } from '../../config/colors';

const CardList = (props) => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  return (
    <ScrollView>
      <View style={styles.cardDetails}>
        <Text style={styles.tag}>Web Develoment</Text>
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              imageURL={item.image}
              price={item.price}
              ratings={item.ratings}
              ratingQty={item.totalRatings}
              author={item.author}
              longDescription={item.longDescription}
              viewDetails={() => {
                props.navigation.navigate('CourseDetails', {
                  courseId: item._id,
                });
              }}
            />
          )}
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />

        <Text style={styles.tag}>Feacherd</Text>
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              imageURL={item.image}
              price={item.price}
              ratings={item.ratings}
              ratingQty={item.totalRatings}
              author={item.author}
              viewDetails={() => {
                props.navigation.navigate('CourseDetails', {
                  courseId: item._id,
                });
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.tag}>Feacherd</Text>
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              imageURL={item.image}
              price={item.price}
              ratings={item.ratings}
              ratingQty={item.totalRatings}
              author={item.author}
              viewDetails={() => {
                props.navigation.navigate('CourseDetails', {
                  courseId: item._id,
                });
              }}
            />
          )}
          keyExtractor={(item, index) => item._id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </ScrollView>
  );
};

export default CardList;

CardList.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IconComponent}>
        <Item
          IconComponent={Ionicons}
          iconName='cart-outline'
          color={colors.darkGrey}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  tag: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    marginVertical: 10,
    color: colors.black,
  },
  cardDetails: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
