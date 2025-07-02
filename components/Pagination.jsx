'use client'
import { useRouter, useSearchParams } from 'next/navigation';

export default function Pagination({ currentPage, totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page) => {
    const params = new URLSearchParams(searchParams.toString()); // Copy current URL search parameters
    params.set('page', page); // Update the 'page' parameter to the new page number
    router.push(`/cars?${params.toString()}`); // Navigate to the new URL with updated query
  };

  // Generates page numbers with ellipsis if needed
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 4) pages.push('...');

      const start = Math.max(2, currentPage - 2);
      const end = Math.min(totalPages - 1, currentPage + 2);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push('...');

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      {/* previous button */}
      <button
        className="btn"
        disabled={currentPage <= 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Prev
      </button>

      {/* rendering page "button" or ""..."" */}
      {getPageNumbers().map((page, index) =>
        page === '...' ? (
          <span key={index} className="px-2">...</span>
        ) : (
          <button
            key={index}
            className={`btn px-3 ${currentPage === page ? 'bg-black text-white' : ''}`}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        )
      )}

      {/* next page button */}
      <button
        className="btn"
        disabled={currentPage >= totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
