import Server from './';

describe('Server', () => {
  describe('testAdd', () => {
    it('run the test code', async () => {
      const server = new Server();
      const testSum = server.testAdd(5, 10);

      expect(testSum).toBe(15);
    });
  });
});
