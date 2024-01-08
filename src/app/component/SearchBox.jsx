// components/SearchBox.js
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// const Brand = [
//   { name: 'All Brands', value: 'all' },
//   { name: 'BMW', value: 'BMW' },
//   { name: 'AUDI', value: 'AUDI' },
//   { name: 'JAGUAR', value: 'JAGUAR' },
//   { name: 'SKODA', value: 'SKODA' },
//   { name: 'VOLVO', value: 'VOLVO' },
//   { name: 'MAHINDRA', value: 'MAHINDRA' },
// ];

const SearchBox = () => {
  const [query, setQuery] = useState('');
//   const [selectedBrand, setSelectedBrand] = useState('all');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to the search results page with the query parameter and brand filter
    router.push(`/search?q=${encodeURIComponent(query)}`);
    // &brand=
    // ${encodeURIComponent(selectedBrand)}
    

  };

  return (
    <form onSubmit={handleSearch} action="/search" method="GET">
      <input
        type="text"
        name='query'
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        {Brand.map((brand) => (
          <option key={brand.value} value={brand.value}>
            {brand.name}
          </option>
        ))}
      </select> */}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
