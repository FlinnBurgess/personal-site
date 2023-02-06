import { useEffect, useState } from 'react'

export default function useActiveId(ids: string[]) {
  const [activeId, setActiveId] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`setting active ID to ${entry.target.id}`)
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%' }
    )

    ids.forEach((id) => {
      if (document.getElementById(id.slice(1))) {
        observer.observe(document.getElementById(id.slice(1)))
      }
    })

    return () => {
      ids.forEach((id) => {
        if (document.getElementById(id.slice(1))) {
          observer.unobserve(document.getElementById(id.slice(1)))
        }
      })
    }
  }, [ids])

  return activeId
}
