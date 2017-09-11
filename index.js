module.exports = {
  extends: [
    'standard',
    'standard-react'
  ],
  env: {
    node: true,
    es6: true
  },
  rules: {
    'no-console' : 'off',
    'indent' : ['error', 2],
    'quotes': ['error', 'single']
  }
}