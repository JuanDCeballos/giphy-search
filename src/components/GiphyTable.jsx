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
        <div>
          <h1 className='text-center font-black text-5xl mb-5 py-9'>
            data not found
          </h1>
        </div>
      )}
    </>
  );
};

export default GiphyTable;
