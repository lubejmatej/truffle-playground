abstract class ValidatorUtils {
  static readonly TelNumberReg = () => '^(00|\\+)[1-9]{1}([0-9][\\s]*){9,16}$';
  static readonly UrlReg = () =>
    '(\\b(https?)://)[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]';
}

export default ValidatorUtils;
