'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

export default function Filter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [activeBrand, setActiveBrand] = useState('allbrand');
    const [activeType, setActiveType] = useState('alltype');

    // ✅ Sync state with searchParams on mount and when they change
    useEffect(() => {
        const brandParam = searchParams.get('brand') || 'allbrand';
        const typeParam = searchParams.get('type') || 'alltype';
        setActiveBrand(brandParam);
        setActiveType(typeParam);
    }, [searchParams]);

    const updateQuery = (key, value) => {
        const params = new URLSearchParams(searchParams.toString()); // Copy current URL query parameters

        if (value === 'allbrand' || value === 'alltype') {
            params.delete(key); // Remove the query param if default value is selected
        } else {
            params.set(key, value); // Otherwise, update or add the new value
        }

        router.push(`/cars?${params.toString()}`); // Navigate to the new URL with updated query string
    };


    return (
        <>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 uppercase">{activeBrand}<FaAngleDown /></div>
                <ul tabIndex={0} className="dropdown-content menu z-1 w-52">
                    <li>
                        <button className={`btn ${activeBrand === 'allbrand' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'allbrand'); setActiveBrand('allbrand') }}>All Brands</button>
                    </li>
                    <li>
                        <button className={`btn ${activeBrand === 'toyota' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'toyota'); setActiveBrand('toyota') }}>Toyota</button>
                    </li>
                    <li>
                        <button className={`btn ${activeBrand === 'bmw' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'bmw'); setActiveBrand('bmw') }}>BMW</button>
                    </li>
                    <li>
                        <button className={`btn ${activeBrand === 'porsche' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'porsche'); setActiveBrand('porsche') }}>Porsche</button>
                    </li>
                    <li>
                        <button className={`btn ${activeBrand === 'mazda' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'mazda'); setActiveBrand('mazda') }}>Mazda</button>
                    </li>
                    <li>
                        <button className={`btn ${activeBrand === 'mclaren' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'mclaren'); setActiveBrand('mclaren') }}>McLaren</button>
                    </li>
                    <li>
                        <button className={`btn ${activeBrand === 'ford' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'ford'); setActiveBrand('ford') }}>Ford</button>
                    </li>
                    <li>
                        <button className={`btn ${activeBrand === 'maserati' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'maserati'); setActiveBrand('maserati') }}>Maserati</button>
                    </li>
                    <li>
                        <button className={`btn ${activeBrand === 'volkswagen' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('brand', 'volkswagen'); setActiveBrand('volkswagen') }}>volkswagen</button>
                    </li>
                </ul>
            </div>

            <div className="dropdown">
                <div tabIndex={1} role="button" className="btn m-1 uppercase">{activeType}<FaAngleDown /></div>
                <ul tabIndex={1} className="dropdown-content menu z-1 w-52">
                    <li>
                        <button className={`btn ${activeType === 'alltype' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'alltype'); setActiveType('alltype') }}>All Types</button>
                    </li>
                    <li>
                        <button className={`btn ${activeType === 'sedan' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'sedan'); setActiveType('sedan') }}>Sedan</button>
                    </li>
                    <li>
                        <button className={`btn ${activeType === 'wagon' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'wagon'); setActiveType('wagon') }}>Wagon</button>
                    </li>
                    <li>
                        <button className={`btn ${activeType === 'coupe' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'coupe'); setActiveType('coupe') }}>Coupe</button>
                    </li>
                    <li>
                        <button className={`btn ${activeType === 'suv' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'suv'); setActiveType('suv') }}>SUV</button>
                    </li>
                    <li>
                        <button className={`btn ${activeType === 'hatchback' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'hatchback'); setActiveType('hatchback') }}>Hatchback</button>
                    </li>
                    <li>
                        <button className={`btn ${activeType === 'midsize car' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'midsize car'); setActiveType('midsize car') }}>Midsize Car</button>
                    </li>
                    <li>
                        <button className={`btn ${activeType === 'compact car' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'compact car'); setActiveType('compact car') }}>Compact Car</button>
                    </li>
                    <li>
                        <button className={`btn ${activeType === 'convertible' ? 'bg-black text-white' : 'bg-white text-black border'}`} onClick={() => { updateQuery('type', 'convertible'); setActiveType('convertible') }}>Convertible</button>
                    </li>
                </ul>
            </div>
        </>

    );
}
