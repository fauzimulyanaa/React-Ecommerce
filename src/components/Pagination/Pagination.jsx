/* eslint-disable react/prop-types */

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) {
    // Jika hanya ada satu halaman, tidak perlu menampilkan pagination
    return null;
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="pagination flex items-center">
        {currentPage > 1 && (
          <li>
            <button className="px-4 py-2 text-white bg-blue-500" onClick={() => paginate(currentPage - 1)}>
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'active bg-blue-500' : 'hover:bg-blue-300'}>
            <button className="px-4 py-2 text-white" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li>
            <button className="px-4 py-2 text-white bg-blue-500" onClick={() => paginate(currentPage + 1)}>
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
