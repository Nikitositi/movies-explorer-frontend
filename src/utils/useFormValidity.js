import { useEffect } from 'react';

export const useFormValidity = (
  values,
  errors,
  setIsFormValid,
  currentUserData
) => {
  useEffect(() => {
    // проверяем на равенство значений двух объектов
    // текущий пользователь и значения в инпутах
    if (JSON.stringify(currentUserData) === JSON.stringify(values)) {
      // отключаем кнопку
      setIsFormValid(false);
    } else {
      // проверка на валидность
      if (Object.keys(errors).length === 0) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }
  }, [errors, setIsFormValid, values, currentUserData]);
};
