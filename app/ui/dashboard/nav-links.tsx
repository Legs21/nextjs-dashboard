'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon 
  },
  {
    name: 'Trips',
    href: '/dashboard/trips',
    icon: DocumentDuplicateIcon,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        name: 'Mayflower Gulch Nov 30 2024',
        href: '/dashboard/trips/113024',
      },
      {
        name: 'Loveland Pass May 3 2025',
        href: '/dashboard/trips/050325',
      }
    ]
  },
  {
    name: 'Map',
    href: '/dashboard/map',
    icon: UserGroupIcon
  },
  { 
    name: 'About me',
    href: '/dashboard/aboutme',
    icon: UserGroupIcon
  },
];

export default function NavLinks() {
  //const [subnav, setSubnav] = useState(false);

  //const showSubnav = () => setSubnav(!subnav);
  
  
  const pathname = usePathname();
  return (
    <ul>
      <li>
        <Link href={"/dashboard"} className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
              )}>Home</Link>
      </li>
      <li>
        <Link href="/dashboard/map" className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
              )}>Map</Link>
      </li>
      <li>
        <Link href="/dashboard/aboutme" className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
              )}>About me</Link>
      </li>
            <li>
        <Link href="/dashboard/trips" className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
              )}>Trips</Link>
        <ul>
          <li>
            <Link href="/dashboard/trips/113024" className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
              )}>Mayflower Gulch Nov 30 24</Link>
          </li>
          <li>
            <Link href="./050325" className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
              )}>Loveland Pass May 3 25</Link>
          </li>
        </ul>
      </li>
    </ul>
  )


 /* const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={link.subNav && showSubnav}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {                  
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <div>
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </div>
            <div>
              {link.subNav && subnav
                ? link.iconOpened
                : link.subNav
                ? link.iconClosed
                : null}
            </div>
          </Link>
          {subnav && link.subNav?.map((link, name) => {
            return (
              <Link
                href={link.href}
                key={link.name}
              >
                <div>
                  <LinkIcon className="w-6" />
                  <p className="hidden md:block">{link.name}</p>
                </div>
              </Link>
            );
          })}
      );
    })}
  </>
);
*/
}
