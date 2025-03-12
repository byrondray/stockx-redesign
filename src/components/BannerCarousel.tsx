'use client';

import React, { useState } from 'react';

const bannerItems = [
  {
    id: 1,
    href: 'https://stockx.com/en-ca/lp/supreme-seller-fee-promo-en-ca/',
    imgSrc:
      'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltce4be74e47d06881/67b4b5487145624ff94cadf6/Supreme$5_SellerFeeGLOBAL_Promo2_11_Primary_Mobil-small.jpg',
    alt: 'Supreme $5 Seller Fee Global Promo',
    openInNewTab: true,
  },
  {
    id: 2,
    href: '/latest-drops',
    imgSrc: '/banner-latest-drops.jpg',
    alt: 'Check out the latest drops',
    openInNewTab: false,
  },
  {
    id: 3,
    href: '/sneaker-deals',
    imgSrc: '/banner-sneaker-deals.jpg',
    alt: 'Hot sneaker deals this week',
    openInNewTab: false,
  },
];

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + bannerItems.length) % bannerItems.length
    );
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className='relative w-full overflow-hidden bg-black'>
      <div className='relative'>
        {bannerItems.map((item, index) => (
          <div
            key={item.id}
            data-testid='BannerCarouselSlide'
            className={`transition-opacity duration-500 ${
              index === currentSlide
                ? 'opacity-100'
                : 'opacity-0 absolute top-0 left-0'
            }`}
            style={{ zIndex: index === currentSlide ? 10 : 0 }}
          >
            <a
              href={item.href}
              target={item.openInNewTab ? '_blank' : undefined}
              rel={item.openInNewTab ? 'noopener' : undefined}
              className='block w-full'
              tabIndex={index === currentSlide ? 0 : -1}
              aria-hidden={index !== currentSlide}
            >
              <div className='w-full aspect-[3/1]'>
                <img
                  alt={item.alt}
                  src={item.imgSrc}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className='w-full h-full object-cover'
                  referrerPolicy='origin'
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  sizes='(max-width: 150px) 150px, (max-width: 200px) 200px, (max-width: 250px) 250px, (max-width: 300px) 300px, (max-width: 350px) 350px, 100vw'
                />
                {item.openInNewTab && (
                  <span className='sr-only'>Opens in new tab</span>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2'>
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className='absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full hidden md:flex items-center justify-center text-white'
        onClick={prevSlide}
        aria-label='Previous banner'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      <button
        className='absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full hidden md:flex items-center justify-center text-white'
        onClick={nextSlide}
        aria-label='Next banner'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>
    </div>
  );
}
