function unmuteAudio() {
    const audio = document.getElementById('backgroundAudio');
    audio.muted = false;
    audio.play(); // Ensure playback if not already started
}
