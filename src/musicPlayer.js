
let currentAudio = null;

export const musicPlayer = (musicFile) => {
    if (currentAudio) {
        currentAudio.pause(); // Pause the current music
        currentAudio.currentTime = 0; // Reset to the beginning
    }
    currentAudio = new Audio(musicFile);
    currentAudio.play();
};

export const stopMusic = () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
};
