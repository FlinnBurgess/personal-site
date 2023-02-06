import { Toc } from 'types/Toc'
import useActiveId from '@/lib/hooks/useActiveId'
import styles from './SidebarTOC.module.scss'

interface SidebarTOCProps {
  toc: Toc
  indentDepth?: number
  fromHeading?: number
  toHeading?: number
  asDisclosure?: boolean
  exclude?: string | string[]
}

const SidebarTOC = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  exclude = '',
}: SidebarTOCProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const tocIds = filteredToc.map(({ url }) => url)

  const activeId = useActiveId(tocIds)

  return (
    <div className={styles.sidebarToc}>
      <p className={'text-xl font-bold'}>On this page</p>
      <ul>
        {filteredToc.map((heading, idx) => {
          const colour = idx % 5
          return (
            <li
              key={heading.value}
              className={`${heading.depth >= indentDepth && 'ml-6'} ${styles.item}`}
            >
              <a
                href={heading.url}
                className={`${styles.tocLink} ${
                  activeId === heading.url.slice(1) ? styles.active : ''
                } ${styles[`colour${colour}`]}`}
              >
                {heading.value}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SidebarTOC
