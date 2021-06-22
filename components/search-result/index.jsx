import React from 'react';
import { View, Text, Image } from 'react-native';
import BestSeller from '../UI/BestSeller';
import FullStarIcon from '../UI/icons/Full-star-icon';
import HalfStar from '../UI/icons/HalfStar';
import styles from './styles';

const SearchResult = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{props.title}</Text>
        <Text
          numberOfLines={1}
          style={{ width: '90%', fontSize: 13, color: '#3a3a3a' }}>
          {props.author}
        </Text>
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((el, i) =>
            i < Math.floor(props.ratingsAvg) ? <FullStarIcon /> : <HalfStar />
          )}
          <Text>
            {props.ratingsAvg} ({props.totalStudent})
          </Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>${props.price}</Text>
        {props.ratingsAvg > 4.5 ? <BestSeller /> : null}
      </View>
    </View>
  );
};

export default SearchResult;
