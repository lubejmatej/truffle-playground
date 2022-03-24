import * as React from 'react';

export type FormDefaults<T = any> = {
  [name in keyof T]: '' | T[name];
};

const useForm = <T = {}>(
  initialFormValue: FormDefaults<T> = {} as FormDefaults<T>,
  onSubmitCb?: (inputs: T) => void
) => {
  const [inputs, setInputs] = React.useState<T>({ ...initialFormValue } as T);

  const handleInputChange = React.useCallback(
    (event) => {
      // Prevents React from resetting its properties:
      event.persist();

      const {
        target: { name, value },
      } = event;

      setInputs((inputs) => ({
        ...inputs,
        [name]: value,
      }));
    },
    [setInputs]
  );

  const handleInputChangeManual = React.useCallback(
    (name: keyof T, value: any) => {
      setInputs((inputs) => ({
        ...inputs,
        [name]: value,
      }));
    },
    [setInputs]
  );

  const handleSubmit = React.useCallback(
    (event?: any) => {
      event?.preventDefault();
      onSubmitCb?.(inputs);
    },
    [inputs, onSubmitCb]
  );

  const clearInputValues = React.useCallback(() => {
    const clearedInputsFields = (inputs: FormDefaults<T>) =>
      Object.keys(inputs).reduce(
        (acc, i) => ({
          ...acc,
          [i]: '',
        }),
        {} as T
      );
    setInputs(clearedInputsFields);
  }, [setInputs]);

  return {
    inputs,
    handleInputChange,
    handleInputChangeManual,
    clearInputValues,
    handleSubmit,
  };
};

export default useForm;
