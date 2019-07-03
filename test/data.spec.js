require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example.example).toBe('function');
  });
  it('returns `example`', () => {
    expect(filtrado.example()).toBe('example');
  });

  describe('filtrado', () => {
    it('is a function', () => {
      expect(typeof example.filtrado).toBe('function');
    });

    it('returns `filtrado`', () => {
      expect(example.filtrado()).toBe('filtrado');
});
});

describe ('filtrado', () => {
  it('is a function', () => {
    expect(typeof filtrado).toBe('object');
  });

  it('returns `filtrado`', () => {
    expect(filtrado.filtrado()).toBe('filtrado');
  });

});
