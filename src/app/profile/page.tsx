'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [sortOrder, setSortOrder] = useState('default');

  const portfolioItems = [
    {
      id: 'adidas-yeezy-boost-350-v2-beluga-reflective',
      href: '/adidas-yeezy-boost-350-v2-beluga-reflective',
      brand: 'adidas Yeezy Boost',
      model: '350 V2 Beluga Reflective',
      imgSrc:
        'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1738193358',
      category: 'sneakers',
      marketValue: 'CA$214',
      condition: 'Condition: New',
    },
    {
      id: 'adidas-yeezy-boost-350-v2-mx-dark-salt',
      href: '/adidas-yeezy-boost-350-v2-mx-dark-salt',
      brand: 'adidas Yeezy Boost',
      model: '350 V2 MX Dark Salt',
      imgSrc:
        'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-MX-Dark-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1738193358',
      category: 'sneakers',
      marketValue: 'CA$182',
      condition: 'Condition: New',
    },
    {
      id: 'adidas-ultra-boost-40-dna-white',
      href: '/adidas-ultra-boost-40-dna-white',
      brand: 'adidas Ultra Boost',
      model: '4.0 DNA White',
      imgSrc:
        'https://images.stockx.com/images/adidas-Ultra-Boost-40-DNA-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1738193358',
      category: 'sneakers',
      marketValue: 'CA$293',
      condition: 'Condition: New',
    },
    {
      id: '2020-21-panini-prizm-basketball-blaster-box',
      href: '/2020-21-panini-prizm-basketball-blaster-box',
      brand: '2020-21 Panini Prizm',
      model: 'Basketball Blaster Box',
      imgSrc:
        'https://images.stockx.com/images/2020-21-Panini-Prizm-Basketball-Blaster-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1617301601',
      category: 'trading-cards',
      marketValue: 'CA$78',
      condition: 'Condition: New',
    },
  ];

  const sortedItems = [...portfolioItems].sort((a, b) => {
    if (sortOrder === 'value-high') {
      return (
        parseFloat(b.marketValue.replace(/[^0-9.-]+/g, '')) -
        parseFloat(a.marketValue.replace(/[^0-9.-]+/g, ''))
      );
    } else if (sortOrder === 'value-low') {
      return (
        parseFloat(a.marketValue.replace(/[^0-9.-]+/g, '')) -
        parseFloat(b.marketValue.replace(/[^0-9.-]+/g, ''))
      );
    } else if (sortOrder === 'name-az') {
      return a.brand.localeCompare(b.brand);
    } else if (sortOrder === 'name-za') {
      return b.brand.localeCompare(a.brand);
    }
    return 0;
  });

  const toggleSort = (type: string) => {
    if (type === 'item') {
      setSortOrder(sortOrder === 'name-az' ? 'name-za' : 'name-az');
    } else if (type === 'value') {
      setSortOrder(sortOrder === 'value-high' ? 'value-low' : 'value-high');
    }
  };

  return (
    <div className='flex flex-col h-full bg-white'>
      {/* Header */}
      <header className='relative px-4 py-3 border-b border-gray-200'>
        <div className='flex items-center'>
          <Link href='/account' className='absolute left-4'>
            <svg
              className='w-6 h-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              strokeWidth='2'
            >
              <path d='M15 19l-7-7 7-7' />
            </svg>
          </Link>
          <h1 className='text-xl font-medium w-full text-center text-black'>
            Portfolio
          </h1>
          <button className='absolute right-4 text-black'>
            <svg
              className='w-6 h-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              strokeWidth='2'
            >
              <path d='M12 5v14M5 12h14' />
            </svg>
          </button>
        </div>
      </header>

      {/* Sort headers */}
      <div className='flex justify-between items-center px-4 py-3 border-b border-gray-200'>
        <button
          className='flex items-center font-medium text-black'
          onClick={() => toggleSort('item')}
        >
          Item
          <svg
            className={`w-4 h-4 ml-1 ${
              sortOrder.startsWith('name') ? 'text-black' : 'text-gray-400'
            }`}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              d={sortOrder === 'name-za' ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
            />
          </svg>
        </button>
        <button
          className='flex items-center font-medium text-black'
          onClick={() => toggleSort('value')}
        >
          Market Value
          <svg
            className={`w-4 h-4 ml-1 ${
              sortOrder.startsWith('value') ? 'text-black' : 'text-gray-400'
            }`}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              d={sortOrder === 'value-low' ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
            />
          </svg>
        </button>
      </div>

      {/* Portfolio items list */}
      <div className='flex-1 overflow-y-auto'>
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between px-4 py-4 border-b border-gray-200'
          >
            <div className='flex items-center'>
              <div className='w-16 h-16 flex items-center justify-center bg-gray-100 rounded overflow-hidden flex-shrink-0'>
                <img
                  src={item.imgSrc}
                  alt={item.brand + ' ' + item.model}
                  className='object-contain max-w-full max-h-full p-1'
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <div className='ml-3 flex flex-col'>
                <div className='text-gray-400 text-sm font-normal'>
                  {item.brand}
                </div>
                <div className='text-black text-xl font-normal'>
                  {item.model}
                </div>
                <div className='text-gray-400 text-sm font-normal'>
                  {item.condition}
                </div>
              </div>
            </div>
            <div className='text-black text-xl font-normal'>
              {item.marketValue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
