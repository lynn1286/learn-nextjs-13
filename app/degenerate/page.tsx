import Client from './client'

export default function DegeneratePage() {
  console.log('退化页面的呈现')
  return (
    <div>
      <h1>服务器组件退化 - 如果将服务器组件直接导入到客户端组件中，它会默默地退化为客户端组件</h1>
      <div className="box-blue">
        <Client message="来自服务器的消息" />
      </div>
    </div>
  )
}
