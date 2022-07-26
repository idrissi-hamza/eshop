import Link from "next/link";

const Header = () => {
  const navLinks = [
    { label: "nav1", link: "/nav1" },
    { label: "nav2", link: "/nav2" },
    { label: "nav3", link: "/nav3" },
  ];
  return (
    <header className="flex sm:flex-row flex-col justify-between items-center h-auto sm:h-16 px-8 shadow-md">
      <div className="my-5 sm:my-0 ">
        <Link href="/">
          <a className="sm:mr-5  primary-clr   font-extrabold text-xl  ">
            Eshop
          </a>
        </Link>
      </div>
      <nav>
        <ul className="flex items-center justify-center sm:flex-row flex-col text-center  my-5 sm:my-0">
          {navLinks.map((link) => (
            <li  key={link.label}>
              <Link href={link.link}>
                <a className="sm:mr-5 text-slate-700 hover:text-black">
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
