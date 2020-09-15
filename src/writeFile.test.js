const fs = require('fs');
const writeFile = require('./writeFile');
const console = require('./utils/console');

jest.mock('./utils/console', () => {
  return {
    log: jest.fn(),
    warn: jest.fn()
  }
})

jest.mock('fs', () => {
  return {
    writeFileSync: jest.fn()
  }
});

beforeEach(() => {
  console.log.mockClear();
});

describe('writeFile', () => {
  it('should log a success message', () => {
    writeFile('write', 'stringData');
    expect(console.log).toHaveBeenCalled();
  })
  it('should log an error to the console and throw if it fails', () => { 
    fs.writeFileSync.mockImplementation(() => {
      throw new Error();
    })
    expect(() => {
      writeFile()
    }).toThrow();
    expect(console.warn).toHaveBeenCalled();
  })
});
