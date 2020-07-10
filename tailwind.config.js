module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      height: {
        "72": "30rem",
        "96": "46rem",
        "128": "60rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
