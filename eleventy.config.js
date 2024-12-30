import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 0,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "nihalsahu.net",
			subtitle: "Nihal Sahu's personal website.",
			base: "https://nihalsahu.net/",
			author: {
				name: "Nihal Sahu",
				email: "iamnihalsahu@gmail.com", // Optional
			}
		}
	});

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

