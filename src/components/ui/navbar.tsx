import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-gray-900 px-8 py-12">
      <div className="text-lg font-bold text-purple-500 font-serif ml-5">
        <h1 className="text-shadow-lg">
          Hassan <span className="text-white">Raza</span>
        </h1>
      </div>
      <ul className="flex items-center justify-center gap-6">
        <Link href="/" passHref>
          <li className="text-white font-semibold text-sm sm:text-base border-b-2 border-t-2 border-transparent cursor-pointer transition duration-300 hover:text-purple-500 hover:border-purple-500">
            Home
          </li>
        </Link>
        <Link href="/about" passHref>
          <li className="text-white font-semibold text-sm sm:text-base border-b-2 border-t-2 border-transparent cursor-pointer transition duration-300 hover:text-purple-500 hover:border-purple-500">
            About Me
          </li>
        </Link>
        <Link href="/skills" passHref>
          <li className="text-white font-semibold text-sm sm:text-base border-b-2 border-t-2 border-transparent cursor-pointer transition duration-300 hover:text-purple-500 hover:border-purple-500">
            Skills
          </li>
        </Link>
        <Link href="/contact" passHref>
          <li className="text-white font-semibold text-sm sm:text-base border-b-2 border-t-2 border-transparent cursor-pointer transition duration-300 hover:text-purple-500 hover:border-purple-500">
            Contacts
          </li>
        </Link>
      </ul>
    </div>
  );
}
