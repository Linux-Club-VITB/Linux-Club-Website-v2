/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qoji227EBLt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full black 0 py-8 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:gap-0">
        <Link className="flex items-center gap-2" href="#">
          <Image
            alt="Logo"
            className="h-8 w-8"
            height={50}
            src="/club.png"
            width={50}
          />
          <span className="text-lg font-bold text-gray-900 dark:text-gray-50">
            Linux Club
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link
            className="hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            About
          </Link>
          <Link
            className="hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Products
          </Link>
          <Link
            className="hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link aria-label="Twitter" href="#">
            <TwitterIcon className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
          </Link>
          <Link aria-label="Facebook" href="#">
            <FacebookIcon className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
          </Link>
          <Link aria-label="Instagram" href="#">
            <InstagramIcon className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
          </Link>
          <Link aria-label="LinkedIn" href="#">
            <LinkedinIcon className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
        © 2024 Linux Club. All rights reserved.
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
