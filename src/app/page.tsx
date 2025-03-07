import BannerCarousel from '@/components/BannerCarousel';
import ProductCollection from '@/components/ProductCollection';

export default function Home() {
  return (
    <main className='bg-black'>
      <div className='mb-8'>
        <BannerCarousel />
      </div>

      <ProductCollection />
    </main>
  );
}
