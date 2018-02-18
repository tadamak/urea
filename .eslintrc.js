module.exports = {
  "plugins": ["prettier"],
  "extends": ["airbnb", "prettier"],
  "env": {
    "browser": true
  },
  "rules": {
    "no-underscore-dangle": [
      "error",
      { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false
      }
    ],
    "no-unused-vars": 1
  }
};
