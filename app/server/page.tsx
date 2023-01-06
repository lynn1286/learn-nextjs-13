export default function Server() {
  console.log('服务端组件 - 只会打印在终端， 不会在浏览器控制台打印')
  return (
    <div>
      <h1>服务器页面</h1>
      <p>我的秘钥: {process.env.MY_SECRET_ENV}</p>
      <br></br>
      <p>该组件中的日志应只在服务器上打印。</p>
    </div>
  )
}
