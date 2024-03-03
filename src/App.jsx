import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className='bg-gray-700 flex flex-col justify-center items-center h-screen'>
      <main className='bg-gray-900 container max-w-5xl shadow-2xl rounded-lg p-10'>
        <SearchBar />
      </main>
    </div>
  );
};

export default App;
