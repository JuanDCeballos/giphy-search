import { useEffect, useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (hasSearched) {
      setHasSearched((prevHasSearched) => !prevHasSearched);
    }
  }, [hasSearched]);

  const handleEnterKey = (e) => {
    if (e.key == 'Enter') {
      setHasSearched((prevHasSearched) => !prevHasSearched);
      console.log('User enter');
    }
  };

  return (
    <>
      <h1 className='text-center font-black text-4xl mb-5'>
        <span className='text-white'>Search for a </span>
        <span className='text-yellow-400'>G</span>
        <span className='text-red-400'>I</span>
        <span className='text-purple-400'>P</span>
        <span className='text-cyan-400'>H</span>
        <span className='text-emerald-400'>Y</span>
      </h1>
      <div className='flex'>
        <input
          className='shadow-lg grow h-16 focus:outline-none p-3 text-2xl'
          type='text'
          placeholder='Search a GIPHY'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleEnterKey}
        />
        <button
          className='flex justify-center items-center bg-rose-400 text-white w-16 h-16'
          onClick={() => setHasSearched((prevHasSearched) => !prevHasSearched)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='w-9 h-9'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
