import { SITEURI } from "@/data";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4">
      <Logo />
      <ul className="flex items-center gap-8">
        <li>
          <Link className="text-slate-800 font-medium" href={`#howtouse`}>
            How It Works?
          </Link>
        </li>
        {/* <li>
          <select
            name=""
            id=""
            className="bg-transparent font-medium text-slate-800"
          >
            <option value="EN">English</option>
            <option value="FR">Francais</option>
            <option value="ES">Espanol</option>
          </select>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
