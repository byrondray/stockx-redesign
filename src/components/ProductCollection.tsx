import { ProductCard } from './ProductCard';

export default function ProductCollection() {
  const products = [
    {
      id: 'adidas-yeezy-boost-350-v2-beluga-reflective',
      href: '/adidas-yeezy-boost-350-v2-beluga-reflective',
      title: 'adidas Yeezy Boost 350 V2 Beluga Reflective',
      imgSrc:
        'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1738193358',
      category: 'sneakers',
      lowestAsk: 'CA$214',
      lastSale: '',
      xpressShip: true,
    },
    {
      id: '2020-21-panini-prizm-basketball-blaster-box',
      href: '/2020-21-panini-prizm-basketball-blaster-box',
      title: '2020-21 Panini Prizm Basketball Blaster Box',
      imgSrc:
        'https://images.stockx.com/images/2020-21-Panini-Prizm-Basketball-Blaster-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1617301601',
      category: 'trading-cards',
      lowestAsk: 'CA$85',
      lastSale: 'CA$78',
      xpressShip: false,
    },
    {
      id: 'adidas-ultra-boost-40-dna-white',
      href: '/adidas-ultra-boost-40-dna-white',
      title: 'adidas Ultra Boost 4.0 DNA White',
      imgSrc:
        'https://images.stockx.com/images/adidas-Ultra-Boost-40-DNA-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1738193358',
      category: 'sneakers',
      lowestAsk: 'CA$227',
      lastSale: 'CA$293',
      xpressShip: false,
    },
    {
      id: 'adidas-yeezy-boost-350-v2-mx-dark-salt',
      href: '/adidas-yeezy-boost-350-v2-mx-dark-salt',
      title: 'adidas Yeezy Boost 350 V2 MX Dark Salt',
      imgSrc:
        'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-MX-Dark-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1738193358',
      category: 'sneakers',
      lowestAsk: 'CA$182',
      lastSale: '',
      xpressShip: true,
    },
    {
      id: 'on-running-cloudrunner-2-frost-white',
      href: '/on-running-cloudrunner-2-frost-white',
      title: 'On Running Cloudrunner 2 Frost White',
      imgSrc:
        'https://images.stockx.com/images/On-Running-Cloudrunner-2-Frost-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1739394686',
      category: 'sneakers',
      lowestAsk: 'CA$240',
      lastSale: '',
      xpressShip: true,
    },
    {
      id: 'air-jordan-1-retro-high-og-sp-union-la-chicago-shadow',
      href: '/air-jordan-1-retro-high-og-sp-union-la-chicago-shadow',
      title: 'Jordan 1 Retro High OG SP Union LA Chicago Shadow',
      imgSrc:
        'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-SP-Union-LA-Chicago-Shadow-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1740684367',
      category: 'sneakers',
      lowestAsk: 'CA$748',
      lastSale: '',
      xpressShip: true,
    },
  ];

  return (
    <section
      data-testid='HomeSection-PRODUCT_COLLECTION'
      id='section-product_collection-1'
      className='py-8 px-4 bg-black text-white'
    >
      <div
        data-component='ProductRow'
        data-collection-name='Recently Viewed'
        className='max-w-screen-xl mx-auto'
      >
        <div
          data-testid='dynamic-row-header'
          className='flex items-center justify-between mb-4'
        >
          <h2 className='text-xl font-bold text-white'>
            Recently Viewed
            <button
              type='button'
              className='inline-flex items-center ml-1 text-white'
              aria-label='Recently Viewed'
              id='info-tooltip'
              aria-haspopup='dialog'
              aria-expanded='false'
            >
              <InfoIcon />
            </button>
          </h2>
        </div>

        {/* Scrollable container */}
        <div className='relative'>
          {/* Shadow indicators for horizontal scroll */}
          <div className='absolute left-0 top-0 bottom-0 w-12  z-10 pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none'></div>

          {/* Scrollable product list */}
          <ul
            data-component='SmartGridRow'
            className='flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const InfoIcon = () => (
  <svg
    className='w-5 h-5'
    focusable='false'
    viewBox='0 0 50 50'
    aria-hidden='true'
  >
    <path
      d='M25 6C14.5 6 6 14.5 6 25C6 35.5 14.5 44 25 44C35.5 44 44 35.5 44 25C44 14.5 35.5 6 25 6ZM26.4 36.2H22V31.7H26.4V36.2ZM29 25C27 26.1 26.2 26.8 26.2 29V29.2H22.1V28.9C22.1 25.9 23.2 24.6 25.3 23.4C27.2 22.3 28.5 21.3 28.5 19.7C28.5 18.1 26.9 17.1 25.3 17.1C23.1 17.1 21.4 18.3 21.3 21.2H17.2C17.2 16.8 20.7 14 25.3 14C29 14 32.6 15.7 32.6 19.5C32.7 22.3 30.7 24 29 25Z'
      fill='currentColor'
    ></path>
  </svg>
);
