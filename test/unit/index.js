import Style from '../../src/react-style-decorator';

describe('Style', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(Style, 'greet');
      Style.greet();
    });

    it('should have been run once', () => {
      expect(Style.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(Style.greet).to.have.always.returned('hello');
    });
  });
});
