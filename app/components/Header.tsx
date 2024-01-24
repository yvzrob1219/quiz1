
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
    <nav className={"absolute flex gap-10 min-h-10 align-middle items-center justify-center bg-zinc-700 w-full"}>
      {
        navlinks.map(({name, href}, index) => 
          <Link key={index} href={href}>{name}</Link>
        )
      }
    </nav>
  )
}

export default Header