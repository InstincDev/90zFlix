# 90zFlix

## Project Description

This project is a nostalgic recreation of a 1990s-style homepage. The design aims to evoke the charm of the web in the late 1990s, featuring vibrant colors, funky animations, and retro fonts.

### The application features:

* A fully functional 90s-style interface with HTML/CSS aesthetics.

* An interactive loading screen with music triggered by mouse movement.

* A collection of top movies from 1990 to 1999 displayed in a 90s-inspired table format.

* Hover effects and dynamic audio playback when interacting with movie thumbnails.

* A Guest Book component, complete with a clickable modal popup to mimic 90s website features.

This project was developed for a hackathon, combining nostalgic web design with modern React technologies.

## Why This Project?

The decision to create a 90s-themed homepage was inspired by:

**Hackathon Creativity**: Recreating a unique take on the 1990s provided both a technical and design challenge.

**Nostalgia Factor**: The 90s are culturally iconic, and web design from that era is widely recognized for its bold, quirky style.

**Interactive Fun**: Features like a loading page with dynamic music, hover-triggered audio, and colorful animations emphasize user interactivity, a critical factor for hackathon presentations.

This project leverages the nostalgia of the 90s while showcasing modern frontend development skills.

## Technologies Used

### Frontend

* React with Vite: Chosen for its fast development experience and ability to create modular, reusable components efficiently.

* CSS: Custom styling to mimic 90s design aesthetics with bright colors, blinking text, radial gradients, and retro fonts.

* JavaScript: For managing dynamic behaviors, including animations, modals, and audio interactivity.

### Media Assets

* Images: Stored in the assets folder, including 90s-styled VHS graphics and movie posters.

* Audio Files: Utilized mouse-triggered music to enhance interactivity, such as iconic soundtracks from 1990s movies.

## Challenges Faced

### Balancing Retro Aesthetics with Usability:

**Challenge**: Mimicking 90s web design without making the interface cluttered or hard to use.

**Solution**: Carefully chose bold colors, pixelated fonts, and blinking text but kept the layout clean and intuitive.

### Dynamic Audio Management:

**Challenge**: Ensuring smooth playback of different audio tracks when navigating between components or hovering on elements.

**Solution**: Created a shared AudioPlayer utility to handle music playback and stop previously playing tracks.

### Implementing Retro Animations:

**Challenge**: Designing animations that felt authentic to the 90s but were implemented using modern CSS/JS techniques.

**Solution**: Used CSS keyframes and React state management for effects like blinking text and modal animations.

### Hackathon Time Constraint:

**Challenge**: Limited time to develop, debug, and polish the app.

**Solution**: Prioritized essential features and created modular, reusable components to speed up development.

## Key Features

1. Loading Page and Enter

Description: A retro-styled loading and enter page with an animated background and text. Music starts playing when the mouse moves on the screen.

**Tech Highlights**:

CSS keyframes for fade-in and blinking text animations.
onMouseMove event listener to trigger music playback.

2. Movie Table

Description: A table displaying the top movies of each year from 1990 to 1999.

Interaction: Hovering over a movie image plays its soundtrack dynamically.

**Tech Highlights**:

Custom CSS styling to create a 2x5 table grid reminiscent of 90s layouts.

Dynamic audio playback using a shared AudioPlayer utility.

3. Guest Book Modal

Description: A clickable Guest Book button opens a modal popup, showcasing an interactive way to mimic 90s web design.

**Tech Highlights**:

Separate React component for the modal, allowing reusability.

Styled modal overlay and animations using CSS.

## Folder Structure

src/
|-- assets/         # Images and audio files
|-- components/     # React components (e.g., GuestBook, Modal, LoadingPage)
|-- styles/         # CSS files
|-- App.jsx         # Main React app file
|-- main.jsx        # Vite entry point

## What I Learned

* Retro Aesthetic Design: Gained a deeper appreciation for the quirky and bold design choices of the 90s, and how to implement them using modern tools.

* Dynamic Audio Handling: Improved understanding of JavaScript's Audio class for controlling playback and managing multiple audio tracks.

* CSS Animations: Learned how to create blinking text, modals, and fade-in effects while ensuring they worked across different screen sizes.

* Time Management: Prioritized tasks effectively during a hackathon to deliver a functional and polished project within the deadline.

## Future Enhancements

**Full Movie Details Page**:

Add individual pages for each movie with detailed descriptions, trailers, and reviews.

**User Guest Book**:

Allow users to leave comments or sign the Guest Book, stored in a lightweight backend or browser storage.

**More Animations**:

Add additional animations, such as VHS tape effects or transitions between pages.

**Mobile Optimization**:

Ensure the site is fully responsive on smaller devices.

## How to Run the Project

Clone the repository:

git clone <repository-url>
cd <project-directory>

Install dependencies:

npm install

Start the development server:

npm run dev

## Acknowledgments

Inspiration from 90s websites and cultural aesthetics.

Special thanks to the @Codédex hackathon team and mentors for feedback and support.