import type React from "react";

const Footer: React.FC = () => {
  const footerLinks = [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Contact", href: "#" },
  ];
  const currentYear = new Date().getFullYear();
  const _companyName = "Tasker";
  return (
    <footer className="bg-background border-2 border-solid  py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-base font-medium">
            <p className="text-sm">
              © {currentYear} Tasker. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 text-base font-medium">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
