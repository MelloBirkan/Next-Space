import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className=" bg-blue-800 flex justify-between p-6">
      <Link href={"/"}>
        <Image src="/logo.svg" width={216} height={30} alt="NextSapce Logo" />
      </Link>
      <ul className="flex gap-4 text-blue-50">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  )
}
