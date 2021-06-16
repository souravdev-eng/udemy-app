import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import CartItemPreview from '../../components/cart/Cart-item-preview';
import AppTextBold from '../../components/UI/typo-graphy/AppTextBold';

const CartScren = ({ cartItems }) => {
  // console.log(cartItems);
  return (
    <View style={styles.container}>
      <AppTextBold style={styles.item}> 3 items</AppTextBold>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItemPreview
            title={item.title}
            price={item.price}
            author={item.author}
            imageURL={item.image}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps)(CartScren);

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // flex: 1,
    // alignItems: 'center',
  },
});
