import NavLink from "../molecules/NavLink"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full uppercase bg-nav-bg text-nav-text px-4 py-2">
      <NavLink link="/" text="Home" className="flex-1 max-w-[50%]" />
      <NavLink link="/crew" text="Crew" />
      <NavLink link="/launches" text="Launches" />
    </nav>
  )
}

export default NavBar
