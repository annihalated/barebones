import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote"

export default function(eleventyConfig) {
  let options = {
		html: true,
		breaks: true,
		linkify: true,
    typographer: true,
	};

  let markdownLib =  markdownIt(options)
    .use(markdownItFootnote);

  markdownLib.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
    const id = tokens[idx].meta.id + 1;
    return `<sup class="footnote-ref"><a id="fnref${id}" href="#fn${id}">${id}</a></sup>`;
  };

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("resume.pdf");
  eleventyConfig.addPassthroughCopy("assets/");
};

