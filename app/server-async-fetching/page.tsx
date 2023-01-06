import { Suspense } from 'react'
import Quote from '../../components/server/quote'

export default function AsyncLoading() {
  return (
    <>
      <h1>Server Component Async Fetching</h1>
      <div className="flex flex-col gap-4 w-full h-full">
        <Suspense fallback={<p>Fast component loading...</p>}>
          {/* @ts-ignore */}
          <Quote />
        </Suspense>

        <Suspense fallback={<p>Slow component loading...</p>}>
          {/* @ts-ignore */}
          <Quote slow={true} />
        </Suspense>
      </div>
    </>
  )
}
