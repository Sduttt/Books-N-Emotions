import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import UserLink from "./UserLink";

const user: Boolean = false;

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-red-500 p-4 text-red-500 h-12 md:h-16">
      {/* LEFT ICONS */}
      <div className="text-red-500 hidden md:flex text-base sm:text-lg flex-1 items-center ">
        <Link href={"/"} className="mx-2">
          Home
        </Link>
        <Link href={"/menu"} className="mx-2">
          Menu
        </Link>
        <Link href={"/contact"} className="mx-2">
          Contact
        </Link>
      </div>

      {/* LOGO */}
      <div className="flex-1 items-center md:text-center">
        <Link href={"/"} className="uppercase text-lg sm:text-xl font-semibold">
          Books & Emotions
        </Link>
      </div>

      {/* RIGHT ICONS */}
      <div className="text-red-500 hidden md:flex text-base sm:text-lg flex-1 items-center justify-end">
        {user ? <Link href={"/orders"} className="mx-2">
          Orders
        </Link> : 
        // <Link href={"/login"} className="mx-2">
        //   Login
        // </Link>
        <UserLink />
      }
        <Link href={"/cart"} className="mx-2">
          <CartIcon />
        </Link>
      </div>
      {/* MOBILE VIEW */}
      <div className="font-bold text-2xl md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
