const main = require('./main');

jest.mock('./main', () => jest.fn());

describe('index', () => {
  it('calls the main function', () => {
    require('./index');
    expect(main).toHaveBeenCalledWith(
      "../public/customers.txt",
      "../public/output.txt"
    );
  })
})