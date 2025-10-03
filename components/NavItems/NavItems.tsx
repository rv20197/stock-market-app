'use client';
import { NAV_LINKS } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
  const pathName = usePathname();
  const isActive = (path: string) => {
    if (path === '/') {
      return pathName === '/';
    }
    return pathName?.startsWith(path);
  };
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
      {NAV_LINKS.map(({ href, name }) => (
        <li key={name}>
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href) && `text-gray-100`
            }`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
