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
  const [activeTab, setActiveTab] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'search') {
      setSearchOpen(true);
    } else {
      setSearchOpen(false);
    }
  };

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black flex flex-col h-screen`}
      >
        {searchOpen && (
          <div className='fixed inset-0 bg-white z-20 p-4'>
            <div className='flex items-center mb-4'>
              <button onClick={() => setSearchOpen(false)} className='p-2 mr-2'>
                <svg className='w-6 h-6' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
                  />
                </svg>
              </button>
              <div className='flex-1'>
                <input
                  type='text'
                  placeholder='Search for products, brands, etc.'
                  className='w-full bg-gray-100 rounded-md px-4 py-2 text-black'
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}

        <main className='flex-grow overflow-y-auto'>{children}</main>

        <nav className='bg-white border-t border-gray-200 z-10'>
          <div className='flex items-center justify-around h-14 px-2'>
            <Link href='/'>
              <button
                onClick={() => handleTabChange('home')}
                className={`flex items-center justify-center h-full ${
                  activeTab === 'home' ? 'text-green-500' : 'text-gray-400'
                }`}
              >
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M3 12l3-3 3 3 6-6 6 6' />
                </svg>
              </button>
            </Link>

            <button
              onClick={() => handleTabChange('')}
              className={`flex items-center justify-center h-full ${
                activeTab === 'search' ? 'text-green-500' : 'text-gray-400'
              }`}
            >
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </button>

            <button
              onClick={() => handleTabChange('')}
              className={`flex items-center justify-center h-full ${
                activeTab === 'notifications'
                  ? 'text-green-500'
                  : 'text-gray-400'
              }`}
            >
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
              </svg>
            </button>

            <button
              onClick={() => handleTabChange('')}
              className={`flex items-center justify-center h-full ${
                activeTab === 'favorites' ? 'text-green-500' : 'text-gray-400'
              }`}
            >
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
              </svg>
            </button>

            <Link href='/profile'>
              <button
                onClick={() => handleTabChange('profile')}
                className={`flex items-center justify-center h-full ${
                  activeTab === 'profile' ? 'text-green-500' : 'text-gray-400'
                }`}
              >
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
                  <circle cx='12' cy='7' r='4' />
                </svg>
              </button>
            </Link>
          </div>
        </nav>
      </body>
    </html>
  );
}
