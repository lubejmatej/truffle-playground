import * as React from "../_snowpack/pkg/react.js";
const useForm = (initialFormValue = {}, onSubmitCb) => {
  const [inputs, setInputs] = React.useState({...initialFormValue});
  const handleInputChange = React.useCallback((event) => {
    event.persist();
    const {
      target: {name, value}
    } = event;
    setInputs((inputs2) => ({
      ...inputs2,
      [name]: value
    }));
  }, [setInputs]);
  const handleInputChangeManual = React.useCallback((name, value) => {
    setInputs((inputs2) => ({
      ...inputs2,
      [name]: value
    }));
  }, [setInputs]);
  const handleSubmit = React.useCallback((event) => {
    event?.preventDefault();
    onSubmitCb?.(inputs);
  }, [inputs, onSubmitCb]);
  const clearInputValues = React.useCallback(() => {
    const clearedInputsFields = (inputs2) => Object.keys(inputs2).reduce((acc, i) => ({
      ...acc,
      [i]: ""
    }), {});
    setInputs(clearedInputsFields);
  }, [setInputs]);
  return {
    inputs,
    handleInputChange,
    handleInputChangeManual,
    clearInputValues,
    handleSubmit
  };
};
export default useForm;
