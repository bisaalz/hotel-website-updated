const withMDX = require("@next/mdx")({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: { providerImportSource: "@mdx-js/react" /* otherOptions… */ },
});

module.exports = withMDX({
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
    ],
  },
  // images: {
  //   unoptimized: true,
  // },
});
