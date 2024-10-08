class Provider {
  #name;

  /**
   * The constructor.
   *
   * @param props - The props.
   * @param props.name - The name.
   */
  constructor(props: { name: string }) {
    this.#name = props.name;
  }

  isStart(): boolean {
    "test with 'quote";
    return this.#name.startsWith('foo');
  }
}

export default Provider;
