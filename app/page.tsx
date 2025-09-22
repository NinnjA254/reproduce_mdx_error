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
    <div style={{
      border: '1px solid',
      padding: 4,
      cursor:'pointer'
    }}
      onClick = {() => setCount(p=> p+1)}
      >
      <p>click count: {count}</p>
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
    <main className="flex items-center flex-col justify-center h-[300px]">
      <DisplayMdx code={result.code} />
    </main>
  )
}
