import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import SearchResult from '../components/search-result';

const SearchScreen = () => {
  const { course } = useSelector((state) => ({ ...state }));
  const [searchText, setSearchText] = useState('');

  const newCoursedata = course.filter((data) =>
    data.title.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <FlatList
          data={newCoursedata}
          renderItem={({ item }) => (
            <SearchResult
              key={item._id}
              image={item.image}
              title={item.title}
              author={item.author}
              price={item.price}
              ratingsAvg={item.ratingsAvg}
              totalStudent={item.totalStudent}
            />
          )}
          keyExtractor={(item) => item._id}
          ListHeaderComponent={
            <View style={styles.container}>
              <View style={styles.textInput}>
                <FontAwesome name='search' size={20} style={styles.icon} />
                <TextInput
                  placeholder='Search your course'
                  textAlign='left'
                  returnKeyType={'search'}
                  style={{ fontSize: 16 }}
                  placeholderTextColor='grey'
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                />
              </View>
              <Ionicons
                name='cart-outline'
                size={28}
                color='black'
                onPress={() => console.log('Cart')}
              />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
    paddingHorizontal: 5,
    paddingRight: 15,
  },
  textInput: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: 'lightgrey',
    width: '80%',
    marginBottom: 10,
    height: 45,
    padding: 10,
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
});
