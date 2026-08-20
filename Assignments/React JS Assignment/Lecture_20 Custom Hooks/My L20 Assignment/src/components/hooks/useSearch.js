import { useState } from 'react';

function useSearch(initialValue = '') {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetSearch = () => setSearchTerm('');

  return { searchTerm, setSearchTerm, handleSearchChange, resetSearch };
}

export default useSearch;