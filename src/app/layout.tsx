'use client';

import { useState } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <header className='bg-black text-white'>
          <div className='flex items-center justify-between p-4 border-b border-gray-800'>
            {/* Toggle Navigation Button */}
            <button
              type='button'
              id='header-nav-toggle'
              aria-expanded={mobileNavOpen}
              onClick={toggleMobileNav}
              className='flex items-center justify-center p-2 text-white'
            >
              <span className='sr-only'>Toggle Navigation</span>
              <svg className='w-7 h-7' focusable='false' viewBox='0 0 50 50'>
                <g>
                  <path
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7 16.25V14H43V16.25H7Z'
                  ></path>
                  <path
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M43 26.5H7V24.25H43V26.5Z'
                  ></path>
                  <path
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M43 36.75H7V34.5H43V36.75Z'
                  ></path>
                </g>
              </svg>
            </button>

            {/* Logo */}
            <h1 aria-label='Search for sneakers, streetwear, collectibles and more'>
              <Link href='/' className='block'>
                <span className='sr-only'>StockX</span>
                <svg
                  className='w-24 h-auto'
                  focusable='false'
                  viewBox='0 0 201 40'
                  aria-hidden='true'
                  style={{ fill: '#08a05c' }}
                >
                  <title>StockX Logo</title>
                  <g>
                    <path d='M186.401 27.5001L201.001 40V30L189.328 20.0056L201.001 10V0L180.601 17.4859V12.4999L166.001 0V10L177.674 19.9944L166.001 30V40L186.401 22.5144V27.5001Z'></path>
                    <path d='M20.3007 16.8L13.7506 15.55C10.1005 14.85 8.50062 14 8.50062 12C8.50062 9.19995 11.6506 7.74994 15.6006 7.74994C19.7506 7.74994 23.4506 9.34994 24.2506 12.75H31.2508C30.4508 6.25002 24.6007 2 15.6006 2C7.30062 2 0.750616 5.65011 0.750616 12.2501C0.750616 18.0001 5.65063 20.9001 12.2006 22.1501L18.7506 23.4001C22.4007 24.1001 24.2506 25.2501 24.2506 27.5001C24.2506 30.55 20.8506 32.2501 16.6506 32.2501C11.5006 32.2501 8.05063 29.7501 7.25063 26.0001H0.000610352C1.0506 33.5001 6.95062 38.0001 16.6506 38.0001C25.3006 38.0001 32.0006 34.5001 32.0006 27.25C32.0007 20.85 26.8506 18.05 20.3007 16.8Z'></path>
                    <path d='M48.6507 6.25001V2.5H41.4007V5.25001C41.4007 8.49998 39.9007 10 36.6507 10H34.6007V15.5H40.3507V29.0001C40.3507 35.0001 43.3007 37.5001 50.3007 37.5001H56.2507V32H50.9507C48.4507 32 47.6007 31.25 47.6007 29V15.5H56.2507V10H45.5007L48.6507 6.25001Z'></path>
                    <path d='M111.351 32.5C106.101 32.5 102.751 28.8 102.751 23.8C102.751 18.8 106.101 15.1 111.351 15.1C115.401 15.1 118.301 17.35 119.051 20.1H126.201C124.901 13.6 119.251 9.59998 111.351 9.59998C101.901 9.59998 95.3508 15.3 95.3508 23.8C95.3508 32.3 101.901 38 111.351 38C119.251 38 125.451 34 126.451 27.25H119.301C118.551 29.75 115.851 32.5 111.351 32.5Z'></path>
                    <path d='M75.3507 9.59998C65.6008 9.59998 59.3507 15.3 59.3507 23.8C59.3507 32.3 65.6007 38 75.3507 38C85.1007 38 91.3508 32.3 91.3508 23.8C91.3508 15.3 85.1008 9.59998 75.3507 9.59998ZM75.3507 32.5C70.1007 32.5 66.7507 28.8 66.7507 23.8C66.7507 18.8 70.1007 15.1 75.3507 15.1C80.6007 15.1 83.9508 18.8 83.9508 23.8C83.9508 28.8 80.6008 32.5 75.3507 32.5Z'></path>
                    <path d='M145.151 22.9001L160.201 10.0001H150.451L138.151 20.8001V2.5H130.901V37.5001H138.151V28.9001L142.498 25.1742L153.051 37.5001H162.251L149.751 22.9001H145.151Z'></path>
                  </g>
                </svg>
              </Link>
            </h1>

            {/* Search button (mobile) */}
            <ul role='list' className='flex'>
              <li>
                <button
                  className='p-2 text-white'
                  id='mobile-search-toggle'
                  aria-controls='site-search'
                >
                  <svg
                    className='w-7 h-7'
                    focusable='false'
                    viewBox='0 0 50 50'
                  >
                    <path
                      fill='currentColor'
                      d='M33.8 31.5L32.5 31.6C34.9 29 36.4 25.5 36.4 21.7C36.4 13.7 29.9 7.10001 21.8 7.10001C13.7 7.10001 7.3 13.7 7.3 21.7C7.3 29.7 13.8 36.3 21.9 36.3C25.6 36.3 29 34.9 31.5 32.6L31.4 34L40.3 42.9L42.7 40.5L33.8 31.5ZM21.9 33.3C15.5 33.3 10.3 28.1 10.3 21.7C10.3 15.3 15.5 10.1 21.9 10.1C28.3 10.1 33.5 15.3 33.5 21.7C33.5 28.1 28.2 33.3 21.9 33.3Z'
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>

            {/* Mobile Navigation Menu */}
            <div
              id='mobile-navigation'
              aria-hidden={!mobileNavOpen}
              className={`fixed inset-0 z-50 bg-gray-900 text-white ${
                mobileNavOpen ? 'block' : 'hidden'
              }`}
            >
              <div className='flex justify-between items-center p-4 border-b border-gray-800'>
                <button
                  type='button'
                  className='p-2'
                  onClick={toggleMobileNav}
                  aria-label='Close'
                >
                  <svg
                    className='w-6 h-6'
                    focusable='false'
                    viewBox='0 0 50 50'
                    aria-hidden='true'
                  >
                    <path
                      fill='currentColor'
                      d='M36.4 10.9L25 22.3L13.6 10.9L10.9 13.6L22.3 25L10.9 36.4L13.6 39.1L25 27.7L36.4 39.1L39.1 36.4L27.7 25L39.1 13.6L36.4 10.9Z'
                    ></path>
                  </svg>
                </button>
                <Link href='/' className='block'>
                  <svg
                    className='w-24 h-auto'
                    focusable='false'
                    viewBox='0 0 201 40'
                    style={{ fill: '#08a05c' }}
                  >
                    <title>StockX Logo</title>
                    <g>
                      <path d='M186.401 27.5001L201.001 40V30L189.328 20.0056L201.001 10V0L180.601 17.4859V12.4999L166.001 0V10L177.674 19.9944L166.001 30V40L186.401 22.5144V27.5001Z'></path>
                      <path d='M20.3007 16.8L13.7506 15.55C10.1005 14.85 8.50062 14 8.50062 12C8.50062 9.19995 11.6506 7.74994 15.6006 7.74994C19.7506 7.74994 23.4506 9.34994 24.2506 12.75H31.2508C30.4508 6.25002 24.6007 2 15.6006 2C7.30062 2 0.750616 5.65011 0.750616 12.2501C0.750616 18.0001 5.65063 20.9001 12.2006 22.1501L18.7506 23.4001C22.4007 24.1001 24.2506 25.2501 24.2506 27.5001C24.2506 30.55 20.8506 32.2501 16.6506 32.2501C11.5006 32.2501 8.05063 29.7501 7.25063 26.0001H0.000610352C1.0506 33.5001 6.95062 38.0001 16.6506 38.0001C25.3006 38.0001 32.0006 34.5001 32.0006 27.25C32.0007 20.85 26.8506 18.05 20.3007 16.8Z'></path>
                      <path d='M48.6507 6.25001V2.5H41.4007V5.25001C41.4007 8.49998 39.9007 10 36.6507 10H34.6007V15.5H40.3507V29.0001C40.3507 35.0001 43.3007 37.5001 50.3007 37.5001H56.2507V32H50.9507C48.4507 32 47.6007 31.25 47.6007 29V15.5H56.2507V10H45.5007L48.6507 6.25001Z'></path>
                      <path d='M111.351 32.5C106.101 32.5 102.751 28.8 102.751 23.8C102.751 18.8 106.101 15.1 111.351 15.1C115.401 15.1 118.301 17.35 119.051 20.1H126.201C124.901 13.6 119.251 9.59998 111.351 9.59998C101.901 9.59998 95.3508 15.3 95.3508 23.8C95.3508 32.3 101.901 38 111.351 38C119.251 38 125.451 34 126.451 27.25H119.301C118.551 29.75 115.851 32.5 111.351 32.5Z'></path>
                      <path d='M75.3507 9.59998C65.6008 9.59998 59.3507 15.3 59.3507 23.8C59.3507 32.3 65.6007 38 75.3507 38C85.1007 38 91.3508 32.3 91.3508 23.8C91.3508 15.3 85.1008 9.59998 75.3507 9.59998ZM75.3507 32.5C70.1007 32.5 66.7507 28.8 66.7507 23.8C66.7507 18.8 70.1007 15.1 75.3507 15.1C80.6007 15.1 83.9508 18.8 83.9508 23.8C83.9508 28.8 80.6008 32.5 75.3507 32.5Z'></path>
                      <path d='M145.151 22.9001L160.201 10.0001H150.451L138.151 20.8001V2.5H130.901V37.5001H138.151V28.9001L142.498 25.1742L153.051 37.5001H162.251L149.751 22.9001H145.151Z'></path>
                    </g>
                  </svg>
                </Link>
              </div>

              <div className='p-4'>
                <div id='mobile-nav-main-menu' className='visible'>
                  {/* Browse Section */}
                  <div className='mb-4 border-b border-gray-700 pb-4'>
                    <div className='flex justify-between items-center p-3 font-medium'>
                      Browse
                      <span className='text-green-500'>
                        <Link href='/category/sneakers'>Browse All</Link>
                      </span>
                    </div>
                    <div className='pl-3'>
                      {/* Navigation Items */}
                      <NavItem href='/brands' label='Brands' />
                      <NavItem label='New' hasChildren />
                      <NavItem label='Men' hasChildren />
                      <NavItem label='Women' hasChildren />
                      <NavItem label='Kids' hasChildren />
                      <NavItem label='Sneakers' hasChildren />
                      <NavItem label='Shoes' hasChildren />
                      <NavItem label='Apparel' hasChildren />
                      <NavItem label='Accessories' hasChildren />
                      <NavItem label='More Categories' hasChildren />
                      <NavItem href='/dp/deals' label='Deals' highlight />
                      <NavItem
                        href='/stockx-gift-card'
                        label='Gift Cards'
                        icon={
                          <svg
                            className='w-5 h-5 ml-1 mb-0.5'
                            focusable='false'
                            viewBox='0 0 50 50'
                          >
                            <path
                              d='M39 43H11V23H39V43ZM13.2 40.8H36.8V25.3H13.2V40.8Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M41.1998 25.3H8.7998V16.7H41.1998V25.3ZM11.0998 23.1H38.9998V19H11.0998V23.1Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M26.0698 17.887L23.77 17.9117L24.0277 41.9093L26.3275 41.8846L26.0698 17.887Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M23.7998 18.4L23.9998 16.9C24.0998 16.2 24.9998 10.4 27.1998 8.3C29.0998 6.4 32.0998 6.5 33.9998 8.4C35.8998 10.3 35.7998 13.4 33.8998 15.2C31.8998 17.2 25.8998 18.1 25.2998 18.2L23.7998 18.4ZM30.5998 9.2C29.9998 9.2 29.2998 9.4 28.7998 9.9C27.7998 10.8 26.9998 13.5 26.5998 15.7C28.7998 15.3 31.4998 14.5 32.3998 13.6C32.8998 13.1 33.1998 12.5 33.1998 11.8C33.1998 11.1 32.8998 10.5 32.4998 10C31.8998 9.5 31.1998 9.2 30.5998 9.2Z'
                              fill='currentColor'
                            ></path>
                            <path
                              d='M25.8999 18.4L24.3999 18.2C23.6999 18.1 17.7999 17.2 15.7999 15.2C14.8999 14.3 14.3999 13.1 14.3999 11.8C14.3999 10.5 14.8999 9.3 15.7999 8.4C16.5999 7.5 17.7999 7 19.0999 7C19.0999 7 19.0999 7 19.1999 7C20.4999 7 21.6999 7.5 22.5999 8.4C24.6999 10.5 25.6999 16.3 25.7999 17L25.8999 18.4ZM19.1999 9.2C18.4999 9.2 17.7999 9.5 17.3999 10C16.9999 10.5 16.6999 11.1 16.6999 11.8C16.6999 12.5 16.9999 13.1 17.4999 13.6C18.3999 14.5 21.0999 15.3 23.2999 15.7C22.7999 13.5 21.9999 10.8 21.0999 9.9C20.4999 9.5 19.7999 9.2 19.1999 9.2Z'
                              fill='currentColor'
                            ></path>
                          </svg>
                        }
                      />
                    </div>
                  </div>

                  {/* About Section */}
                  <div className='mb-4 border-b border-gray-700 pb-4'>
                    <Link href='/' className='block'>
                      <div className='flex justify-between items-center p-3 font-medium'>
                        <span>About</span>
                        <div>
                          <svg
                            className='w-6 h-6'
                            focusable='false'
                            viewBox='0 0 50 50'
                          >
                            <path
                              fill='currentColor'
                              d='M14.2 40.2001L30.4 25.0001L14.2 9.8001L16.7 7.1001L35.8 25.0001L16.7 42.9001L14.2 40.2001Z'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* How It Works Section */}
                  <div className='mb-4 border-b border-gray-700 pb-4'>
                    <div className='p-3 font-medium'>
                      <a
                        href='https://stockx.com/about/how-it-works/'
                        title='How It Works'
                      >
                        How It Works
                      </a>
                    </div>
                  </div>

                  {/* New Releases Section */}
                  <div className='mb-4 border-b border-gray-700 pb-4'>
                    <Link href='/releases/upcoming' className='block'>
                      <div className='p-3 font-medium'>
                        <span>New Releases</span>
                      </div>
                    </Link>
                  </div>

                  {/* Popular Brands Section */}
                  <div className='mb-4 border-b border-gray-700 pb-4'>
                    <Link href='/' className='block'>
                      <div className='flex justify-between items-center p-3 font-medium'>
                        <span>Popular Brands</span>
                        <div>
                          <svg
                            className='w-6 h-6'
                            focusable='false'
                            viewBox='0 0 50 50'
                          >
                            <path
                              fill='currentColor'
                              d='M14.2 40.2001L30.4 25.0001L14.2 9.8001L16.7 7.1001L35.8 25.0001L16.7 42.9001L14.2 40.2001Z'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* News Section */}
                  <div className='mb-4 border-b border-gray-700 pb-4'>
                    <div className='p-3 font-medium'>
                      <a href='https://stockx.com/news/' title='News'>
                        News
                      </a>
                    </div>
                  </div>

                  {/* Auth Buttons */}
                  <div className='flex flex-col gap-3 p-3'>
                    <button
                      type='button'
                      className='w-full py-2 px-4 border border-gray-600 rounded font-medium'
                    >
                      Log In
                    </button>
                    <button
                      type='button'
                      className='w-full py-2 px-4 bg-green-600 text-white rounded font-medium'
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className='bg-black text-white'>{children}</main>
      </body>
    </html>
  );
}

interface NavItemProps {
  href?: string;
  label: string;
  hasChildren?: boolean;
  highlight?: boolean;
  icon?: React.ReactNode;
}

function NavItem({ href, label, hasChildren, highlight, icon }: NavItemProps) {
  return (
    <div className='py-3 border-b border-gray-700'>
      {href ? (
        <Link href={href} className='flex items-center'>
          <div className={`${highlight ? 'text-green-500' : ''}`}>
            {label}
            {icon && icon}
          </div>
        </Link>
      ) : (
        <div className='flex justify-between items-center'>
          <div>{label}</div>
          {hasChildren && (
            <div>
              <svg className='w-6 h-6' focusable='false' viewBox='0 0 50 50'>
                <path
                  fill='currentColor'
                  d='M14.2 40.2001L30.4 25.0001L14.2 9.8001L16.7 7.1001L35.8 25.0001L16.7 42.9001L14.2 40.2001Z'
                ></path>
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
