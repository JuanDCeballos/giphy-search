const Giphy = ({ gif }) => {
  return (
    <>
      <img
        src={gif.images.original.url}
        alt={gif.title}
        className='rounded-lg'
      />
    </>
  );
};

export default Giphy;
