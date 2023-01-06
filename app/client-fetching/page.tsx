'use client'

import { useState, Suspense } from 'react'
import Quote from '../../components/client/quote'

export default function ClientFetching() {
  // use a button to toggle loading of components to make sure they're loaded client-side
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Client Fetching</h1>
      <button className="btn" onClick={() => setShow(true)}>
        Show Components
      </button>

      {show && (
        <>
          <div className="flex flex-col gap-4 w-full h-full">
            <Suspense fallback={<p>Fast component loading...</p>}>
              <Quote />
            </Suspense>

            <Suspense fallback={<p>Slow component loading...</p>}>
              <Quote slow={true} />
            </Suspense>
          </div>
        </>
      )}
    </>
  )
}
