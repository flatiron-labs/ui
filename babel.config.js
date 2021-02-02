module.exports = function(api) {
  api.cache(true);
  
  return {
    presets: ["@babel/preset-typescript", "@babel/preset-env", "@babel/preset-react"],
    env: {
      production: {
        plugins: ["macros", "styled-components", "jsx-remove-data-test-id"]
      },
      development: {
        plugins: ["macros", "styled-components"]
      }
    }
  };
};