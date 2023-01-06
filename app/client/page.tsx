'use client'

import { useEffect } from 'react'

export default function Client() {
  console.log('客户端页面渲染：这句话应该会在ssr期间在终端上打印，并且会在客户端控制台上打印。')

  useEffect(() => {
    console.log('仅在浏览器控制台上打印')
  })

  return (
    <div>
      <h1>客户端组件</h1>
      {/* Uncommenting this will result in an error complaining about inconsistent
            rendering between client and server, which is very true */}
      {/* <p>My secret env: {process.env.MY_SECRET_ENV}</p> */}

      <br></br>
      <p>渲染日志和useEffect日志应该被打印在浏览器控制台中</p>
    </div>
  )
}
