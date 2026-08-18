import React from 'react';

const styles = {
    container: {
        minWidth: '180px',
    },
    select: {
        width: '100%',
        padding: '0.625rem 1rem',
        borderRadius: '0.375rem',
        border: '1px solid #cbd5e1',
        fontSize: '0.875rem',
        backgroundColor: '#ffffff',
        outline: 'none',
        boxSizing: 'border-box',
    },
};

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    return (
        <div style={styles.container}>
            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                style={styles.select}
            >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;