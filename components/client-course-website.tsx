'use client'

import { useSearchParams } from 'next/navigation'
import { CourseWebsite } from './course-website'

export function ClientCourseWebsite() {
  const searchParams = useSearchParams()
  
  return <CourseWebsite searchParams={searchParams} />
}