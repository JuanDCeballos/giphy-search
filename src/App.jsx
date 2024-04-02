import { createContext, useState } from 'react';
import SearchBar from './components/SearchBar';
import GiphyTable from './components/GiphyTable';

const DataContext = createContext(null);

const App = () => {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={data}>
      <div className='flex h-screen flex-col items-center justify-center bg-gray-700'>
        <main className='container max-w-5xl rounded-lg bg-gray-900 p-10 shadow-2xl'>
          <SearchBar setData={setData} />
          {data && <GiphyTable data={data} />}
        </main>
      </div>
    </DataContext.Provider>
  );
};

export default App;
