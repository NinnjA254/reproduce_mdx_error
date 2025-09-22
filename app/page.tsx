import { bundleMDX } from "mdx-bundler";
import DisplayMdx from "./DisplayMdx";

const mdxSource = `
import Foo from './components.tsx'

blah blah normal markdown
<Foo/>
`
const components = `
import * as React from 'react'

export default function Foo() {
  const [count, setCount] = React.useState(0)
  
  return (
    <div className='border'>
      <p>{count}</p>
    </div>
  )
}
`

export default async function Home() {
  const result = await bundleMDX({
    source: mdxSource,
    files: {
      './components.tsx': components
    }
  })
  return (
    <main>
      <DisplayMdx code={result.code} />
    </main>
  )
}
