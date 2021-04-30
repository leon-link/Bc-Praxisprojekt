const yaml = require("js-yaml");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

function customWhere(list, attribute, value) {
  return list.filter((elem) => elem[attribute] == value);
};

module.exports = (eleventyConfig) => {
  // eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("customWhere", customWhere);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("./assets/");
  eleventyConfig.addPassthroughCopy("src/**/assets/**");
  eleventyConfig.addWatchTarget("src/**/assets/**");

  return {
    dir: {
      input: "src",
      ouput: "_site",
    },
  };
};
