import { ProductCard } from './ProductCard';

type Product = {
  category: string;
  href: string;
  title: string;
  imgSrc: string;
  lowestAsk: string;
  xpressShip: boolean;
  lastSale: string;
  id: string;
};
interface ProductCollectionProps {
  products: Product[];
  title?: string;
  className?: string;
}

export default function ProductCollection({
  products,
  title,
  className = '',
}: ProductCollectionProps) {
  return (
    <section
      data-testid='HomeSection-PRODUCT_COLLECTION'
      id='section-product_collection-1'
      className={` px-4 bg-white text-black ${className}`}
    >
      <div
        data-component='ProductRow'
        data-collection-name={title}
        className='max-w-screen-xl mx-auto'
      >
        <div
          data-testid='dynamic-row-header'
          className='flex items-center justify-between mb-4'
        >
          <h2 className='text-xl font-bold text-black'>
            {title}
            <button
              type='button'
              className='inline-flex items-center ml-1 text-black'
              aria-label={title}
              id='info-tooltip'
              aria-haspopup='dialog'
              aria-expanded='false'
            >
              <InfoIcon />
            </button>
          </h2>
        </div>

        <div className='relative'>
          <div className='absolute left-0 top-0 bottom-0 w-12  z-10 pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none'></div>

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
