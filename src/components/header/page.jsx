import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href='/'>
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={80}
          height={65}
        />
      </Link>
    </div>
  );
};

export default Header;
