import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import LightButton from '../UI/buttons/LightButton';
import DarkButton from '../UI/buttons/DarkButton';
import FullStarIcon from '../UI/icons/Full-star-icon';
import LongText from '../UI/typo-graphy/LongText';
import AppText from '../UI/typo-graphy/AppText';
import TeacherOverView from '../teacher/TeacherOverView';
import HalfStar from '../UI/icons/HalfStar';

const CourseList = (item) => {
  const {
    imageURL,
    title,
    description,
    ratings,
    totalRatings,
    totalStudent,
    author,
    price,
    longDescription,
    AddToCart,
  } = item;

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{ uri: imageURL }} />
        <AppText style={styles.cardTitle}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
        <View style={styles.bestSellerContainer}>
          <Text>Best Seller</Text>
        </View>
        <View style={styles.authorContainer}>
          <View style={styles.starContainer}>
            <AppText style={styles.rating}>{ratings}</AppText>
            <View style={styles.ratingContainer}>
              {[0, 0, 0, 0, 0].map((el, i) =>
                i < Math.floor(ratings) ? <FullStarIcon /> : <HalfStar />
              )}
            </View>
          </View>

          <AppText>
            {`(${totalRatings} ratings) ${totalStudent} students`}
          </AppText>

          <AppText>
            Created by <AppText style={styles.author}>@{author}</AppText>
          </AppText>
        </View>
        <View style={styles.priceAndButtonContainer}>
          <AppText style={styles.price}>${price.toFixed(2)}</AppText>
          <View style={styles.durkButton}>
            <DarkButton title='Buy now' onPress={() => console.log('Presed')} />
          </View>

          <View style={styles.buttonGroup}>
            <LightButton title='Add To Cart' onPress={AddToCart} />
            <LightButton
              title='Add To Wishlist'
              onPress={() => console.log('Buy now Pressed')}
            />
          </View>
        </View>
        <View style={styles.logTextContainer}>
          <LongText title='Description' longDescription={longDescription} />
        </View>
        <TeacherOverView author={author} />
      </View>
    </ScrollView>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  author: {
    color: '#0a81ab',
  },
  logTextContainer: {
    width: '98%',
  },
  bestSellerContainer: {
    backgroundColor: '#ffc93c',
    width: 80,
    height: '2.5%',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },

  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardContainer: {
    width: 350,
    marginHorizontal: 13,
    overflow: 'hidden',
    marginTop: 25,
    justifyContent: 'center',
  },
  cardPrise: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    width: '95%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '300',
    color: '#2e2d2d',
  },
  durkButton: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: -10,
  },
  price: {
    fontSize: 26,
    position: 'relative',
    left: -120,
    marginBottom: 20,
    marginVertical: 10,
    fontWeight: '700',
  },
  priceAndButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  rating: {
    color: '#000',
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});
