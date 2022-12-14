import { useState } from 'react';
import { useValidation } from './useValidtion';

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (evt) => {
    setValue(evt.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid,
  };
};
