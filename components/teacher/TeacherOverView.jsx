import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LightButton from '../UI/buttons/LightButton';
import AppText from '../UI/typo-graphy/AppText';
import AppTextBold from '../UI/typo-graphy/AppTextBold';
import LongText from '../UI/typo-graphy/LongText';

const TeacherOverView = (props) => {
  return (
    <View style={styles.container}>
      <AppTextBold style={styles.title}>Instractor</AppTextBold>
      <AppTextBold style={styles.name}>{props.author}</AppTextBold>
      <AppText>Docker Captain and DevOps Sysadmin</AppText>
      <View style={styles.authorContainer}>
        <Image
          source={{
            uri: 'https://img-b.udemycdn.com/user/75x75/231052_dba0_6.jpg?secure=qMnaAJiJssxy0OGbh5t0ug%3D%3D%2C1623030354',
          }}
          style={styles.authorImg}
        />
        <View style={styles.authorDetails}>
          <AppText>4.6 instractor ratings</AppText>
          <AppText>52,671 reviews</AppText>
          <AppText>1556,751 students</AppText>
        </View>
      </View>
      <LongText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        explicabo quae illo doloremque reiciendis praesentium blanditiis, ad
        numquam quo perspiciatis, optio sit dicta. Veniam, dolores? Qui,
        mollitia? Voluptas, facere iste?
      </LongText>
      <View style={styles.buttonContainer}>
        <LightButton
          title='View profile'
          style={styles.buttonText}></LightButton>
      </View>
    </View>
  );
};

export default TeacherOverView;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: '600',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
  },
  authorImg: {
    width: 75,
    height: 75,
    borderRadius: 60,
    alignItems: 'center',
    marginVertical: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  authorDetails: {
    marginTop: 10,
    marginHorizontal: 15,
  },
});
