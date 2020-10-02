module.exports = {
  plugins: [
    require("autoprefixer")({ grid: true }),
    require("cssnano"),
    require("postcss-sorting")({
      "properties-order": ["margin", "padding", "border", "background"]
    })
  ]
};
