import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';

import DarkButton from '../UI/buttons/DarkButton';

const SubmitFormButton = ({ title, ...othersProps }) => {
  const { handleSubmit } = useFormikContext();

  return <DarkButton title={title} onPress={handleSubmit} {...othersProps} />;
};

export default SubmitFormButton;

const styles = StyleSheet.create({});
