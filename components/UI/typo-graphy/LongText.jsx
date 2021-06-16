import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LongText = ({ title, longDescription, children }) => {
  return (
    <View style={styles.descriptionContainer}>
      {title && <Text style={styles.descriptionTitle}>{title}</Text>}
      {longDescription && (
        <Text style={styles.longDescription}>{longDescription}</Text>
      )}

      <Text style={styles.longDescription}>{children}</Text>
    </View>
  );
};

export default LongText;

const styles = StyleSheet.create({
  descriptionContainer: {
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  longDescription: {
    lineHeight: 20,
    textAlign: 'left',
  },
});
