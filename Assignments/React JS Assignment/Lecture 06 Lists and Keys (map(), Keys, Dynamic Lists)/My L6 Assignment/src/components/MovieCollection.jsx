import React from 'react'

function MovieCollection() {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        imageWrapper: { width: '100%', height: '160px', backgroundColor: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' },
        image: { maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '9px' }
    };

    const MovieCovers = [
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbWFCO8DaHmcMWmkZsuFNPKA8n_NoyF_vuG5RU3F7mtBoIjg_u", // Brahmāstra
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JG82A7pETgIoqMpdEXq0wALbCESn5P-qbjgK-AI-mA&s", // Mirai
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0jzVzbJ63sMtMyJu3DMKtvoJXQcRK7ALkejEaSiQ8fJHxaOxFPtGwvCWn6WbV695BjC0&s=10", // HanuMan
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgecNBugBnUYsDHUodoyFt9A86YscnT6DJYMwmzS-HBw&s=10", // Akhanda
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzz3iZWT7tWKlHW0NdMFLLULWNqgfnRw1Jvyl8Aqr4MlTOIGBGCi9cogllRZfh--CEIBg2Q&s=10https://images.unsplash.com/photo-1608889174637-3c44f6326f1a?w=500&q=80", // Akhanda 2
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrr0R1JOEiV-sdjkcuQAME5FoR-8QJjcNtkzabh6a1C6o8bRQk4IbN8GeYfkIZCGg8f_Lu&s=10", // Transformers
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpsHnP_FcwrGD7Za8Keg6uhpAt8ZsEO3H5h60Zq-1c0iZXa6MTjq-ZIxu18ddRVP23efR&s=10", // Transformers: Revenge of the Fallen
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt63ZL-Od7FEshFDZ6I2bRrmx6hePZLYT63OdQIqpyXZn-GZTd6qFl81rqALVoJyJcsRNZ7A&s=10", // Transformers: Dark of the Moon
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RP4vkCjcSvZcLm9zOYDG1GNFxlMywvVtDOjuR19TkrPVmD1e0iaxG79kLhvzr3PEIohU&s=10", // Transformers: Age of Extinction
        "https://m.media-amazon.com/images/M/MV5BYWNlNjU3ZTItYTY3Mi00YTU1LTk4NjQtYjQ3MjFiNjcyODliXkEyXkFqcGc@._V1_.jpg", // Transformers: The Last Knight
        "https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_.jpg", // Bumblebee
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsFNeH_1HnJrtVLrbLdsdamTUTZwn7Kj9YBsSWiUHR4shBKafAY89uQwV_A0Z3Chj_ahPIA&s=10", // Transformers: Rise of the Beasts
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21LEv9JBuVJIn8V48XwlDijL0eqhojWgz7ZuYmHsuGwnAmNn0rjO9gc0wa3zxYXY4BVBT&s=10", // Red Notice
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKIoi4iI-VoYDlklDRCyZ9Uy2FTtZvXYZQPx7FUOrUcv0oZnB2rh_NZFoafB9X8ATax94&s=10", // Journey 2
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbUq4fS8Sdfw5cqG76O2fO4zfZoX-oX7CoBoDjnL8uQ&s=10", // Jurassic Park
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcUAd-WXG2PutJ0Ver4o6oRB_HnSFbVR7xnWFLh_YYcj5FAwKKOcQemRDQ8Uu8FOwrfxH&s=10", // The Lost World: Jurassic Park
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Jurassic_Park_III_poster.jpg/250px-Jurassic_Park_III_poster.jpg", // Jurassic Park III
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMy8E7eNMT-AVlhrLc3N8zaE7zE7EyKAjKabHZAf2e6ZMl8M-", // Jurassic World
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jurassic_World_Fallen_Kingdom.png/250px-Jurassic_World_Fallen_Kingdom.png", // Jurassic World: Fallen Kingdom
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdKAnzhHmikcKg1WtYXflBUiDIgZNuG_ek8qrz2-Re70P03tjmcQjpvroHT9A7AzCgP3kvw&s=10", // Jurassic World Dominion
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnv3BvcGBRrKfdVzWwAt9Y1aQC012prpP794GV7O2Z_rpufciLLorsS9tFqwwqaqTDeW6z&s=10", // Godzilla (2014)
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrjE28d84wBvG4rRRlnnufhsYMKZ5-hR5aXJiebHd6xvZq0qysdIHsTCF0CXpzXS7iCZL9g&s=10", // Godzilla: King of the Monsters
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpINwjw7_KTSiU-YZF-FTOZLrlpp01ckOE36SyNXYm9jtzeaz386xmPl5xXOcBRBcFhlvQww&s=10", // Godzilla vs. Kong
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZikAY7saYYBj8GKuwQkyXJPPXbzRRXNNCquOvlq9YHnTuj0jFjQGkRDNxupO-EECXDuds&s=10", // Godzilla x Kong: The New Empire
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOImtBcGyKXTobzlmmTv4m6ManP-WqPK2fVmTxp6g9q50v0WuMtI5fhlPjBFibcO7F0vbag&s=10", // Rampage
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76o0n0GuG8xyjyo0xzQxJrrDATh-m-2y5vt3cwqkY-6q3_efbTCjVidES5sXSFtklNmks1Q&s=10", // Max Steel
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnl1wJKbUhfsAyqyDKcUOr5MqdPENcntOU9LrX6sTEelsTEoM8ZhUjxagQdX2GJhrLGsyO&s=10", // Ready Player One
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluFl3GfQDXohBaH-xG3GuRi8T4MDIQPRpCqUGLiE5tXdXbUO0hRFwnshvzg07igEgGg7i&s=10", // The Avengers
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HI3nlN9yhLTTOn8qXJzXK6sLnW5PrLKXohQO6UY27lz7IYLQsR70-yrN8XZe1LfyVo1X&s=10", // Avengers: Age of Ultron
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2_cEexTdYFaQJFUwRZrG4IrM1510eWIkeQhwqq2GbNhxDJZUml6g1Ft9iKyuHJhG15wGUQ&s=10", // Avengers: Infinity War
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXEwQlva93WuBdWDK6LlOSf4f96CB5OxToqcdkHiWBnn2p5WOjaOGKo_t6i9F-gQ2tYUp&s=10", // Avengers: Endgame
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ74wqlSvCpYYt9KvSX0xtGhwEnl6n0NUkq-ZujjL6YeAnv3J2", // Justice League
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX56eHp0d0WdvFlrpJJuxhP8A3pYgCSnyUp0AKuwcNGAYtioKcAz4WgkpChsaEDr6fWQa8&s=10", // Zack Snyder's Justice League
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcurhCN8SevrjvahSX8bMuMgx5BgQAnJqYV-xRpsReXmO7txAZqYK2SKQszbjRhbKwEhtY7A&s=10", // G.I. Joe: The Rise of Cobra
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKukifSJtNSl7K3rpk171Rfkkm5WH_QzV0HjMilDmyVNlA4mZpEG-6Tdvp2r2xV9Kol3GMA&s=10", // G.I. Joe: Retaliation
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c8f_8fq2NsxY5vdaCScZWUHqE7bypvP4IasyZDYGEHq87HZqNglNZuVE6weBKiUS9fdWww&s=10", // Snake Eyes: G.I. Joe Origins
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8KOKahkFQQxsd0c0amIiOx5aqmbD_ZhWywL1X_7s5YRmjEE-pbLIz0l47mDzFmte2rHtDQ&s=10", // Guardians (The Superheroes)
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRGXP2N9X5mKJquo3Wojn9UZQAXrWdiMVp7CHx6fI29nCf8TJoozyesfyfSNI8AvQK7P3xw&s=10", // Fantastic Four 2005
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynd0OwRk9-1-iby-JA2wG-6g_2xqepEJyt-4dUOzLRexZaOWFxSKR4_G78voZqGqoAAUg&s=10", // Fantastic Four: Rise of the Silver Surfer
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08-C9fQfhBW1utTh6DluttA0rbRZN9M5i4eTGRe6SsY5xITzIH0dFVgDVL8byo9an1hZe&s=10", // Fantastic Four 2015
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJBESuOsvi8aWujZZXsZwlvl2D-h_6LA9NCDzQ82PJqmAZLPoOxS2rmIJ0RLJXAxQjricGw&s=10", // Fantastic Four 2025
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_r27s0zQjkOvSyFF5EuRExFe1JERij1M3wL0U47Q5FsKXTBWWOvkVzbH20WdYByU0s77_&s=10", // Bhool Bhulaiyaa
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJ-c951gb7t1ThjEiUbZC7HZbQ2V9ySIXJcyXtVGyWkyXiH5dnC2qeE6dfVi_FtZNet7U&s=10", // Bhool Bhulaiyaa 2
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Bhool_Bhulaiyaa_3_poster.jpg/250px-Bhool_Bhulaiyaa_3_poster.jpg", // Bhool Bhulaiyaa 3
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJ27Dyyj3kXoEBHl10PG_yN9_d1qfXFu1DvWnoV21_WJVOg8XAinBlTl1XiHOKSGXUX75Rg&s=10", // Bhooth Bangla
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJgraTLy_DNaAK7W5igfsSndlVncUhd9a2puYEfmawQ&s=10", // Ghostbusters (1984)
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Ghostbusters_ii_poster.jpg/250px-Ghostbusters_ii_poster.jpg", // Ghostbusters II
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9S0oOCK8fYzqbzAqSXWQZzQvzRwzr2ImrO8VSYbOdH9lWp506QDth71qXK4utvO2Ps7wW&s=10", // Ghostbusters: Answer the Call
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLzbVR0t0_zlaDWkKtQccWFGq3uNe_R-BOPsRqa94gPGSVQTby91jQpbj7uc6Jay0Ig_1LQ&s=10", // Ghostbusters: Afterlife
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzU2qFw-aqy6nrvtrjbGgxdB6pd7oiGX0yRmxueJiBQLRo55pTvkhWpuvX3Q4ah93gsv5&s=10", // Ghostbusters: Frozen Empire
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/MissionImpossiblePoster.jpg/250px-MissionImpossiblePoster.jpg", // Mission: Impossible
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Mission_Impossible_II.jpg/250px-Mission_Impossible_II.jpg", // Mission: Impossible 2
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Mission_Impossible_III.jpg/250px-Mission_Impossible_III.jpg", // Mission: Impossible III
        "https://upload.wikimedia.org/wikipedia/en/b/b5/Mission_impossible_ghost_protocol.jpg", // M:I - Ghost Protocol
        "https://upload.wikimedia.org/wikipedia/en/f/fb/Mission_Impossible_Rogue_Nation_poster.jpg", // M:I - Rogue Nation
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/MI_%E2%80%93_Fallout.jpg/250px-MI_%E2%80%93_Fallout.jpg", // M:I - Fallout
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34_otMSvSpe1Nn8Iip4kpkcaAHrUGaIITwQYC9iRIL4q34rHhTY2cTYrbRe303iD5fdsm&s=10", // M:I - Dead Reckoning Part One
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg/250px-Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg", // Mission: Impossible - The Final Reckoning
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmHtj8QQ8hl1Z4wN_G9KdypGeG5fk2idqDJ8CHybZ76AZlhC4BTLgItg9g5DkbWX21iaz0A&s=10", // Kingsman: The Secret Service
        "https://upload.wikimedia.org/wikipedia/en/f/fb/Kingsman_The_Golden_Circle.png", // Kingsman: The Golden Circle
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSma8DXIKxDFHwX5tV8yYvXT3eVpkP-HcoQKMs-6pOaAr7JBoHeX2WkAepQS0oQkrcx_Iml&s=10", // The King's Man
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSM4QgsMFdKJ-aeYCrKHd72HMPJbhS-ohWhoC81D2n94K0wz-0P-02PRKFfQIn7TLJ5CEww&s=10", // Bhoot: Part One - The Haunted Ship
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1aU4CA-VcEDFkj8LsYSmRlylyaai1J4KnspYRnPSZproRBeJPzF4DHZ_vDm-G6AE3k2TSA&s=10", // Housefull
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS154TBc2ctExwyf4P8fR_PZYT1n-_uIXGZH8IDrKGaDyy9bmtIX9YWwe0zWIwkRv4xxkxnFA&s=10", // Housefull 2
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJNF-JWiDbBWGli_mbYDnLY_2tKXfPq-PiZkoWkSlyOpTGz9m7FHHl8I1R-lzMbmnLh_iaw&s=10", // Housefull 3
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Housefull_4_poster.jpg/250px-Housefull_4_poster.jpg", // Housefull 4
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD2ZI0iKOuNmz8OdtqNDPWtbLUEwyHSKHiWpGb33sbm7qBed54y-Y8vcLsHOB__EhzZfO&s=10", // Housefull 5
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1w2Vpgn25T79j8Vb4bikIrafpOvgf2SgFhqEKTQT0ebBEtWxNiUATuZFrNKNMS49J7nJ&s=10", // Geetha Govindam
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Thamma_film_poster.jpg/250px-Thamma_film_poster.jpg", // Thamma
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEz_SIRmW4cy3u5nBNIb80rPxcIm47X5lHL1vc_Kol_1fYhJEiZebZ-DFdaRBCyIHGcEfB&s=10", // Chronicles of Narnia: Dawn Treader
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7y6WuIbMmlQmWc2cCkpKd6NWS7tcTvYHwQX4QkvciZGa1mcdnbhc763DZ3ywMfuN_MTvC&s=10", // Dolittle
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Moviepostermasti.jpg/250px-Moviepostermasti.jpg", // Masti
        "https://i.ytimg.com/vi/tbgS2T_0CE0/maxresdefault.jpg", // Grand Masti
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Great_Grand_Masti_poster.jpg/250px-Great_Grand_Masti_poster.jpg", // Great Grand Masti
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlLGrRC2kc8Xvbu9C__ajlPTB-K-rh4RlaDwEYyDcy8ZkvfqO2-azbg2NqojSuf4ZRCUi&s=10", // Karate Kid: Legends
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppSt95q3gUmDQF4vXhUxWQHA00Urbjopv4wjjyLTOmkQtxbS8ix5zOoJ8Vmu3l9oJrJc3&s=10" // Kung Fu Yoga
    ];

    const MovieTitles = [
        "Brahmāstra: Part One – Shiva", "Mirai", "HanuMan", "Akhanda", "Akhanda 2: Thaandavam",
        "Transformers", "Transformers: Revenge of the Fallen", "Transformers: Dark of the Moon",
        "Transformers: Age of Extinction", "Transformers: The Last Knight", "Bumblebee",
        "Transformers: Rise of the Beasts", "Red Notice", "Journey 2: The Mysterious Island",
        "Jurassic Park", "The Lost World: Jurassic Park", "Jurassic Park III", "Jurassic World",
        "Jurassic World: Fallen Kingdom", "Jurassic World Dominion", "Godzilla (2014)",
        "Godzilla: King of the Monsters", "Godzilla vs. Kong", "Godzilla x Kong: The New Empire",
        "Rampage", "Max Steel", "Ready Player One", "The Avengers", "Avengers: Age of Ultron",
        "Avengers: Infinity War", "Avengers: Endgame", "Justice League", "Zack Snyder's Justice League",
        "G.I. Joe: The Rise of Cobra", "G.I. Joe: Retaliation", "Snake Eyes: G.I. Joe Origins",
        "Guardians (The Superheroes)", "Fantastic Four 2005", "Fantastic Four: Rise of the Silver Surfer", "Fantastic Four 2015", "Fantastic Four 2025", "Bhool Bhulaiyaa", "Bhool Bhulaiyaa 2", "Bhool Bhulaiyaa 3",
        "Bhooth Bangla", "Ghostbusters (1984)", "Ghostbusters II", "Ghostbusters (2016)",
        "Ghostbusters: Afterlife", "Ghostbusters: Frozen Empire", "Mission: Impossible",
        "Mission: Impossible 2", "Mission: Impossible III", "Mission: Impossible – Ghost Protocol",
        "Mission: Impossible – Rogue Nation", "Mission: Impossible – Fallout",
        "Mission: Impossible – Dead Reckoning Part One", "Mission: Impossible – The Final Reckoning",
        "Kingsman: The Secret Service", "Kingsman: The Golden Circle", "The King's Man",
        "Bhoot: Part One – The Haunted Ship", "Housefull", "Housefull 2", "Housefull 3",
        "Housefull 4", "Housefull 5", "Geetha Govindam", "Thamma", "The Chronicles of Narnia: The Voyage of the Dawn Treader",
        "Dolittle", "Masti", "Grand Masti", "Great Grand Masti", "Karate Kid: Legends", "Kung Fu Yoga"
    ];

    const MovieRatings = [
        "5.6/10", "6.9/10", "7.7/10", "6.7/10", "5.4/10",
        "7.1/10", "6.0/10", "6.2/10", "5.6/10", "5.2/10", "6.7/10", "6.0/10",
        "6.3/10", "5.7/10",
        "8.2/10", "6.6/10", "6.0/10", "6.9/10", "6.2/10", "5.6/10",
        "6.4/10", "6.0/10", "6.3/10", "6.0/10",
        "6.1/10", "4.6/10", "7.4/10",
        "8.0/10", "7.3/10", "8.4/10", "8.4/10",
        "6.0/10", "7.9/10",
        "5.7/10", "5.7/10", "5.4/10",
        "4.1/10", "5.7/10", "5.6/10", "4.3/10", "6.8/10",
        "7.5/10", "5.7/10", "4.6/10", "5.1/10",
        "7.8/10", "6.6/10", "6.8/10", "7.0/10", "6.1/10",
        "7.2/10", "6.1/10", "6.9/10", "7.4/10", "7.4/10", "7.7/10", "7.6/10", "7.1/10",
        "7.7/10", "6.7/10", "6.3/10",
        "5.4/10",
        "5.7/10", "5.5/10", "5.0/10", "3.7/10", "3.3/10",
        "7.7/10", "5.8/10", "6.3/10", "5.6/10",
        "6.2/10", "4.5/10", "3.7/10", "6.3/10", "5.2/10"
    ];

    const MovieReleases = [
        "2022", "2025", "2024", "2021", "2025",
        "2007", "2009", "2011", "2014", "2017", "2018", "2023",
        "2021", "2012",
        "1993", "1997", "2001", "2015", "2018", "2022",
        "2014", "2019", "2021", "2024",
        "2018", "2016", "2018",
        "2012", "2015", "2018", "2019",
        "2017", "2021",
        "2009", "2013", "2021",
        "2017", "2005", "2007", "2015", "2025",
        "2007", "2022", "2024", "2026",
        "1984", "1989", "2016", "2021", "2024",
        "1996", "2000", "2006", "2011", "2015", "2018", "2023", "2025",
        "2014", "2017", "2021",
        "2020",
        "2010", "2012", "2016", "2019", "2025",
        "2018", "2025", "2010", "2020",
        "2004", "2013", "2016", "2025", "2017"
    ];

    return (
        <>
            <h2>Movie Card:</h2>
            <div style={styles.container}>
                {MovieTitles.map((name, index) => {
                    const moviecover = MovieCovers[index];
                    const movierating = MovieRatings[index];
                    const movierelease = MovieReleases[index];

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

export default MovieCollection;