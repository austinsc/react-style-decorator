import Style from '../../src/';

const stylesheet1 = {
  result: 0,
  ref() {
    this.result++;
  }, unref() {
    this.result--;
  }
};

const stylesheet2 = {
  result: 1,
  ref() {
    this.result++;
  }, unref() {
    this.result--;
  }
};

@Style(stylesheet1, stylesheet2)
class TestComponent {
  constructor() {
    this.counter = 0;
  }

  componentWillMount() {
    this.counter++;
  }

  componentWillUnmount() {
    this.counter--;
  }
}

describe('Style', () => {
  describe('Decorator', () => {
    const tc = new TestComponent();
    it('Should have been reffed.', () => {
      tc.componentWillMount();
      expect(stylesheet1.result).to.be.equal(1);
    });

    it('Should have proccessed the additional styles passed in on mount', () => {
      expect(stylesheet2.result).to.be.equal(2);
    });

    it('Should have called the original componentWillMount function', () => {
      expect(tc.counter).to.be.equal(1);
    });

    it('Should have been unreffed.', () => {
      tc.componentWillUnmount();
      expect(stylesheet1.result).to.be.equal(0);
    });

    it('Should have proccessed the additional styles passed in on unmount', () => {
      expect(stylesheet2.result).to.be.equal(1);
    });

    it('Should have called the original componentWillUnmount function', () => {
      expect(tc.counter).to.be.equal(0);
    });
  });
});