import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './LayoutWrapper.module.scss'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  key: string
}

const pageTransitionVariants = {
  hidden: { opacity: 0, x: 0, y: 30 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 30 },
}

const LayoutWrapper = ({ children, key }: Props) => {
  const headerRef = useRef(null)
  const navbarSquashOffset = 90
  const [headerIsSticky, setHeaderIsSticky] = useState(false)

  const router = useRouter()
  const currentRoute = router.pathname

  useEffect(function registerScrollListener() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > navbarSquashOffset && !headerIsSticky) {
        setHeaderIsSticky(true)
      } else if (window.scrollY <= navbarSquashOffset) {
        setHeaderIsSticky(false)
      }
    })
  })

  return (
    <>
      <header className={`${styles.navbar} ${headerIsSticky ? styles.sticky : ''}`} ref={headerRef}>
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link, idx) => {
              const linkIsActive = currentRoute === link.href
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`${styles.navItem} ${styles[`colour${idx}`]} ${
                    linkIsActive ? styles.active : ''
                  } ${
                    styles[link.activeTextColour]
                  } p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 inline-flex gap-0.5 align-middle items-center`}
                >
                  <link.Icon className={styles.navIcon} />
                  {link.title}
                </Link>
              )
            })}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <main className={`${styles.pageContent} ${headerIsSticky ? styles.offsetContent : ''}`}>
            <motion.main
              variants={pageTransitionVariants}
              initial={'hidden'}
              animate={'enter'}
              exit={'exit'}
              transition={{ y: { duration: 0.25 } }}
              className={''}
              key={key}
            >
              {children}
            </motion.main>
          </main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
