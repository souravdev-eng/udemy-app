import React from 'react';
import { useFormikContext } from 'formik';

import AppInput from '../UI/AppInput';
import ErrorMessage from './ErrorMessage';

const AppFormInput = ({ name, ...othersProps }) => {
  const { setFieldTouched, touched, handleChange, errors } = useFormikContext();
  return (
    <>
      <AppInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...othersProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormInput;
