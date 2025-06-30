# 🎵 40 Suosikkia - 1985 Edition 🎵

A retro-styled music player website for your 40 original and cover songs, featuring a stunning 1985 aesthetic with neon colors, cassette tape animations, and a fully functional music player.

© 2025 [PM Autio]. The original songs here are licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.  
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## ✨ Features

- **🎵 Full Music Player**: HTML5 audio player with playlist functionality
- **🎨 1985 Retro Design**: Neon colors, retro fonts, and authentic 80s styling
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🖼️ Cover Art Gallery**: Display all your album covers with click-to-zoom
- **📄 Back Cover Gallery**: Separate section for your back cover designs
- **⌨️ Keyboard Controls**: Space to play/pause, arrow keys for navigation
- **🎭 Visual Effects**: Animated cassette tape, spinning vinyl, CRT scan lines
- **🎪 Interactive Elements**: Hover effects, transitions, and retro animations

## 🚀 Quick Start

1. **Download/Clone** this project to your computer
2. **Add Your Music Files**:
   - Create a `songs/` folder
   - Add your 40 MP3 files as `track1.mp3`, `track2.mp3`, etc.
3. **Add Your Cover Art**:
   - Create a `covers/` folder
   - Add your cover images as `cover1.jpg`, `cover2.jpg`, etc.
4. **Add Your Back Covers**:
   - Create a `back-covers/` folder
   - Add your back cover images as `back1.jpg`, `back2.jpg`, etc.
5. **Customize the Playlist**:
   - Edit `script.js` and update the playlist array with your song details
6. **Open `index.html`** in your web browser

## 📁 File Structure

```
40-suosikkia/
├── index.html              # Main website file
├── styles.css              # 1985 retro styling
├── script.js               # Music player functionality
├── README.md               # This file
├── songs/                  # Your MP3 files
│   ├── track1.mp3
│   ├── track2.mp3
│   └── ... (up to track40.mp3)
├── covers/                 # Your cover art
│   ├── cover1.jpg
│   ├── cover2.jpg
│   └── ... (up to cover40.jpg)
└── back-covers/            # Your back covers
    ├── back1.jpg
    ├── back2.jpg
    └── ... (up to back40.jpg)
```

## 🎨 Customization

### Updating Your Playlist

Edit the `playlist` array in `script.js` (around line 50):

```javascript
this.playlist = [
    {
        title: "Your Song Title",
        artist: "Your Name or Original Artist",
        file: "songs/track1.mp3",
        cover: "covers/cover1.jpg",
        duration: "3:45"
    },
    // Add all 40 tracks here
];
```

### Changing Colors

Edit the CSS variables in `styles.css` (around line 4):

```css
:root {
    --neon-pink: #ff0080;    /* Main accent color */
    --neon-blue: #00ffff;    /* Secondary accent */
    --neon-green: #00ff00;   /* Success/active color */
    --neon-yellow: #ffff00;  /* Warning/highlight color */
}
```

### Adding More Tracks

1. Add your MP3 files to the `songs/` folder
2. Add corresponding cover art to the `covers/` folder
3. Add corresponding back covers to the `back-covers/` folder
4. Update the playlist array in `script.js`
5. Update the gallery generation loops (lines 280-300 in `script.js`)

## 🎮 Controls

- **Space Bar**: Play/Pause
- **Left Arrow**: Previous Track
- **Right Arrow**: Next Track
- **Escape**: Close image modal
- **Mouse**: Click on playlist items or gallery images

## 🎨 Design Features

### 1985 Retro Elements
- **Neon Color Scheme**: Pink, cyan, green, and yellow
- **Retro Fonts**: Orbitron and VT323 for authentic 80s feel
- **Animated Cassette Tape**: Spinning reels in the header
- **CRT Effects**: Scan lines and subtle flicker
- **Vinyl Record**: Spinning animation when playing
- **Equalizer Bars**: Animated footer element

### Interactive Elements
- **Hover Effects**: Buttons and gallery items glow on hover
- **Smooth Transitions**: Fade-in animations between sections
- **Modal Gallery**: Click any image to view full-size
- **Responsive Layout**: Adapts to any screen size

## 🌐 Sharing with Friends

### Local Network Sharing
1. **Find your IP address**:
   - Windows: Run `ipconfig` in Command Prompt
   - Mac/Linux: Run `ifconfig` in Terminal
2. **Start a local server**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have it installed)
   npx http-server
   ```
3. **Share the URL**: `http://YOUR_IP_ADDRESS:8000`

### Online Hosting
- **GitHub Pages**: Free hosting for static websites
- **Netlify**: Drag and drop deployment
- **Vercel**: Fast deployment with custom domains
- **Firebase Hosting**: Google's hosting solution

## 🎵 Audio File Requirements

- **Format**: MP3 (recommended), WAV, or OGG
- **Quality**: 128kbps minimum, 320kbps recommended
- **Size**: Keep files under 10MB each for fast loading
- **Naming**: Use consistent naming like `track1.mp3`, `track2.mp3`

## 🖼️ Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: 300x300 pixels minimum, 600x600 recommended
- **Aspect Ratio**: Square (1:1) for best results
- **File Size**: Keep under 500KB each

## 🔧 Troubleshooting

### Audio Won't Play
- Check file paths in the playlist array
- Ensure MP3 files are in the `songs/` folder
- Try a different browser (Chrome recommended)
- Check browser console for errors

### Images Not Loading
- Verify image files are in correct folders
- Check file names match the code exactly
- Ensure images are valid JPG/PNG files

### Website Looks Broken
- Clear browser cache and refresh
- Check that all files are in the same folder
- Ensure you're opening `index.html` directly

## 🎉 Happy Birthday!

This website is designed to showcase your amazing music collection with style. The 1985 theme celebrates the era of great music and creativity. Enjoy sharing your 40 suosikkia with friends and family!

## 📝 License

This project is open source and available under the MIT License. Feel free to modify and customize it for your needs.

---

**Created with ❤️ for your 40 favorite songs** 