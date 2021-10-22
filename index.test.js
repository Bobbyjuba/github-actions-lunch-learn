describe('index.js', () => {
  let index;

  beforeEach(() => {
    jest.clearAllMocks();
    index = require('./index.js');
  });

  it('checks the message displayed by greeting()', async () => {
    jest.spyOn(global.console, 'log');
    await index.greet('Brian');
    expect(console.log).toHaveBeenCalledWith('Hello, Brian!');
  });

  it('checks output of twoSum()', async () => {
    const output = await index.twoSum(1, 2);
    expect(output).toBe(3);
  });
});
