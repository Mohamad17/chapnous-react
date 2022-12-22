module.exports = {
  resolve : {
    fallback: {
          // Use can only include required modules. Also install the package.
          // for example: npm install --save-dev assert
          stream: require.resolve("stream-browserify")
      }
    },
  }