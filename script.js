// 1985 Retro Music Player JavaScript

class RetroMusicPlayer {
    constructor() {
        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.playlist = [];
        this.audioPlayer = document.getElementById('audio-player');
        this.playPauseBtn = document.getElementById('play-pause-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.currentCover = document.getElementById('current-cover');
        this.currentTitle = document.getElementById('current-title');
        this.playlistContainer = document.getElementById('playlist');
        
        this.initializeEventListeners();
        this.loadPlaylist();
        this.setupNavigation();
        this.setupGallery();
        this.setupModal();
    }

    initializeEventListeners() {
        // Audio player events
        this.audioPlayer.addEventListener('ended', () => this.nextTrack());
        this.audioPlayer.addEventListener('timeupdate', () => this.updateProgress());
        this.audioPlayer.addEventListener('loadedmetadata', () => this.updateDuration());
        
        // Control buttons
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.prevBtn.addEventListener('click', () => this.previousTrack());
        this.nextBtn.addEventListener('click', () => this.nextTrack());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'Space':
                    e.preventDefault();
                    this.togglePlayPause();
                    break;
                case 'ArrowLeft':
                    this.previousTrack();
                    break;
                case 'ArrowRight':
                    this.nextTrack();
                    break;
            }
        });
    }

    loadPlaylist() {
        // Use playlist from playlist-config.js if available
        if (typeof samplePlaylist !== 'undefined' && Array.isArray(samplePlaylist)) {
            // Force all covers to cover1.jpg for visual consistency
            this.playlist = samplePlaylist.map(track => ({
                ...track,
                cover: 'covers/cover1.jpg'
            }));
        } else {
            // Fallback minimal playlist
            this.playlist = [
                {
                    title: "Track 1 - Example",
                    artist: "Your Name",
                    file: "songs/track1.mp3",
                    cover: "covers/cover1.jpg",
                    duration: "3:00"
                }
            ];
        }
        this.renderPlaylist();
        this.loadTrack(0);
    }

    renderPlaylist() {
        this.playlistContainer.innerHTML = '';
        this.playlist.forEach((track, index) => {
            const playlistItem = document.createElement('div');
            playlistItem.className = 'playlist-item';
            playlistItem.dataset.index = index;
            playlistItem.innerHTML = `
                <div class="track-cover">
                    <img src="${track.cover}" alt="Album Cover" onerror="this.src='placeholder-cover.jpg'; this.classList.add('placeholder');">
                </div>
                <div class="track-details">
                    <h4>${track.title}</h4>
                    <p>${track.artist} • ${track.duration}</p>
                </div>
            `;
            playlistItem.addEventListener('click', () => {
                this.loadTrack(index);
                this.playTrack();
            });
            this.playlistContainer.appendChild(playlistItem);
        });
    }

    loadTrack(index) {
        if (index < 0 || index >= this.playlist.length) return;
        
        this.currentTrackIndex = index;
        const track = this.playlist[index];
        
        this.audioPlayer.src = track.file;
        this.currentCover.src = 'album_cover.jpg';
        this.currentTitle.textContent = track.title;
        
        // Update active playlist item
        document.querySelectorAll('.playlist-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // Add retro loading effect
        this.addRetroEffect();
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pauseTrack();
        } else {
            this.playTrack();
        }
    }

    playTrack() {
        this.audioPlayer.play().then(() => {
            this.isPlaying = true;
            this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            this.playPauseBtn.classList.add('playing');
        }).catch(error => {
            console.error('Error playing track:', error);
            this.showRetroError('Track not found! Check your file paths.');
        });
    }

    pauseTrack() {
        this.audioPlayer.pause();
        this.isPlaying = false;
        this.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        this.playPauseBtn.classList.remove('playing');
    }

    nextTrack() {
        const nextIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.loadTrack(nextIndex);
        if (this.isPlaying) this.playTrack();
    }

    previousTrack() {
        const prevIndex = this.currentTrackIndex === 0 ? this.playlist.length - 1 : this.currentTrackIndex - 1;
        this.loadTrack(prevIndex);
        if (this.isPlaying) this.playTrack();
    }

    updateProgress() {
        // Add visual feedback for progress
        const progress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
        // You can add a custom progress bar here if needed
    }

    updateDuration() {
        // Update duration display if needed
    }

    addRetroEffect() {
        // Add a brief retro loading effect
        const albumArt = document.querySelector('.album-art');
        albumArt.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            albumArt.style.filter = 'none';
        }, 300);
    }

    showRetroError(message) {
        // Create a retro-style error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'retro-error';
        errorDiv.innerHTML = `
            <div class="error-content">
                <h3>ERROR 404</h3>
                <p>${message}</p>
                <button onclick="this.parentElement.parentElement.remove()">OK</button>
            </div>
        `;
        errorDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #000;
            border: 2px solid #ff0080;
            color: #ff0080;
            padding: 2rem;
            z-index: 1000;
            text-align: center;
            box-shadow: 0 0 20px #ff0080;
        `;
        document.body.appendChild(errorDiv);
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        const sections = document.querySelectorAll('.content-section');
        
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetSection = button.dataset.section;
                
                // Update active button
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Show target section
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === targetSection) {
                        section.classList.add('active');
                    }
                });
                
                // Add retro transition effect
                this.addSectionTransition();
            });
        });
    }

    addSectionTransition() {
        const activeSection = document.querySelector('.content-section.active');
        activeSection.style.animation = 'none';
        setTimeout(() => {
            activeSection.style.animation = 'fadeIn 0.5s ease-in';
        }, 10);
    }

    setupGallery() {
        this.loadCoverGallery();
        this.loadBackCoverGallery();
    }

    loadCoverGallery() {
        const coverGrid = document.getElementById('cover-grid');
        coverGrid.innerHTML = '';
        const coverItem = document.createElement('div');
        coverItem.className = 'cover-item';
        coverItem.innerHTML = `
            <img src="covers/cover1.jpg" alt="Album Cover">
            <h4>40 Suosikkia / 40 Favourites</h4>
            <p>Main Album Cover</p>
        `;
        coverItem.addEventListener('click', () => {
            this.openModal('covers/cover1.jpg');
        });
        coverGrid.appendChild(coverItem);
    }

    loadBackCoverGallery() {
        const backCoverGrid = document.getElementById('back-cover-grid');
        
        // Generate back cover gallery items
        for (let i = 1; i <= 40; i++) {
            const backCoverItem = document.createElement('div');
            backCoverItem.className = 'cover-item';
            backCoverItem.innerHTML = `
                <img src="back-covers/back${i}.jpg" alt="Back Cover ${i}" onerror="this.src='placeholder-back-cover.jpg'">
                <h4>Track ${i}</h4>
                <p>Back Cover</p>
            `;
            
            backCoverItem.addEventListener('click', () => {
                this.openModal(`back-covers/back${i}.jpg`);
            });
            
            backCoverGrid.appendChild(backCoverItem);
        }
    }

    setupModal() {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-img');
        const closeBtn = document.querySelector('.close');
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }

    openModal(imageSrc) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-img');
        
        modalImg.src = imageSrc;
        modalImg.onerror = function() {
            this.src = 'placeholder-cover.jpg';
        };
        
        modal.style.display = 'block';
        
        // Add retro effect
        modalImg.style.animation = 'fadeIn 0.3s ease-in';
    }
}

// Initialize the player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const player = new RetroMusicPlayer();
    
    // Add some retro console messages
    console.log('%c🎵 40 SUOSIKKIA - 1985 EDITION 🎵', 'color: #ff0080; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to your retro music collection!', 'color: #00ffff; font-size: 14px;');
    
    // Add retro loading animation
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-cassette">
                <div class="loading-reel"></div>
                <div class="loading-reel"></div>
            </div>
            <h2>LOADING...</h2>
            <div class="loading-bars">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    `;
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        color: #ff0080;
        font-family: 'VT323', monospace;
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after a short delay
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2000);
});

// Add some additional retro effects
document.addEventListener('DOMContentLoaded', () => {
    // Add very subtle CRT scan lines effect
    const scanLines = document.createElement('div');
    scanLines.className = 'scan-lines';
    scanLines.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            transparent 50%,
            rgba(0, 0, 0, 0.02) 50%
        );
        background-size: 100% 8px;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(scanLines);
    
    // Add subtle flicker effect
    setInterval(() => {
        if (Math.random() < 0.05) {
            document.body.style.filter = 'brightness(0.98)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 30);
        }
    }, 2000);
}); 