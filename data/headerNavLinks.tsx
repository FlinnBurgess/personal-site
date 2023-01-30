import TagIcon from '../public/static/images/icons/navbar/tag.svg'
import LeafIcon from '../public/static/images/icons/navbar/leaf.svg'
import HammerIcon from '../public/static/images/icons/navbar/hammer.svg'
import BlogIcon from '../public/static/images/icons/navbar/blog.svg'
import ManIcon from '../public/static/images/icons/navbar/man.svg'

const iconFunctionFactory = (Icon) =>
  function returnColouredIcon(color = 'black') {
    return <Icon color={color} />
  }

const headerNavLinks = [
  {
    href: '/blog',
    title: 'Blog',
    icon: iconFunctionFactory(BlogIcon),
  },
  { href: '/tags', title: 'Tags', icon: iconFunctionFactory(TagIcon) },
  { href: '/projects', title: 'Projects', icon: iconFunctionFactory(HammerIcon) },
  { href: '/about', title: 'About', icon: iconFunctionFactory(ManIcon) },
  {
    href: 'https://topaz-feather-00e.notion.site/Digital-Garden-8d6f4a7b9de44896a78bf045c3eb6a66',
    title: 'Digital Garden',
    icon: iconFunctionFactory(LeafIcon),
  },
]

export default headerNavLinks
