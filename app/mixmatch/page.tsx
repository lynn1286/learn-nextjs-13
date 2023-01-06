import Client from './client'
import NestedServer from './nested-server'

export default function MixMatchPage() {
  console.log('MixMatchPage rendering')
  return (
    <div>
      <h1>混合匹配页面的渲染</h1>
      <div className="box-blue">
        <Client message="来自服务器的消息">
          <NestedServer />
        </Client>
      </div>
    </div>
  )
}
