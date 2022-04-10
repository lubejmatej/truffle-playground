let uniqueIdIdentifier = 0;

abstract class Utils {
  static uniqueId(prefix = '') {
    uniqueIdIdentifier += 1;
    return prefix.toString() + uniqueIdIdentifier;
  }

  static camelCaseToString(camelCaseText: string) {
    if (!camelCaseText) {
      return '';
    }
    const replaced = camelCaseText.replace(/([A-Z])/g, ' $1');
    return `${replaced.charAt(0).toUpperCase()}${replaced.slice(1)}`;
  }

  static wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default Utils;
