let uniqueIdIdentifier = 0;
class Utils {
  static uniqueId(prefix = "") {
    uniqueIdIdentifier += 1;
    return prefix.toString() + uniqueIdIdentifier;
  }
  static camelCaseToString(camelCaseText) {
    if (!camelCaseText) {
      return "";
    }
    const replaced = camelCaseText.replace(/([A-Z])/g, " $1");
    return `${replaced.charAt(0).toUpperCase()}${replaced.slice(1)}`;
  }
  static wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static waitDefault() {
    return Utils.wait(1e3);
  }
}
export default Utils;
