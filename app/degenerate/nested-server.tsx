export default function NestedServer() {
  console.log(
    '自身是服务端组件 - 但是因为是在客户端组件中混合渲染，所以会自动退化成客户端组件，最终这句话只会在浏览器控制台打印，不会打印在终端'
  )
  return (
    <div>
      <h3>服务器组件 - 退化成客户端组件</h3>
      <p>内容</p>
    </div>
  )
}
