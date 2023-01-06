import { getQuote } from '../../lib/quote'
import os from 'os'

export default async function Quote({ slow }: { slow?: boolean }) {
  const quote = await getQuote(slow ? 2000 : 0)
  return (
    <div className="container border border-blue-600 rounded p-4">
      <p>
        {slow ? 'Slow' : 'Fast'} component rendered on{' '}
        <span className="text-orange-600">${os.hostname()}</span>
      </p>
      <blockquote className='"text-xl italic font-semibold text-gray-900 p-4'>
        {quote.content}
      </blockquote>
    </div>
  )
}
