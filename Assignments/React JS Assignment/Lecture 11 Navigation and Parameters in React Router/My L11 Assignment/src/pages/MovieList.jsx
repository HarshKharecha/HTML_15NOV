import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const navigate = useNavigate();
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '24px',
      padding: '20px 0',
      alignItems: 'stretch'
    },
    card: (isSelected) => ({
      backgroundColor: '#ffffff',
      border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: isSelected ? '0 10px 15px -3px rgba(37, 99, 235, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.2s ease-in-out',
      transform: isSelected ? 'translateY(-4px)' : 'none'
    }),
    imageWrapper: {
      width: '100%',
      height: '240px',
      backgroundColor: '#f1f5f9',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginBottom: '15px'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: '0 0 6px 0',
      lineHeight: '1.4'
    },
    metadataGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontSize: '0.9rem',
      color: '#64748b',
      marginBottom: '16px'
    },
    tag: {
      display: 'inline-block',
      fontWeight: '500',
      color: '#475569'
    },
    rating: {
      fontWeight: '700',
      color: '#eab308' // Amber color for ratings
    },
    button: (isSelected) => ({
      width: '100%',
      padding: '10px 16px',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      fontSize: '0.95rem',
      cursor: 'pointer',
      backgroundColor: isSelected ? '#1e293b' : '#2563eb',
      color: '#ffffff',
      transition: 'background-color 0.2s ease',
      marginTop: 'auto'
    }),
    message: {
      marginTop: '12px',
      padding: '8px',
      backgroundColor: '#eff6ff',
      borderLeft: '4px solid #2563eb',
      borderRadius: '4px',
      fontSize: '0.85rem',
      color: '#1e40af',
      fontWeight: '500'
    }
  };

  const movies = [
    { id: "M1", title: "Brahmāstra: Part One – Shiva", rating: "5.6/10", release: "2022", genre: "Fantasy/Action", cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbWFCO8DaHmcMWmkZsuFNPKA8n_NoyF_vuG5RU3F7mtBoIjg_u" },
    { id: "M2", title: "Mirai", rating: "6.9/10", release: "2025", genre: "Anime/Fantasy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JG82A7pETgIoqMpdEXq0wALbCESn5P-qbjgK-AI-mA&s" },
    { id: "M3", title: "HanuMan", rating: "7.7/10", release: "2024", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0jzVzbJ63sMtMyJu3DMKtvoJXQcRK7ALkejEaSiQ8fJHxaOxFPtGwvCWn6WbV695BjC0&s=10" },
    { id: "M4", title: "Akhanda", rating: "6.7/10", release: "2021", genre: "Action/Drama", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgecNBugBnUYsDHUodoyFt9A86YscnT6DJYMwmzS-HBw&s=10" },
    { id: "M5", title: "Akhanda 2: Thaandavam", rating: "5.4/10", release: "2025", genre: "Action/Drama", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzz3iZWT7tWKlHW0NdMFLLULWNqgfnRw1Jvyl8Aqr4MlTOIGBGCi9cogllRZfh--CEIBg2Q&s=10" },
    { id: "M6", title: "Transformers", rating: "7.1/10", release: "2007", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrr0R1JOEiV-sdjkcuQAME5FoR-8QJjcNtkzabh6a1C6o8bRQk4IbN8GeYfkIZCGg8f_Lu&s=10" },
    { id: "M7", title: "Transformers: Revenge of the Fallen", rating: "6.0/10", release: "2009", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpsHnP_FcwrGD7Za8Keg6uhpAt8ZsEO3H5h60Zq-1c0iZXa6MTjq-ZIxu18ddRVP23efR&s=10" },
    { id: "M8", title: "Transformers: Dark of the Moon", rating: "6.2/10", release: "2011", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt63ZL-Od7FEshFDZ6I2bRrmx6hePZLYT63OdQIqpyXZn-GZTd6qFl81rqALVoJyJcsRNZ7A&s=10" },
    { id: "M9", title: "Transformers: Age of Extinction", rating: "5.6/10", release: "2014", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RP4vkCjcSvZcLm9zOYDG1GNFxlMywvVtDOjuR19TkrPVmD1e0iaxG79kLhvzr3PEIohU&s=10" },
    { id: "M10", title: "Transformers: The Last Knight", rating: "5.2/10", release: "2017", genre: "Action/Sci-Fi", cover: "https://m.media-amazon.com/images/M/MV5BYWNlNjU3ZTItYTY3Mi00YTU1LTk4NjQtYjQ3MjFiNjcyODliXkEyXkFqcGc@._V1_.jpg" },
    { id: "M11", title: "Bumblebee", rating: "6.7/10", release: "2018", genre: "Action/Sci-Fi", cover: "https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_.jpg" },
    { id: "M12", title: "Transformers: Rise of the Beasts", rating: "6.0/10", release: "2023", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsFNeH_1HnJrtVLrbLdsdamTUTZwn7Kj9YBsSWiUHR4shBKafAY89uQwV_A0Z3Chj_ahPIA&s=10" },
    { id: "M13", title: "Red Notice", rating: "6.3/10", release: "2021", genre: "Action/Comedy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LEv9JBuVJIn8V48XwlDijL0eqhojWgz7ZuYmHsuGwnAmNn0rjO9gc0wa3zxYXY4BVBT&s=10" },
    { id: "M14", title: "Journey 2: The Mysterious Island", rating: "5.7/10", release: "2012", genre: "Adventure/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKIoi4iI-VoYDlklDRCyZ9Uy2FTtZvXYZQPx7FUOrUcv0oZnB2rh_NZFoafB9X8ATax94&s=10" },
    { id: "M15", title: "Jurassic Park", rating: "8.2/10", release: "1993", genre: "Sci-Fi/Adventure", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbUq4fS8Sdfw5cqG76O2fO4zfZoX-oX7CoBoDjnL8uQ&s=10" },
    { id: "M16", title: "The Lost World: Jurassic Park", rating: "6.6/10", release: "1997", genre: "Sci-Fi/Adventure", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcUAd-WXG2PutJ0Ver4o6oRB_HnSFbVR7xnWFLh_YYcj5FAwKKOcQemRDQ8Uu8FOwrfxH&s=10" },
    { id: "M17", title: "Jurassic Park III", rating: "6.0/10", release: "2001", genre: "Sci-Fi/Adventure", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Jurassic_Park_III_poster.jpg/250px-Jurassic_Park_III_poster.jpg" },
    { id: "M18", title: "Jurassic World", rating: "6.9/10", release: "2015", genre: "Sci-Fi/Adventure", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMy8E7eNMT-AVlhrLc3N8zaE7zE7EyKAjKabHZAf2e6ZMl8M-" },
    { id: "M19", title: "Jurassic World: Fallen Kingdom", rating: "6.2/10", release: "2018", genre: "Sci-Fi/Adventure", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jurassic_World_Fallen_Kingdom.png/250px-Jurassic_World_Fallen_Kingdom.png" },
    { id: "M20", title: "Jurassic World Dominion", rating: "5.6/10", release: "2022", genre: "Sci-Fi/Adventure", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdKAnzhHmikcKg1WtYXflBUiDIgZNuG_ek8qrz2-Re70P03tjmcQjpvroHT9A7AzCgP3kvw&s=10" },
    { id: "M21", title: "Godzilla (2014)", rating: "6.4/10", release: "2014", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnv3BvcGBRrKfdVzWwAt9Y1aQC012prpP794GV7O2Z_rpufciLLorsS9tFqwwqaqTDeW6z&s=10" },
    { id: "M22", title: "Godzilla: King of the Monsters", rating: "6.0/10", release: "2019", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrjE28d84wBvG4rRRlnnufhsYMKZ5-hR5aXJiebHd6xvZq0qysdIHsTCF0CXpzXS7iCZL9g&s=10" },
    { id: "M23", title: "Godzilla vs. Kong", rating: "6.3/10", release: "2021", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpINwjw7_KTSiU-YZF-FTOZLrlpp01ckOE36SyNXYm9jtzeaz386xmPl5xXOcBRBcFhlvQww&s=10" },
    { id: "M24", title: "Godzilla x Kong: The New Empire", rating: "6.0/10", release: "2024", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZikAY7saYYBj8GKuwQkyXJPPXbzRRXNNCquOvlq9YHnTuj0jFjQGkRDNxupO-EECXDuds&s=10" },
    { id: "M25", title: "Rampage", rating: "6.1/10", release: "2018", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOImtBcGyKXTobzlmmTv4m6ManP-WqPK2fVmTxp6g9q50v0WuMtI5fhlPjBFibcO7F0vbag&s=10" },
    { id: "M26", title: "Max Steel", rating: "4.6/10", release: "2016", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76o0n0GuG8xyjyo0xzQxJrrDATh-m-2y5vt3cwqkY-6q3_efbTCjVidES5sXSFtklNmks1Q&s=10" },
    { id: "M27", title: "Ready Player One", rating: "7.4/10", release: "2018", genre: "Sci-Fi/Action", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnl1wJKbUhfsAyqyDKcUOr5MqdPENcntOU9LrX6sTEelsTEoM8ZhUjxagQdX2GJhrLGsyO&s=10" },
    { id: "M28", title: "The Avengers", rating: "8.0/10", release: "2012", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluFl3GfQDXohBaH-xG3GuRi8T4MDIQPRpCqUGLiE5tXdXbUO0hRFwnshvzg07igEgGg7i&s=10" },
    { id: "M29", title: "Avengers: Age of Ultron", rating: "7.3/10", release: "2015", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HI3nlN9yhLTTOn8qXJzXK6sLnW5PrLKXohQO6UY27lz7IYLQsR70-yrN8XZe1LfyVo1X&s=10" },
    { id: "M30", title: "Avengers: Infinity War", rating: "8.4/10", release: "2018", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2_cEexTdYFaQJFUwRZrG4IrM1510eWIkeQhwqq2GbNhxDJZUml6g1Ft9iKyuHJhG15wGUQ&s=10" },
    { id: "M31", title: "Avengers: Endgame", rating: "8.4/10", release: "2019", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXEwQlva93WuBdWDK6LlOSf4f96CB5OxToqcdkHiWBnn2p5WOjaOGKo_t6i9F-gQ2tYUp&s=10" },
    { id: "M32", title: "Justice League", rating: "6.0/10", release: "2017", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ74wqlSvCpYYt9KvSX0xtGhwEnl6n0NUkq-ZujjL6YeAnv3J2" },
    { id: "M33", title: "Zack Snyder's Justice League", rating: "7.9/10", release: "2021", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX56eHp0d0WdvFlrpJJuxhP8A3pYgCSnyUp0AKuwcNGAYtioKcAz4WgkpChsaEDr6fWQa8&s=10" },
    { id: "M34", title: "G.I. Joe: The Rise of Cobra", rating: "5.7/10", release: "2009", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcurhCN8SevrjvahSX8bMuMgx5BgQAnJqYV-xRpsReXmO7txAZqYK2SKQszbjRhbKwEhtY7A&s=10" },
    { id: "M35", title: "G.I. Joe: Retaliation", rating: "5.7/10", release: "2013", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKukifSJtNSl7K3rpk171Rfkkm5WH_QzV0HjMilDmyVNlA4mZpEG-6Tdvp2r2xV9Kol3GMA&s=10" },
    { id: "M36", title: "Snake Eyes: G.I. Joe Origins", rating: "5.4/10", release: "2021", genre: "Action/Adventure", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c8f_8fq2NsxY5vdaCScZWUHqE7bypvP4IasyZDYGEHq87HZqNglNZuVE6weBKiUS9fdWww&s=10" },
    { id: "M37", title: "Guardians (The Superheroes)", rating: "4.1/10", release: "2017", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8KOKahkFQQxsd0c0amIiOx5aqmbD_ZhWywL1X_7s5YRmjEE-pbLIz0l47mDzFmte2rHtDQ&s=10" },
    { id: "M38", title: "Fantastic Four 2005", rating: "5.7/10", release: "2005", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRGXP2N9X5mKJquo3Wojn9UZQAXrWdiMVp7CHx6fI29nCf8TJoozyesfyfSNI8AvQK7P3xw&s=10" },
    { id: "M39", title: "Fantastic Four: Rise of the Silver Surfer", rating: "5.6/10", release: "2007", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynd0OwRk9-1-iby-JA2wG-6g_2xqepEJyt-4dUOzLRexZaOWFxSKR4_G78voZqGqoAAUg&s=10" },
    { id: "M40", title: "Fantastic Four 2015", rating: "4.3/10", release: "2015", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08-C9fQfhBW1utTh6DluttA0rbRZN9M5i4eTGRe6SsY5xITzIH0dFVgDVL8byo9an1hZe&s=10" },
    { id: "M41", title: "Fantastic Four 2025", rating: "6.8/10", release: "2025", genre: "Action/Sci-Fi", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJBESuOsvi8aWujZZXsZwlvl2D-h_6LA9NCDzQ82PJqmAZLPoOxS2rmIJ0RLJXAxQjricGw&s=10" },
    { id: "M42", title: "Bhool Bhulaiyaa", rating: "7.5/10", release: "2007", genre: "Comedy/Horror", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_r27s0zQjkOvSyFF5EuRExFe1JERij1M3wL0U47Q5FsKXTBWWOvkVzbH20WdYByU0s77_&s=10" },
    { id: "M43", title: "Bhool Bhulaiyaa 2", rating: "5.7/10", release: "2022", genre: "Comedy/Horror", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJ-c951gb7t1ThjEiUbZC7HZbQ2V9ySIXJcyXtVGyWkyXiH5dnC2qeE6dfVi_FtZNet7U&s=10" },
    { id: "M44", title: "Bhool Bhulaiyaa 3", rating: "4.6/10", release: "2024", genre: "Comedy/Horror", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Bhool_Bhulaiyaa_3_poster.jpg/250px-Bhool_Bhulaiyaa_3_poster.jpg" },
    { id: "M45", title: "Bhooth Bangla", rating: "5.1/10", release: "2026", genre: "Comedy/Horror", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJ27Dyyj3kXoEBHl10PG_yN9_d1qfXFu1DvWnoV21_WJVOg8XAinBlTl1XiHOKSGXUX75Rg&s=10" },
    { id: "M46", title: "Ghostbusters (1984)", rating: "7.8/10", release: "1984", genre: "Comedy/Fantasy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJgraTLy_DNaAK7W5igfsSndlVncUhd9a2puYEfmawQ&s=10" },
    { id: "M47", title: "Ghostbusters II", rating: "6.6/10", release: "1989", genre: "Comedy/Fantasy", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Ghostbusters_ii_poster.jpg/250px-Ghostbusters_ii_poster.jpg" },
    { id: "M48", title: "Ghostbusters (2016)", rating: "6.8/10", release: "2016", genre: "Comedy/Fantasy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9S0oOCK8fYzqbzAqSXWQZzQvzRwzr2ImrO8VSYbOdH9lWp506QDth71qXK4utvO2Ps7wW&s=10" },
    { id: "M49", title: "Ghostbusters: Afterlife", rating: "7.0/10", release: "2021", genre: "Comedy/Fantasy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLzbVR0t0_zlaDWkKtQccWFGq3uNe_R-BOPsRqa94gPGSVQTby91jQpbj7uc6Jay0Ig_1LQ&s=10" },
    { id: "M50", title: "Ghostbusters: Frozen Empire", rating: "6.1/10", release: "2024", genre: "Comedy/Fantasy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzU2qFw-aqy6nrvtrjbGgxdB6pd7oiGX0yRmxueJiBQLRo55pTvkhWpuvX3Q4ah93gsv5&s=10" },
    { id: "M51", title: "Mission: Impossible", rating: "7.2/10", release: "1996", genre: "Action/Thriller", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/MissionImpossiblePoster.jpg/250px-MissionImpossiblePoster.jpg" },
    { id: "M52", title: "Mission: Impossible 2", rating: "6.1/10", release: "2000", genre: "Action/Thriller", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Mission_Impossible_II.jpg/250px-Mission_Impossible_II.jpg" },
    { id: "M53", title: "Mission: Impossible III", rating: "6.9/10", release: "2006", genre: "Action/Thriller", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Mission_Impossible_III.jpg/250px-Mission_Impossible_III.jpg" },
    { id: "M54", title: "Mission: Impossible – Ghost Protocol", rating: "7.4/10", release: "2011", genre: "Action/Thriller", cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Mission_impossible_ghost_protocol.jpg" },
    { id: "M55", title: "Mission: Impossible – Rogue Nation", rating: "7.4/10", release: "2015", genre: "Action/Thriller", cover: "https://upload.wikimedia.org/wikipedia/en/f/fb/Mission_Impossible_Rogue_Nation_poster.jpg" },
    { id: "M56", title: "Mission: Impossible – Fallout", rating: "7.7/10", release: "2018", genre: "Action/Thriller", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/MI_%E2%80%93_Fallout.jpg/250px-MI_%E2%80%93_Fallout.jpg" },
    { id: "M57", title: "Mission: Impossible – Dead Reckoning Part One", rating: "7.6/10", release: "2023", genre: "Action/Thriller", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34_otMSvSpe1Nn8Iip4kpkcaAHrUGaIITwQYC9iRIL4q34rHhTY2cTYrbRe303iD5fdsm&s=10" },
    { id: "M58", title: "Mission: Impossible – The Final Reckoning", rating: "7.1/10", release: "2025", genre: "Action/Thriller", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg/250px-Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg" },
    { id: "M59", title: "Kingsman: The Secret Service", rating: "7.7/10", release: "2014", genre: "Action/Comedy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmHtj8QQ8hl1Z4wN_G9KdypGeG5fk2idqDJ8CHybZ76AZlhC4BTLgItg9g5DkbWX21iaz0A&s=10" },
    { id: "M60", title: "Kingsman: The Golden Circle", rating: "6.7/10", release: "2017", genre: "Action/Comedy", cover: "https://upload.wikimedia.org/wikipedia/en/f/fb/Kingsman_The_Golden_Circle.png" },
    { id: "M61", title: "The King's Man", rating: "6.3/10", release: "2021", genre: "Action/Adventure", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSma8DXIKxDFHwX5tV8yYvXT3eVpkP-HcoQKMs-6pOaAr7JBoHeX2WkAepQS0oQkrcx_Iml&s=10" },
    { id: "M62", title: "Bhoot: Part One – The Haunted Ship", rating: "5.4/10", release: "2020", genre: "Horror/Thriller", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSM4QgsMFdKJ-aeYCrKHd72HMPJbhS-ohWhoC81D2n94K0wz-0P-02PRKFfQIn7TLJ5CEww&s=10" },
    { id: "M63", title: "Housefull", rating: "5.7/10", release: "2010", genre: "Comedy/Romance", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1aU4CA-VcEDFkj8LsYSmRlylyaai1J4KnspYRnPSZproRBeJPzF4DHZ_vDm-G6AE3k2TSA&s=10" },
    { id: "M64", title: "Housefull 2", rating: "5.5/10", release: "2012", genre: "Comedy/Romance", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS154TBc2ctExwyf4P8fR_PZYT1n-_uIXGZH8IDrKGaDyy9bmtIX9YWwe0zWIwkRv4xxkxnFA&s=10" },
    { id: "M65", title: "Housefull 3", rating: "5.0/10", release: "2016", genre: "Comedy/Romance", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJNF-JWiDbBWGli_mbYDnLY_2tKXfPq-PiZkoWkSlyOpTGz9m7FHHl8I1R-lzMbmnLh_iaw&s=10" },
    { id: "M66", title: "Housefull 4", rating: "3.7/10", release: "2019", genre: "Comedy/Fantasy", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Housefull_4_poster.jpg/250px-Housefull_4_poster.jpg" },
    { id: "M67", title: "Housefull 5", rating: "3.3/10", release: "2025", genre: "Comedy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD2ZI0iKOuNmz8OdtqNDPWtbLUEwyHSKHiWpGb33sbm7qBed54y-Y8vcLsHOB__EhzZfO&s=10" },
    { id: "M68", title: "Geetha Govindam", rating: "7.7/10", release: "2018", genre: "Romance/Comedy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1w2Vpgn25T79j8Vb4bikIrafpOvgf2SgFhqEKTQT0ebBEtWxNiUATuZFrNKNMS49J7nJ&s=10" },
    { id: "M69", title: "Thamma", rating: "5.8/10", release: "2025", genre: "Drama/Comedy", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Thamma_film_poster.jpg/250px-Thamma_film_poster.jpg" },
    { id: "M70", title: "The Chronicles of Narnia: The Voyage of the Dawn Treader", rating: "6.3/10", release: "2010", genre: "Fantasy/Adventure", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEz_SIRmW4cy3u5nBNIb80rPxcIm47X5lHL1vc_Kol_1fYhJEiZebZ-DFdaRBCyIHGcEfB&s=10" },
    { id: "M71", title: "Dolittle", rating: "5.6/10", release: "2020", genre: "Adventure/Fantasy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7y6WuIbMmlQmWc2cCkpKd6NWS7tcTvYHwQX4QkvciZGa1mcdnbhc763DZ3ywMfuN_MTvC&s=10" },
    { id: "M72", title: "Masti", rating: "6.2/10", release: "2004", genre: "Comedy/Crime", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Moviepostermasti.jpg/250px-Moviepostermasti.jpg" },
    { id: "M73", title: "Grand Masti", rating: "4.5/10", release: "2013", genre: "Comedy", cover: "https://i.ytimg.com/vi/tbgS2T_0CE0/maxresdefault.jpg" },
    { id: "M74", title: "Great Grand Masti", rating: "3.7/10", release: "2016", genre: "Comedy/Horror", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Great_Grand_Masti_poster.jpg/250px-Great_Grand_Masti_poster.jpg" },
    { id: "M75", title: "Karate Kid: Legends", rating: "6.3/10", release: "2025", genre: "Action/Drama", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlLGrRC2kc8Xvbu9C__ajlPTB-K-rh4RlaDwEYyDcy8ZkvfqO2-azbg2NqojSuf4ZRCUi&s=10" },
    { id: "M76", title: "Kung Fu Yoga", rating: "5.2/10", release: "2017", genre: "Action/Comedy", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppSt95q3gUmDQF4vXhUxWQHA00Urbjopv4wjjyLTOmkQtxbS8ix5zOoJ8Vmu3l9oJrJc3&s=10" }
  ];

  const [selectedMovieId, setSelectedMovieId] = useState(null);

  return (
    <div style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
            <h2 style={{ color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.5rem' }}>
                Movie List
            </h2>

            <div style={styles.container}>
                {movies.map((movie) => {
                    const isSelected = selectedMovieId === movie.id;
                    return (
                        <div key={movie.id} style={styles.card(isSelected)}>
                            <div>
                                <div style={styles.imageWrapper}>
                                    <img src={movie.cover} alt={movie.title} style={styles.image} />
                                </div>
                                <h4 style={styles.title}>{movie.title}</h4>
                            </div>

                            <div>
                              <button style={styles.button(isSelected)} onClick={() => navigate(`/movie/${movie.id}`)}>Select Movie</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
  );
}

export default MovieList;