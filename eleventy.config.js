import markdownIt from "markdown-it";

export default function(eleventyConfig) {
  let options = {
		html: true,
		breaks: true,
		linkify: true,
    typographer: true,
	};
  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets/");
};

