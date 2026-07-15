import React from 'react'

function BookInfo() {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '9px' }
    };

    const BookTitles = [
        "Clean Code: A Handbook of Agile Software Craftsmanship",
        "Introduction to Algorithms",
        "Designing Data-Intensive Applications",
        "The Pragmatic Programmer",
        "Cracking the Coding Interview"
    ];
    const BookAuthors = [
        "Robert C. Martin",
        "Thomas H. Cormen",
        "Martin Kleppmann",
        "Andrew Hunt & David Thomas",
        "Gayle Laakmann McDowell"
    ];
    const BookPrices = ["₹4,386.53", "₹9,537.05", "₹4,053.65", "₹4,578.24", "₹3,810.43"];

    return (
        <>
            <h2>BookInfo:</h2>
            <div style={styles.container}>
                {BookTitles.map((name, index) => {
                    const bookauthor = BookAuthors[index];
                    const bookprice = BookPrices[index];

                    return (
                        <div key={index} style={styles.card}>
                            <div style={styles.subtitle}>
                                <div>Book Title: {name}</div>
                                <div>Book Author: {bookauthor}</div>
                                <div>Book Price: {bookprice}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default BookInfo;