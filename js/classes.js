class Song {
    constructor(songName, author, link, image, color) {
        this.author = author
        this.songName = songName
        this.link = link
        this.image = image
        this.color = color
    }
}
class MusicPlayer {
    constructor(songs = [], songsFolder) {
        this.songs = [...songs]
        this.songsFolder = songsFolder
        this.indexSong = 0
        this.audioPlayer = new Audio(this.songsFolder + this.songs[this.indexSong].link)
        console.log('Method: ', 'Constructor', ' executed!')
    }
    nextSong() {
        this.indexSong = this.indexSong + 1
        if (this.indexSong >= this.songs.length) {
            this.indexSong = 0;
        }
        this.pauseSong()
        this.audioPlayer = new Audio(this.songsFolder + this.songs[this.indexSong].link)
        this.playSong()
        console.log('Method: ', 'Next Song', ' executed!')
    }
    prevSong() {
        this.indexSong = this.indexSong - 1
        if (this.indexSong < 0) {
            this.indexSong = this.songs.length - 1;
        }
        this.pauseSong()
        this.audioPlayer = new Audio(this.songsFolder + this.songs[this.indexSong].link)
        this.playSong()
        console.log('Method: ', 'Prev', ' executed!')
    }
    pauseSong() {
        this.audioPlayer.pause()
        console.log('Method: ', 'pause', ' executed!')

    }
    playSong() {
        this.audioPlayer.play()
        console.log('Method: ', 'play', ' executed!')
    }
    getCurrentSong() {
        return this.songs[this.indexSong]
        console.log('Method: ', 'getcurrentsong', ' executed!')
    }
}
class MusicGallery {
    constructor(songs = [], musicPlayer, options) {
        this.songs = [...songs]
        this.musicPlayer = musicPlayer
        this.options = { ...options }
    }
    updatePlayingSongInfo() {
        this.setCurrentSongText()
        this.setCurrentSongImage()
        this.setCurrentBgGradient()
    }
    setCurrentSongText() {
        const elements = document.querySelectorAll(this.options.textQuerySelector)
        elements.forEach(element => {
            element.innerHTML = `${this.musicPlayer.getCurrentSong().songName} - ${this.musicPlayer.getCurrentSong().author}`
        })
    }
    setCurrentSongImage() {
        const elements = document.querySelectorAll(this.options.imgQuerySelector)
        elements.forEach(element => {
            element.style.backgroundImage = `url('${this.options.imgFolder}${this.musicPlayer.getCurrentSong().image}')`;
        })
    }
    setCurrentBgGradient() {
        const elements = document.querySelectorAll(this.options.bgQuerySelector)
        elements.forEach(element => {
            element.style.backgroundImage = `radial-gradient(${this.musicPlayer.getCurrentSong().color},#333333)`;
        })
    }
}