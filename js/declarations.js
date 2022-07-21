const mySongs = [
    new Song(
        'Rolling in the Deep',
        'Adele',
        'Rolling in the Deep.mp3',
        'rolling.jpg',
        '#2E0202',
    ),
    new Song(
        'Chandelier',
        'Sia',
        'Sia - Chandelier (Official Video).mp3',
        'chandelier.jpg',
        '#CCE9F7',
    ),
    new Song(
        'Elastic Heart',
        'Sia',
        'Sia - Elastic Heart feat. Shia LaBeouf  Maddie Ziegler (Official Video).mp3',
        'elastic.jpg',
        '#3F515A',
    ),
]
const myMusicPlayer = new MusicPlayer(mySongs, './assets/music/')
const myMusicGallery = new MusicGallery(
    mySongs,
    myMusicPlayer,
    {
        textQuerySelector: '.text-gallery',
        imgQuerySelector: '.img-gallery',
        bgQuerySelector: '.bg-gallery',
        imgFolder: './assets/img/'
    }
)
localStorage.setItem("mySong",JSON.stringify(Song));



