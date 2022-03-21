let uniqueIdIdentifier = 0;

export abstract class Utils {
  static uniqueId(prefix = '') {
    uniqueIdIdentifier += 1;
    return prefix.toString() + uniqueIdIdentifier;
  }

  static wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Simulate block time, not accurate, will fail on prod chain, but for testing with automining should be good enough
  static waitDefault(): Promise<void> {
    return Utils.wait(1000);
  }
}
