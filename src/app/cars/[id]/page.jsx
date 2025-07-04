import Image from "next/image";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import BuyRent from "../../../../components/BuyRent";


export default async function page({ params }) {
    const p = await params;
    const carCollection = dbConnect(collectionNameObj.carCollection);
    const data = await carCollection.findOne({ _id: p.id });

    if (!data) {
        return (
            <div className="text-center mt-20 text-xl text-red-500">
                Car not found.
            </div>
        );
    }

    return (
        <>
            <section className="flex mb-20 flex-col md:flex-row items-center justify-between rounded-2xl p-8 md:p-16 shadow-lg relative pb-32">
                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h3 className="text-gray-600 text-lg font-semibold">{data.year}</h3>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight uppercase">
                        {data.make} {data.model}
                    </h1>

                    <p className="text-gray-600 mt-4 text-md">Drive: <span className="font-semibold">{data.drive}</span></p>
                    <p className="text-gray-600 mt-1 text-md">Fuel Type: <span className="font-semibold">{data.fuel_type}</span></p>
                    <p className="text-gray-600 mt-1 text-md">Transmission: <span className="font-semibold uppercase">{data.transmission}</span></p>
                    <p className="text-gray-600 mt-1 text-md">Displacement: <span className="font-semibold">{data.displacement}L</span></p>
                    <p className="text-gray-600 mt-1 text-md">Cylinders: <span className="font-semibold">{data.cylinders}</span></p>
                    <p className="text-gray-600 mt-1 text-md">MPG (City / Hwy / Combined): <span className="font-semibold">{data.city_mpg} / {data.highway_mpg} / {data.combination_mpg}</span></p>
                    <p className="text-gray-600 mt-1 text-md text-red-500">Price: <span className="font-semibold">$20000</span></p>

                    <a href="#options" className="mt-6 bg-[#41bce8] md:justify-start w-[200px] justify-center text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto md:mx-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                        </svg>
                        Shop options
                    </a>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2">
                    <Image
                        src={data.image}
                        alt={`${data.make} ${data.model}`}
                        width={600}
                        height={400}
                        className="mx-auto rounded-xl"
                    />
                </div>

                {/* Bottom Ratings */}
                <div className="absolute md:-bottom-14 -bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-sky-100 shadow-lg md:rounded-full rounded-3xl flex flex-col md:flex-row justify-around items-center gap-4 px-6 py-4">
                    <div className="text-center">
                        <p className="font-semibold text-gray-800">Consumer rating</p>
                        <p className="text-md text-gray-500">Owner reviewed vehicle score</p>
                        <p className="text-xs text-gray-400 mt-1">Not rated</p>
                    </div>
                    <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
                    <div className="text-center">
                        <p className="font-semibold text-gray-800">Safety rating</p>
                        <p className="text-md text-gray-500">NHTSA tested vehicle score</p>
                        <p className="text-xs text-gray-400 mt-1">Not rated</p>
                    </div>
                </div>
            </section>

            <BuyRent data={data}></BuyRent>
        </>
    );
}
