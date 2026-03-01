const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

  // --- PASSTHROUGH COPIES ---
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // --- COLLECTIONS ---

  // All reviews, sorted by year descending then file date descending
  eleventyConfig.addCollection("reviews", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("review")
      .sort((a, b) => {
        if (b.data.year !== a.data.year) return b.data.year - a.data.year;
        return b.date - a.date;
      });
  });

  // Only the 6 most recent reviews for the homepage
  eleventyConfig.addCollection("latestReviews", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("review")
      .sort((a, b) => {
        if (b.data.year !== a.data.year) return b.data.year - a.data.year;
        return b.date - a.date;
      })
      .slice(0, 6);
  });

  // --- FILTERS ---

  // Convert numeric rating to star glyphs: 4 → "★★★★☆"
  eleventyConfig.addFilter("neonStars", function (rating) {
    const filled = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return filled + empty;
  });

  // Convert category name to a slug for data attributes
  // e.g. "80s Sci-Fi Flicks" → "80s-sci-fi-flicks"
  eleventyConfig.addFilter("slugify", function (str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  });

  // --- SHORTCODES ---

  // Spoiler block: {% spoiler %}content{% endspoiler %}
  eleventyConfig.addPairedShortcode("spoiler", function (content) {
    return `<details class="spoiler-block">
      <summary class="spoiler-toggle">⚠ Spoiler — click to reveal</summary>
      <div class="spoiler-content">${content}</div>
    </details>`;
  });

  // --- MARKDOWN ---
  const md = markdownIt({ html: true, typographer: true });
  eleventyConfig.setLibrary("md", md);

  // --- DIRECTORIES ---
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
