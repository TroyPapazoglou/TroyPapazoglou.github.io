const majorProjects = document.querySelector('.major-projects');
const projectSections = document.querySelectorAll('.project-section');
const contentWrappers = document.querySelectorAll('.content-wrapper');

const title = document.querySelector(".major-projects-title");
const dimmedOverlay = document.querySelector('.dimmed-background');
let backgroundVideo = null;

// Intersection Observer setup
const observerOptions = {
  root: null, // Use the viewport as the root
  threshold: 0.2 // Trigger when 20% of the element is visible
};

const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');            
    }
    else{
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// Observe each project section
projectSections.forEach(section => { 
  fadeInOnScroll.observe(section);
  fadeInOnScroll.observe(title); 
});

projectSections.forEach((section, index) => {
  section.addEventListener('mouseenter', () => {
    const video = section.querySelector('video');
    const gif = section.querySelector('img');

    // Find the contentWrapper and character within the project section
    const contentWrapper = section.querySelector('.content-wrapper');
    const backgroundWrapper = section.querySelector('.background-wrapper');
    const character = contentWrapper ? contentWrapper.querySelector('.character') : null;
    const logo = contentWrapper ? contentWrapper.querySelector('.logo') : null;
    
    if (dimmedOverlay) {
      dimmedOverlay.style.display = 'block';
      dimmedOverlay.style.opacity = '0.5'; // Set the faded opacity

      // Display video if present
      if (video) {
        dimmedOverlay.innerHTML = ''; // Clear existing content
        const clonedVideo = video.cloneNode(true); // Clone the video element
        clonedVideo.muted = true; // Ensure the video is muted
        clonedVideo.autoplay = true;
        clonedVideo.loop = true;
        clonedVideo.style.width = '100%';
        clonedVideo.style.height = '100%';
        clonedVideo.style.objectFit = 'cover';
        dimmedOverlay.appendChild(clonedVideo); // Add video to overlay
      }
      // Display GIF if present
      else if (gif) {
        dimmedOverlay.innerHTML = ''; // Clear existing content
        dimmedOverlay.style.backgroundImage = `url('${gif.src}')`;
        dimmedOverlay.style.backgroundSize = 'cover';
        dimmedOverlay.style.backgroundPosition = 'center';
      }
    }

    backgroundWrapper.classList.remove('shrink');
    // Apply rotation for the hovered section using a 3D effect
    if (backgroundWrapper) {
      // Apply rotation and scale to the background wrapper
      backgroundWrapper.style.transform = 'scale(1.1) rotateY(0deg) rotateX(30deg)';      
    }
    

    // Apply rotation for sections to the left and right
    projectSections.forEach((sec) => {
      if (sec !== section) {
        // Find the background-wrapper inside the current section
        const backgroundWrapper = sec.querySelector('.background-wrapper');
        
        if (backgroundWrapper) {
          backgroundWrapper.classList.add("shrink");
          if (sec.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_FOLLOWING) {
            backgroundWrapper.style.transform = 'rotateY(40deg)'; // Rotate right
          } else {
            backgroundWrapper.style.transform = 'rotateY(-40deg)'; // Rotate left
          }
        }
      }
    }); 

    if (character) {    
      character.classList.add('fade-in');
    } 

    if(logo)
    {
      logo.classList.add('fade-in');
    }
    
  });

  section.addEventListener('mouseleave', () => {
    // Remove the video and reset overlay
    if (backgroundVideo) {
      backgroundVideo.remove();
      backgroundVideo = null;
    }
    if (dimmedOverlay) {
      dimmedOverlay.style.display = 'none';
      dimmedOverlay.style.backgroundImage = ''; // Clear background image
      dimmedOverlay.innerHTML = ''; // Clear video content
    }
    const backgroundWrappers = document.querySelectorAll('.background-wrapper');
    backgroundWrappers.forEach((wrap) => {
      wrap.classList.remove('shrink');
      wrap.style.transform = '';
    });

    const character = section.querySelector('.character');
    const logo = section.querySelector('.logo');
    if (character) {
      character.classList.remove('fade-in');
    }
    if (logo) {
      logo.classList.remove('fade-in');
    }
    
  });
});
