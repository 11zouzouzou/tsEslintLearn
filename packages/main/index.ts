class App {
  private _m: number;
  public m = '2';
  private static s_a: number = 3;
  static A: number = 5;
  constructor() {
    this._m = 1;
  }

  setM(): void {
    return;
  }

  static SetA(): void {
    return;
  }

  private s() {
    return;
  }
}

export { App };
