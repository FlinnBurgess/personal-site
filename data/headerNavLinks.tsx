import TagIcon from '../public/static/images/icons/navbar/tag.svg'
import LeafIcon from '../public/static/images/icons/navbar/leaf.svg'
import HammerIcon from '../public/static/images/icons/navbar/hammer.svg'
import BlogIcon from '../public/static/images/icons/navbar/blog.svg'
import ManIcon from '../public/static/images/icons/navbar/man.svg'

const headerNavLinks = [
  {
    href: '/blog',
    title: 'Blog',
    icon: <BlogIcon color={'black'} />,
    activeTextColour: 'white',
  },
  { href: '/tags', title: 'Tags', icon: <TagIcon color={'black'} />, activeTextColour: 'black' },
  {
    href: '/projects',
    title: 'Projects',
    icon: <HammerIcon color={'black'} />,
    activeTextColour: 'black',
  },
  { href: '/about', title: 'About', icon: <ManIcon color={'black'} />, activeTextColour: 'white' },
  {
    href: 'https://topaz-feather-00e.notion.site/Digital-Garden-8d6f4a7b9de44896a78bf045c3eb6a66',
    title: 'Digital Garden',
    icon: <LeafIcon color={'black'} />,
    activeTextColour: 'white',
  },
]

export default headerNavLinks
