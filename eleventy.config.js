
module.exports = function (eleventyConfig) {

  /* --------------------------------------------------------------------------
Dev Server settings
-------------------------------------------------------------------------- */

  eleventyConfig.setServerOptions({
    domDiff: true,
    port: 8148,
  });



  /* --------------------------------------------------------------------------
  Files & folders
  -------------------------------------------------------------------------- */
  eleventyConfig.addPassthroughCopy({ "./assets/": "/" });


  /* --------------------------------------------------------------------------
  11ty Directories
  -------------------------------------------------------------------------- */

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '/_includes',
    },
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
  };
};
