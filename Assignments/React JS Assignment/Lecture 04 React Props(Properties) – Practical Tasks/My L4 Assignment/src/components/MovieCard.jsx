import React from 'react'

function MovieCard(props) {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        imageWrapper: { width: '100%', height: '160px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' },
        image: { maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '9px' }
    };

    return (
        <>
            <h2>Movie Card:</h2>
            <div style={styles.container}>
                {props.names.map((name, index) => {
                    const moviecover = props.moviecovers[index];
                    const movierating = props.movieratings[index];
                    const movierelease = props.moviereleases[index];

                    return (
                        <div key={index} style={styles.card}>
                            <div style={styles.subtitle}>
                                <div style={styles.imageWrapper}>
                                    <img src={moviecover} alt={name} style={styles.image} />
                                </div>
                                <div>Movie Title: {name}</div>
                                <div>Movie Rating: {movierating}</div>
                                <div>Movie Release: {movierelease}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default MovieCard