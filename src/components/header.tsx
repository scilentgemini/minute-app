import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/minutes",
    label: "Minutes",
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <div className="flex items-center">
        <Image
          src="/MauveineTech.svg"
          alt="Mauveine Tech Logo"
          width={200}
          height={24}
          priority
        />
      </div>
      <nav>
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-700 hover:text-gray-900">{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
