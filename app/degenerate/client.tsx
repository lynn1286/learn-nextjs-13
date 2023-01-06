'use client'

import NestedServer from './nested-server'

export default function Client({ message }: { message: string }) {
  console.log('客户端组件 - 会在控制台以及终端上打印')

  return (
    <div>
      <h2>客户端组件</h2>
      <p>传入的props: {message}</p>
      <div className="box-blue">
        <NestedServer />
      </div>
    </div>
  )
}
