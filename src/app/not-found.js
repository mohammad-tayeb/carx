import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-extrabold text-gray-300 animate-bounce">
          404
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
          Page Not Found
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-[#41bce8] text-white font-medium rounded-lg hover:bg-[#41bbe8ed] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
