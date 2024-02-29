import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="p-24 max-sm:hidden sm:hidden lg:block">
        <Image src="/blackground.png" width={150} height={150} alt="Logo" className=' '/>
    </Link>
  );
};

export default Logo;
