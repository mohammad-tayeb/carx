import HomeBanner from '../../../components/HomeBanner';
import CarsPageCards from '../../../components/CarsPageCards';
;
import getCarsData from './getCarsData';
import Filter from '../../../components/Filter';
import Pagination from '../../../components/Pagination';
import { Suspense } from 'react';

export default async function CarsPage({ searchParams }) {
  // getting filter and pagination information from url
  // It reads brand, type, and page from the URL query.
  // If any are missing, it falls back to default values (allbrand or alltype).
  const brand = searchParams?.brand || 'allbrand';
  const type = searchParams?.type || 'alltype';
  const page = parseInt(searchParams?.page) || 1;
  const limit = 6;

  //calls getCarsData with these parameters
  const { cars, total } = await getCarsData(brand, type, page, limit);
  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <div className="mx-10">
        <HomeBanner />
        <Suspense fallback={<div>Loading filters...</div>}>
          <Filter selectedBrand={brand} />
        </Suspense>
        <div className='my-10'><CarsPageCards cars={cars} /></div>
        <Suspense fallback={<div>Loading filters...</div>}>
          <Pagination currentPage={page} totalPages={totalPages} />
        </Suspense>
      </div>
    </div>
  );
}
