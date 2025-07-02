import { headers } from 'next/headers';

const getCarDataSwap = async () => {
    const headersList = await headers();
    const url = `http://localhost:3000/api/carSwap`;
    const res = await fetch(url, {
        headers: headersList,
        cache: 'no-store'
    });

    const data = await res.json();
    return data;
};

export default getCarDataSwap;
