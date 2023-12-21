/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-pxtorem")({
      rootValue({ file }) {
        return file.indexOf("vant") !== -1 ? 37.5 : 100;
      },
      propList: ["*"],
    }),
  ],
};
