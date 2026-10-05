// import React, { useState } from 'react';

// function SearchBar({ onSearch, onCurrentLocation }) {
//   const [query, setQuery] = useState('');

//   const containerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     maxWidth: '500px'
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '14px 20px',
//     borderRadius: '12px',
//     border: 'none',
//     backgroundColor: '#202b3b',
//     color: '#ffffff',
//     fontSize: '15px',
//     outline: 'none'
//   };

//   const btnStyle = {
//     padding: '14px 20px',
//     borderRadius: '12px',
//     border: 'none',
//     backgroundColor: '#0095ff',
//     color: '#ffffff',
//     cursor: 'pointer',
//     fontWeight: '600'
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && query.trim()) {
//       onSearch(query);
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <input
//         type="text"
//         placeholder="Search for cities, country or village..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={handleKeyDown}
//         style={inputStyle}
//       />
//       <button onClick={() => onSearch(query)} style={btnStyle}>Search</button>
//       <button onClick={onCurrentLocation} style={{ ...btnStyle, backgroundColor: '#202b3b' }} title="Use Current Location">
//         📍
//       </button>
//     </div>
//   );
// }

// export default SearchBar;

// import React, { useState, useEffect, useRef } from 'react';

// function SearchBar({ onSelectLocation, onCurrentLocation }) {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const dropdownRef = useRef(null);

//   // ૧. બહાર ક્લિક કરવાથી ડ્રોપડાઉન બંધ થઈ જાય
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // ૨. Debounce સર્ચ - ટાઈપ કરતી વખતે લાઈવ સજેશન મેળવવા માટે
//   useEffect(() => {
//     if (query.trim().length < 2) {
//       setSuggestions([]);
//       setIsOpen(false);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
//             query
//           )}&count=6&language=en&format=json`
//         );
//         const data = await res.json();
        
//         if (data.results) {
//           setSuggestions(data.results);
//           setIsOpen(true);
//         } else {
//           setSuggestions([]);
//           setIsOpen(false);
//         }
//       } catch (err) {
//         console.error("Geocoding Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }, 300); // ૩૦૦ms નો ડિલે (આનાથી બિનજરૂરી API કોલ બચશે)

//     return () => clearTimeout(timer);
//   }, [query]);

//   // ૩. સજેશન પર ક્લિક કરવાથી લોકેશન સિલેક્ટ થશે
//   const handleSelect = (item) => {
//     const formattedName = `${item.name}${item.admin1 ? `, ${item.admin1}` : ''}, ${item.country || ''}`;
//     setQuery(formattedName);
//     setIsOpen(false);
    
//     // પેરન્ટ કમ્પોનન્ટને સચોટ લેટીટ્યુડ અને લોન્ગીટ્યુડ મોકલવા
//     onSelectLocation({
//       name: formattedName,
//       lat: item.latitude,
//       lon: item.longitude
//     });
//   };

//   // Inline Styles
//   const wrapperStyle = {
//     position: 'relative',
//     maxWidth: '550px',
//     width: '100%',
//     zIndex: 1000
//   };

//   const searchBoxStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#202b3b',
//     borderRadius: '14px',
//     padding: '4px 8px 4px 16px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '12px 8px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     color: '#ffffff',
//     fontSize: '15px',
//     outline: 'none'
//   };

//   const iconBtnStyle = {
//     backgroundColor: '#0095ff',
//     border: 'none',
//     color: '#fff',
//     borderRadius: '10px',
//     padding: '10px 14px',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     fontWeight: '600',
//     fontSize: '14px'
//   };

//   const dropdownStyle = {
//     position: 'absolute',
//     top: 'calc(100% + 8px)',
//     left: 0,
//     right: 0,
//     backgroundColor: '#202b3b',
//     borderRadius: '14px',
//     overflow: 'hidden',
//     boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
//     border: '1px solid #2e3b4e',
//     maxHeight: '320px',
//     overflowY: 'auto'
//   };

//   const itemStyle = {
//     padding: '12px 16px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     cursor: 'pointer',
//     borderBottom: '1px solid #2a374a',
//     transition: 'background 0.2s'
//   };

//   return (
//     <div style={wrapperStyle} ref={dropdownRef}>
//       <div style={searchBoxStyle}>
//         <span style={{ fontSize: '18px', color: '#939b9f' }}>🔍</span>
//         <input
//           type="text"
//           placeholder="Search city, country or village..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onFocus={() => suggestions.length > 0 && setIsOpen(true)}
//           style={inputStyle}
//         />
//         {loading && <span style={{ color: '#939b9f', fontSize: '13px', marginRight: '8px' }}>Searching...</span>}
//         <button onClick={onCurrentLocation} style={iconBtnStyle} title="Use Current Location">
//           📍 <span style={{ display: 'inline' }}>Location</span>
//         </button>
//       </div>

//       {/* Auto-complete Suggestions Dropdown */}
//       {isOpen && suggestions.length > 0 && (
//         <div style={dropdownStyle}>
//           {suggestions.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleSelect(item)}
//               style={itemStyle}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2e3b4e')}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
//             >
//               <span style={{ fontSize: '18px' }}>📍</span>
//               <div style={{ display: 'flex', flexDirection: 'column' }}>
//                 <span style={{ color: '#ffffff', fontWeight: '600', fontSize: '14px' }}>
//                   {item.name}
//                 </span>
//                 <span style={{ color: '#939b9f', fontSize: '12px' }}>
//                   {[item.admin1, item.country].filter(Boolean).join(', ')}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;

import React, { useState, useEffect, useRef } from 'react';

function SearchBar({ onSearch, onCurrentLocation }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);

  // Fetch suggestions when query changes (with debouncing)
  useEffect(() => {
    const isCoordinates = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)[,\s]/.test(query.trim());
    
    if (query.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            query
          )}&count=6&language=en&format=json`
        );
        const data = await res.json();
        if (data.results) {
          setSuggestions(data.results);
          setIsOpen(true);
        } else {
          setSuggestions([]);
          setIsOpen(false);
        }
      } catch (error) {
        console.error("Geocoding fetch error:", error);
      }
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timer);
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    const displayName = `${item.name}${item.admin1 ? `, ${item.admin1}` : ''}${
      item.country ? `, ${item.country}` : ''
    }`;
    setQuery(displayName);
    setIsOpen(false);
    setSuggestions([]);
    onSearch(displayName);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleSelect(suggestions[selectedIndex]);
      } else if (query.trim()) {
        onSearch(query);
        setIsOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Inline Styles
  const wrapperStyle = {
    position: 'relative',
    maxWidth: '500px',
    width: '100%',
    zIndex: 100
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 20px',
    borderRadius: '12px',
    border: '1px solid #2e3b4e',
    backgroundColor: '#202b3b',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const btnStyle = {
    padding: '14px 20px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#0095ff',
    color: '#ffffff',
    cursor: 'pointer',
    fontWeight: '600',
    whiteSpace: 'nowrap'
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '8px',
    backgroundColor: '#1b2431',
    borderRadius: '14px',
    border: '1px solid #2e3b4e',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
    listStyle: 'none',
    padding: '8px 0',
    margin: '8px 0 0 0',
    maxHeight: '300px',
    overflowY: 'auto'
  };

  const itemStyle = (isHovered) => ({
    padding: '12px 20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: isHovered ? '#2c3a4e' : 'transparent',
    transition: 'background-color 0.15s ease'
  });

  return (
    <div style={wrapperStyle} ref={searchRef}>
      <div style={containerStyle}>
        <input
          type="text"
          placeholder="Search for cities, country or village..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          style={inputStyle}
        />
        <button onClick={() => onSearch(query)} style={btnStyle}>
          Search
        </button>
        <button
          onClick={onCurrentLocation}
          style={{ ...btnStyle, backgroundColor: '#202b3b' }}
          title="Use Current Location"
        >
          📍
        </button>
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul style={dropdownStyle}>
          {suggestions.map((item, index) => {
            const isHovered = index === selectedIndex;
            return (
              <li
                key={item.id || index}
                style={itemStyle(isHovered)}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div>
                  <span style={{ fontWeight: '600', color: '#fff' }}>
                    📍 {item.name}
                  </span>
                  <span style={{ fontSize: '13px', color: '#939b9f', marginLeft: '8px' }}>
                    {item.admin1 ? `${item.admin1}, ` : ''}
                    {item.country || ''}
                  </span>
                </div>
                {item.elevation && (
                  <span style={{ fontSize: '11px', color: '#636e72' }}>
                    {item.elevation}m
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;