import BannerCarousel from '@/components/BannerCarousel';
import ProductCollection from '@/components/ProductCollection';

export default function Home() {
  const recentlyViewedProducts = [
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

  const trendingProducts = [
    {
      id: 'nike-dunk-low-retro-white-black-panda',
      href: '/nike-dunk-low-retro-white-black-panda',
      title: 'Nike Dunk Low Retro White Black Panda',
      imgSrc:
        'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1644250527',
      category: 'sneakers',
      lowestAsk: 'CA$155',
      lastSale: 'CA$149',
      xpressShip: true,
    },

    {
      id: 'air-jordan-4-retro-military-black',
      href: '/air-jordan-4-retro-military-black',
      title: 'Air Jordan 4 Retro Military Black',
      imgSrc:
        'https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1656600270',
      category: 'sneakers',
      lowestAsk: 'CA$475',
      lastSale: 'CA$455',
      xpressShip: true,
    },
    {
      id: 'new-balance-550-white-green',
      href: '/new-balance-550-white-green',
      title: 'New Balance 550 White Green',
      imgSrc:
        'https://images.stockx.com/images/New-Balance-550-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1634919726',
      category: 'sneakers',
      lowestAsk: 'CA$160',
      lastSale: 'CA$152',
      xpressShip: true,
    },
  ];

  const popularCollectibles = [
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
      id: 'nike-dunk-low-retro-white-black-panda',
      href: '/nike-dunk-low-retro-white-black-panda',
      title: 'Nike Dunk Low Retro White Black Panda',
      imgSrc:
        'https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1644250527',
      category: 'sneakers',
      lowestAsk: 'CA$155',
      lastSale: 'CA$149',
      xpressShip: true,
    },

    {
      id: 'air-jordan-4-retro-military-black',
      href: '/air-jordan-4-retro-military-black',
      title: 'Air Jordan 4 Retro Military Black',
      imgSrc:
        'https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1656600270',
      category: 'sneakers',
      lowestAsk: 'CA$475',
      lastSale: 'CA$455',
      xpressShip: true,
    },
  ];

  return (
    <main className='bg-white'>
      <div className=''>
        <BannerCarousel />
      </div>

      <ProductCollection
        className='mt-4'
        products={recentlyViewedProducts}
        title='Recently Viewed'
      />

      <ProductCollection products={trendingProducts} title='Trending Now' />

      <ProductCollection
        products={popularCollectibles}
        title='Popular Collectibles'
      />
    </main>
  );
}
