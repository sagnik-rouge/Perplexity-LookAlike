import Link from "next/link";

export const Footer = () => {
  const links = [
    { text: "Pro", href: "#" },
    { text: "Enterprise", href: "#" },
    { text: "Store", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Careers", href: "#" },
    { text: "English (English)", href: "#" },
  ];

  return (
    <footer className="hidden lg:block w-full py-6 absolute bottom-0 left-0 right-0">
      <div className="flex items-center justify-center">
        <nav className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
