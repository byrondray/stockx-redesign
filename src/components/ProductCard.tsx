'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  category: string;
  href: string;
  title: string;
  imgSrc: string;
  lowestAsk: string;
  xpressShip: boolean;
  lastSale: string;
  id: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li className='list-none min-w-[200px] max-w-[230px] flex-shrink-0 rounded-md'>
      <div
        data-testid='productTile'
        data-sponsored-listing='false'
        data-product-vertical={product.category}
        className='relative h-full bg-white rounded-lg overflow-hidden flex flex-col'
      >
        <Link
          href={``}
          aria-label='Product Tile Link'
          className='block outline-offset-[-1px]'
        >
          <div className='relative bg-white rounded-lg'>
            <div className='relative pb-[70%]'>
              <Image
                width={200}
                height={140}
                alt={product.title}
                src={product.imgSrc}
                className='object-contain absolute inset-0 w-full h-full'
                referrerPolicy='origin'
                aria-hidden='true'
              />
            </div>
          </div>
        </Link>

        <button
          type='button'
          className='absolute top-2 right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center'
          aria-label='Follow'
        >
          <svg className='w-6 h-6 text-black' viewBox='0 0 50 50'>
            <path
              d='M33.5 11.3C37.5 11.3 40.8 14.6 40.8 18.6C40.8 19.5 40.6 20.4 40.3 21.2L39.9 22C38.1 25.6 30.5 33.1 25 38C19.5 33.1 11.9 25.7 10.1 22L9.7 21.1C9.4 20.3 9.2 19.4 9.2 18.5C9.2 14.5 12.5 11.2 16.5 11.2C18.9 11.2 21 12.7 23.1 15.9L25 18.8L26.9 16C29 12.9 31.2 11.3 33.5 11.3ZM33.5 9C29.8 9 27 11.8 25 14.7C23 11.6 20.2 9 16.5 9C11.3 9 7 13.3 7 18.5C7 19.7 7.2 20.8 7.6 21.9C9.3 27.5 25 41 25 41C25 41 40.7 27.5 42.3 22C42.7 20.9 42.9 19.8 42.9 18.6C43 13.3 38.7 9 33.5 9Z'
              fill='currentColor'
            ></path>
          </svg>
        </button>

        <div className='p-3 text-black flex-grow'>
          <h3 className='text-sm font-medium truncate mb-1'>{product.title}</h3>

          <div className='mt-2'>
            <p className='text-xs text-gray-700'>Lowest Ask</p>
            <p className='text-base font-bold'>{product.lowestAsk}</p>
          </div>

          {!product.xpressShip && product.lastSale && (
            <p className='text-xs text-gray-400 mt-1'>
              Last Sale: {product.lastSale}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};
