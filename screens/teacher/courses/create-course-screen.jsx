import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

import AppForm from '../../../components/form/AppForm';
import AppTextBold from '../../../components/UI/typo-graphy/AppTextBold';
import { colors } from '../../../config/colors';
import AppFormInput from '.././../../components/form/AppFormInput';
import SubmitFormButton from '../../../components/form/SubmitFormButton';

const CreateCourseScreen = () => {
  const [image, setImage] = useState(null);
  const defaultValue = {
    title: '',
    description: '',
    longDescription: '',
    image: '',
    price: '',
    author: '',
    category: '',
    subCategory: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().label('Title'),
    description: Yup.string().required().min(10).max(200).label('Description'),
    longDescription: Yup.string().required().min(10).label('Long Description'),
    image: Yup.string().required().label('Image'),
    price: Yup.string().required().min(3).max(5).label('Price'),
    category: Yup.string().required().label('Category'),
    subCategory: Yup.string().required().label('SubCategory'),
  });

  const getPermissions = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      return alert('Sorry, we need camera roll permissions to make this work!');
  };

  const handelImageUpload = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      setImage(result.uri);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <View style={styles.root}>
      <AppTextBold>Create a new Course</AppTextBold>
      <Image source={{ uri: image }} style={{ width: '100%', height: 300 }} />
      <Button title='Uplod image' onPress={handelImageUpload} />
      <AppForm
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={(value) => console.log(value)}>
        <AppFormInput
          autoCorret={false}
          autoCapitalize='none'
          placeholder='Title'
          name='title'
          placeholderTextColor={colors.darkGrey}
        />
        <AppFormInput
          autoCorret={false}
          autoCapitalize='none'
          placeholder='Description'
          name='description'
          placeholderTextColor={colors.darkGrey}
        />
        <AppFormInput
          autoCorret={false}
          autoCapitalize='none'
          placeholder='Long description'
          name='longDescription'
          placeholderTextColor={colors.darkGrey}
        />
        <AppFormInput
          style={{
            width: 80,
          }}
          autoCorret={false}
          autoCapitalize='none'
          placeholder='Price'
          name='price'
          keyboardType='number-pad'
          placeholderTextColor={colors.darkGrey}
        />
        <AppFormInput
          style={{
            width: 180,
          }}
          autoCorret={false}
          autoCapitalize='none'
          placeholder='Category'
          name='category'
          placeholderTextColor={colors.darkGrey}
        />
        <AppFormInput
          style={{
            width: 180,
          }}
          autoCorret={false}
          autoCapitalize='none'
          placeholder='Sub Category'
          name='subCategory'
          placeholderTextColor={colors.darkGrey}
        />
        <SubmitFormButton title='Create' />
      </AppForm>
    </View>
  );
};

export default CreateCourseScreen;

const styles = StyleSheet.create({
  root: {
    marginTop: 50,
    marginHorizontal: 15,
    flex: 1,
  },
});
