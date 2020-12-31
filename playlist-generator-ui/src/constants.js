// Icons: 
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import githubIcon from '@iconify-icons/mdi/github';
import spotifyIcon from '@iconify-icons/mdi/spotify';
import twitterIcon from '@iconify-icons/mdi/twitter';
import emailIcon from '@iconify-icons/mdi/email';

export const icons = [ 
    {
        "component": linkedinIcon,
        "link": "https://www.linkedin.com/in/sarahmurraydev/"
    },
    {
        "component": githubIcon,
        "link": "https://github.com/sarahmurraydev"
    },
    {
        "component": spotifyIcon,
        "link": "https://open.spotify.com/user/1267314858?si=I1d28Rs9R7-I-Ye79IjdhA"
    },
    {
        "component": twitterIcon,
        "link": "https://twitter.com/sarahmurraydev"
    },
    {
        "component": emailIcon,
        "link": "mailto:sarahmurraydev@gmail.com"
    }
]

export const faqs = [
    {
        "question": "Can I change the order of the mosiac items?",
        "answer": "Yes! The photo is based of the first 100 tracks of the playlist. To change the mosiac order, just adjust the track order on your playlist from the spotify mobile, desktop, or web app."
    }, 
    {
        "question": "Why is the same artwork in my mosiac photo more than once?",
        "answer": "The photo generator tries to use only unique album cover photos. That means if you have a playlist that includes full albums, that album cover art will only be included once. If there is a deluxe version of that album, or a single from the artist with the same artwork also on the playlist, this will be included as it is considered a unqiue album."
    }, 
    {
        "question": "My playlist has more songs on it then the artwork is showing - what gives?",
        "answer": "First and foremost, this app is limited by the spotify API GET Playlist Tracks endpoint, which limits the number of tracks returns from a playlist to first 100 songs only. This means whether your playlist has 100 or 1000 songs, the photo will only be based on the FIRST 100 songs. Therefore, the maximum mosaic size will be a 10x10 mosiac. Since we are making a square mosiac matrix we will make the mosiac N by N size, where N is the closest integer square root of the number of items on the playlist (from 1 to 10). For example, if your playlist has 26 items and all the album artworks are unique, the app will generate a 5x5 mosiac since 25 is closet square to the number of items on the playlist. If your playlist contains 26 songs but only from 4 unqiue albums, the app will generate a 2x2 matrix."

    },
    {
        "question": "What happens if my playlist has local files?",
        "answer": "Local files are ignored in making the photo since they do not have album artwork."
    }, 
    {
        "question": "I can't find the playlist I want to update",
        "answer": "In order for the playlist to be pulled into this app it needs to meet 3 critieria. The playlist must:", 
        "bullets": [
            {
                "point": "Be owned by you."
            }, 
            {
                "point": "Be public."
            },
            {
                "point": "Be nonempty (aka have at least one song on it, but the more songs the better!)"
            }
        ],
        "postBulletNote": "Ensure your playlist meets all 3 of these requirements, then try moving the playlist to the top of your playlists via the spotify desktop app."
    }
]


export const UI_URL = 'http://localhost:3000';
export const API_URL = 'http://localhost:5000';
export const SUCCESS = "success";