import React, { useState, useTransition } from 'react';
import { ACTIONS } from '../constants/actionTypes';

function SearchAndFilter({ dispatch, currentFilter }) {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
        },
        searchBox: { display: 'flex', alignItems: 'center', gap: '8px', flex: 1 },
        input: {
            width: '100%',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
        },
        loader: { fontSize: '12px', color: '#0284c7', fontWeight: 'bold' },
        filterGroup: { display: 'flex', gap: '6px' },
        filterBtn: {
            padding: '6px 12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
        },
    };

    const [searchValue, setSearchValue] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value); // High priority update (Keeps input snappy)

        startTransition(() => {
            // Low priority update (Defers heavy filtering operations)
            dispatch({ type: ACTIONS.SET_SEARCH, payload: { term: value } });
        });
    };

    const handleFilterChange = (filter) => {
        startTransition(() => {
            dispatch({ type: ACTIONS.SET_FILTER, payload: { filter } });
        });
    };

    return (
        <div style={styles.container}>
            <div style={styles.searchBox}>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Search tasks..."
                    style={styles.input}
                />
                {isPending && <span style={styles.loader}>Updating...</span>}
            </div>

            <div style={styles.filterGroup}>
                {['ALL', 'PENDING', 'COMPLETED'].map((f) => (
                    <button
                        key={f}
                        onClick={() => handleFilterChange(f)}
                        style={{
                            ...styles.filterBtn,
                            backgroundColor: currentFilter === f ? '#0284c7' : '#f1f5f9',
                            color: currentFilter === f ? '#ffffff' : '#334155',
                        }}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SearchAndFilter;