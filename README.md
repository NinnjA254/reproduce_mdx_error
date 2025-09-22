# Reproducing my mdx-bundler error
- mdx is bundled in ./app/page.tsx
- getMdxComponent is called in ./app/DisplayMdx.tsx

## In dev mode
<video src="./dev_server_error.mp4" controls width="600">
  Your browser does not support the video tag.
</video>

## Attempting to build
![build errror](./build_error.jpg)
> update: In next js 15.3.3, the build would succeeed, but navigating to the page
rendering the mdx would result in a 500 internal server error, with the same error as above in
the terminal.
This is next js 15.5.3