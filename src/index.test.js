describe('index', () => {
  test('require index.js imports without error', () => {
    expect(() => {
      require('./index.js')
    }).not.toThrow()
  })
})
