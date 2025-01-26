export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 px-4 flex flex-col items-center gap-4">
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li><a href="#" className="hover:text-[var(--color)] transition">FAQ</a></li>
          <li><a href="#" className="hover:text-[var(--color)] transition">Services</a></li>
          <li><a href="#" className="hover:text-[var(--color)] transition">About Me</a></li>
          <li><a href="#" className="hover:text-[var(--color)] transition">Contact</a></li>
          <li><a href="#" className="hover:text-[var(--color)] transition">Privacy Policy</a></li>
        </ul>
        <p className="text-xs text-gray-400">
          Hassan Raza | All Rights Reserved
        </p>
      </footer>
    );
  }
  