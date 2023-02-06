import TagIcon from '../public/static/images/icons/navbar/tag.svg'
import LeafIcon from '../public/static/images/icons/navbar/leaf.svg'
import HammerIcon from '../public/static/images/icons/navbar/hammer.svg'
import BlogIcon from '../public/static/images/icons/navbar/blog.svg'
import ManIcon from '../public/static/images/icons/navbar/man.svg'

const headerNavLinks = [
  {
    href: '/blog',
    title: 'Blog',
    Icon: BlogIcon,
    activeTextColour: 'white',
  },
  { href: '/tags', title: 'Tags', Icon: TagIcon, activeTextColour: 'black' },
  {
    href: '/projects',
    title: 'Projects',
    Icon: HammerIcon,
    activeTextColour: 'black',
  },
  { href: '/about', title: 'About', Icon: ManIcon, activeTextColour: 'white' },
  {
    href: 'https://topaz-feather-00e.notion.site/Digital-Garden-8d6f4a7b9de44896a78bf045c3eb6a66',
    title: 'Digital Garden',
    Icon: LeafIcon,
    activeTextColour: 'white',
  },
]

export default headerNavLinks
