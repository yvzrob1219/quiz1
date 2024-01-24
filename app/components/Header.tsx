import Link from "next/link"


const navlinks : {
  name: string,
  href: string
}[] = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "What we do",
    href: "#Whatwedo"
  },
  {
    name: "Projects",
    href: "#projects"
  },
  {
    name: "Contacts",
    href: "#contacts"
  }
]

const Header = () => {
  return (
    <nav>
      {
        navlinks.map(({name, href}, index) => {
          <Link key={index} href={href}>{name}</Link>
        })
      }
    </nav>
  )
}

export default Header