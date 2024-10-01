const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const stopBtn = document.getElementById("stopBtn");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl"); // Tambahkan elemen kontrol volume

// Ganti ikon menggunakan feather icons
feather.replace();

// Event listener untuk tombol play/pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch((error) => console.error("Error playing audio:", error));
    playPauseBtn.innerHTML = '<i data-feather="pause"></i>'; // Ganti ikon ke pause
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i data-feather="play"></i>'; // Ganti ikon ke play
  }
});

// Event listener untuk tombol stop
stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0; // Kembali ke awal
  playPauseBtn.innerHTML = '<i data-feather="play"></i>'; // Kembali ke ikon play
});

// Update progress bar saat audio berjalan
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100 || 0; // Cegah NaN
  progressBar.style.width = percent + "%";
});

// Event listener untuk kontrol volume
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value; // Set volume sesuai slider
});
