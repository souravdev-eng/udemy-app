import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import FullStarIcon from '../UI/icons/Full-star-icon';
import { colors } from '../../config/colors';

const Card = (props) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.viewDetails}>
        <View>
          <Image style={styles.cardImage} source={{ uri: props.imageURL }} />
          <Text style={styles.cardTitle}>{props.title}</Text>

          <Text style={styles.authorName}>{props.author}</Text>
          <View style={styles.starContainer}>
            <FullStarIcon />
            <FullStarIcon />
            <FullStarIcon />
            <FullStarIcon />
            <FontAwesome
              name='star-half-full'
              size={18}
              color={colors.yellow}
            />
            <Text style={styles.rating}>
              {props.ratings} ({props.ratingQty})
            </Text>
          </View>
          <Text style={styles.cardPrise}>${props.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: 250,
    height: 265,
    marginHorizontal: 8,
    overflow: 'hidden',
  },

  cardImage: {
    width: '100%',
    height: '55%',
    marginBottom: 10,
    borderRadius: 8,
  },
  starContainer: {
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 6,
  },
  rating: {
    color: colors.darkGrey,
  },
  authorName: {
    color: colors.darkGrey,
    fontSize: 12,
    marginBottom: 5,
  },
  cardPrise: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
