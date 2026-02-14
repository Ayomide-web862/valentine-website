# 💕 Valentine's Day Website 💕

A beautiful, romantic, and animated Valentine's Day website created with love and elegance.

## Features ✨

### Stunning Animations
- **Floating Hearts**: Continuously floating hearts throughout the page
- **Smooth Scroll Animations**: Elements fade and slide in as you scroll
- **Particle Effects**: Click the heart button to trigger gorgeous particle animations
- **Parallax Effects**: Background elements move at different speeds
- **Confetti Celebration**: Confetti falls when reaching the final message
- **Cursor Light Effect**: A beautiful light follows your cursor

### Sections

1. **Hero Section**
   - Animated title with word-by-word reveal
   - Floating heart animation
   - Scroll indicator
   - Gradient background with floating orbs

2. **Love Letter**
   - Heartfelt message
   - Beautiful card with perspective effects
   - Elegant typography

3. **Gallery Section**
   - 6 beautiful gradient backgrounds representing moments
   - Hover effects with smooth transitions
   - 3D perspective transforms

4. **Things I Love About You**
   - 6 beautifully animated quote cards
   - Emoji icons
   - Smooth hover animations

5. **Our Love Story Timeline**
   - 4 milestone moments
   - Animated cards with timeline design
   - Responsive layout

6. **Interactive Heart**
   - Clickable pulsing heart button
   - Triggers particle burst effect
   - Random love messages
   - Press 'L' for love particles or 'C' for confetti!

7. **Final Message**
   - Beautiful message box
   - Confetti explosion effect
   - Romantic conclusion

## How to Use

### Opening the Website

Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Browser, or
- Drag and drop into your browser

### Customization Tips

#### Personalize the Content
1. Open `index.html` in a text editor
2. Replace the messages with your own heartfelt words
3. Change section titles and descriptions
4. Update photo captions in the gallery

#### Change Colors
Edit the color scheme in `styles.css`:
```css
:root {
    --primary-color: #ff6b9d;      /* Main pink */
    --secondary-color: #c06c84;    /* Darker pink */
    --accent-color: #ffd6a5;       /* Light accent */
    --dark-color: #2c2c54;         /* Dark text */
    --light-color: #f8f4f9;        /* Light background */
    --gold-color: #ffd700;         /* Accent lines */
}
```

#### Add Your Photos
To add actual photos instead of gradient backgrounds:
1. Replace the `style="background: linear-gradient(...)"` with:
   ```html
   style="background-image: url('your-image.jpg'); background-size: cover;"
   ```

#### Customize Messages
Edit any text content directly in `index.html`:
- Hero title and subtitle
- Love letter text
- Gallery item descriptions
- Quote cards
- Timeline milestones
- Final message

### Keyboard Shortcuts

- **Press 'L'**: Trigger love particle burst at center
- **Press 'C'**: Trigger confetti celebration

### Interactive Elements

- **Scroll**: Watch animations trigger as you scroll down
- **Hover over Gallery**: See beautiful overlay effects
- **Hover over Quote Cards**: Cards lift up with enhanced shadows
- **Move Your Mouse**: See the subtle cursor light effect
- **Click the Heart**: Trigger particle burst and get a random love message

## File Structure

```
valentine-website/
├── index.html      # Main HTML file with all content
├── styles.css      # All styling and animations
├── script.js       # All interactive features
└── README.md       # This file
```

## Browser Compatibility

Works best on:
- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Tips for Maximum Impact

1. **Set Mood**: Open this on Valentine's Day with soft lighting
2. **Full Screen**: Press F11 for full-screen experience
3. **Share**: You can share the HTML file or host it online
4. **Customize**: Add photos, change colors, personalize messages
5. **Sound**: Consider adding background music that plays on load

## Adding Background Music

Add this inside the `<body>` tag (before the `<script>` tags):

```html
<audio autoplay loop id="bgMusic" style="display:none;">
    <source src="your-song.mp3" type="audio/mpeg">
</audio>
```

Then add this to the script.js to let users control it:

```javascript
const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.3; // Set volume to 30%
```

## Special Effects Explained

### Particle Burst
Click the heart button to see particles burst out with velocity calculations

### Confetti Fall
Automatically triggers when you reach the final message section

### Text Reveal
Titles appear with smooth animations as you scroll into view

### Floating Hearts
Hearts float up continuously in the background

### Parallax Scrolling
Background elements move slower than foreground elements

## Performance Tips

- The website is optimized for performance
- Animations use CSS transforms (GPU accelerated)
- JavaScript debouncing on scroll events
- Particle effects are limited on mobile devices

## Mobile Experience

- Fully responsive design
- Touch-friendly interactive elements
- Reduced particle count for better performance
- Optimized animations for smaller screens

## Additional Customization Ideas

1. **Add a Photo Section**: Include an actual photo gallery
2. **Add Music**: Use the audio element for background music
3. **Add Form**: Create a contact form or RSVP section
4. **Add Counter**: Include a "Days We've Been Together" counter
5. **Add Wishes**: Let visitors leave wishes/comments
6. **Add Video**: Embed a special video message

## License

This website is created with love and is free for personal use.

---

Made with 💕 for someone special.

**Remember**: The most beautiful thing on this website is the love behind it! ✨💖✨
