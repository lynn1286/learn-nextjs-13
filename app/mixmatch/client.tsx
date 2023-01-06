'use client'

import { useEffect } from 'react'

export default function Client({
  message,
  children
}: {
  message: string
  children: React.ReactNode
}) {
  console.log('客户端组件')

  useEffect(() => {
    console.log('useEffect 打印在控制台，不会在终端出现')
  })

  return (
    <div>
      <h2>客户端组件</h2>
      <p>Message from parent: {message}</p>
      <div className="box-red">{children}</div>
    </div>
  )
}
