/* eslint-disable react/prop-types */

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex">
        <li>
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={`px-3 py-1 mr-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button onClick={() => onPageChange(i + 1)} className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-blue-500 hover:text-white'}`}>
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 ml-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
