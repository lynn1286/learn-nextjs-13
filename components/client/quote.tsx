'use client'

import { getQuote } from '../../lib/quote'
import { use } from 'react'

const quoteFetch = getQuote()
const quoteFetchSlow = getQuote(2000)

export default function Quote({ slow }: { slow?: boolean }) {
  const quote = use(slow ? quoteFetchSlow : quoteFetch)
  return (
    <div className="box">
      <p>{slow ? 'Slow' : 'Fast'} component rendered</p>
      <blockquote>{quote.content}</blockquote>
    </div>
  )
}
