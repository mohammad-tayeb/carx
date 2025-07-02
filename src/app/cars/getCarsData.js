import { headers } from 'next/headers';

const getCarsData = async (brand = 'allbrand', type = 'alltype', page = 1, limit = 6) => {
  const headersList = await headers();
  const params = new URLSearchParams();

  // It creates the query string /api/cars?brand=toyota&type=sedan&page=1&limit=6.
  if (brand !== 'allbrand') params.append('brand', brand);
  if (type !== 'alltype') params.append('type', type);
  params.append('page', page);
  params.append('limit', limit);
  // Calls this URL and fetches the data.
  const url = `http://localhost:3000/api/cars?${params.toString()}`;

  const res = await fetch(url, {
    headers: headersList,
    cache: 'no-store'
  });

  const data = await res.json();
  return data;
};

export default getCarsData;
