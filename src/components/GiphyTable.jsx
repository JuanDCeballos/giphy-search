import Giphy from './Giphy';

const GiphyTable = ({ data }) => {
  return (
    <>
      {data.length !== 0 ? (
        <div className='my-8 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2.5'>
          {data.map((gif) => (
            <Giphy key={gif.id} gif={gif} />
          ))}
        </div>
      ) : (
        <div className='text-center font-black text-5xl mb-5 py-9 text-white'>
          <span className='underline decoration-yellow-400'>Da</span>
          <span className='underline decoration-red-400'>ta</span>
          <span> </span>
          <span className='underline decoration-purple-400'>not</span>
          <span> </span>
          <span className='underline decoration-cyan-400'>fo</span>
          <span className='underline decoration-emerald-400'>und</span>
        </div>
      )}
    </>
  );
};

export default GiphyTable;
