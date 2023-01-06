import Link from 'next/link'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link href="/">主页</Link>
              </li>
              <li>
                <Link href="/server">服务端组件</Link>
              </li>
              <li>
                <Link href="/client">客户端组件</Link>
              </li>
              <li>
                <Link href="/mixmatch">混合渲染</Link>
              </li>
              <li>
                <Link href="/degenerate">退化渲染</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
