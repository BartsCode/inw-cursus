import { Suspense } from 'react'
import { ClientCourseWebsite } from '@/components/client-course-website'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientCourseWebsite />
    </Suspense>
  )
}