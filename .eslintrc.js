module.exports = {
  // Adding typescript parser to eslint
  parser: '@typescript-eslint/parser',
  extends: [ 
    // Adding extensions rules 
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  // Configuration of the parser 
  parserOptions: {
    ecmaVersion:2016,
    sourceType: 'module'
  },
  rules: {
    // Setup of the rules 
    "prettier/prettier": "warn"
  }
}