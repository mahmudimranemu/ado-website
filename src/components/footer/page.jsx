import Image from "next/image";
import Link from "next/link";
import { siteInfo, navItems, copyright, policyLinks } from "@/data";

const Footer = () => {
  return (
    <footer className='flex justify-between items-center p-8 bg-adoBlack text-white'>
      <div>
        <Link href='/'>
          <Image
            src={siteInfo.logo}
            alt={siteInfo.name}
            width={182}
            height={150}
          />
        </Link>
      </div>
      <div className='flex flex-col gap-4 items-end'>
        <nav className='flex gap-4'>
          {navItems.map((item, idx) => (
            <Link
              className='text-3xl font-bold '
              key={`link=${idx}`}
              href={item.link}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div>
          <p>{copyright}</p>
          {policyLinks.map((item, idx) => (
            <Link
              key={`link=${idx}`}
              href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
