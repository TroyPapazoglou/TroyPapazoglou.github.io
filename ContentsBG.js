// const majorProjects = document.querySelector('.major-projects');
// const projectSections = document.querySelectorAll('.project-section');
// const contentWrappers = document.querySelectorAll('.content-wrapper');
// const backgroundWrappers = document.querySelectorAll('.background-wrapper');

// const title = document.querySelector(".major-projects-title");
// const dimmedOverlay = document.querySelector('.dimmed-background');
// let backgroundVideo = null;
// let isSectionClicked = false;

// const homeSection = document.querySelector('.home'); // Replace with your home section's class or ID
// const otherSections = document.querySelectorAll('.projects-section');


// const jawbreakersubpageparts = document.querySelectorAll('.jawbreakersubpageparts')
// const jawbreakersection = document.querySelector('.jawbreakersection');

// const sectionBackgrounds = [
//   'assets/images/JawbreakerPipeBg.png', // Background for the first section
//   'assets/images/h.elevatorBg.png', // Background for the second section
//   'assets/images/Purrfect-catchBg.png', // Background for the third section
// ];

// // Intersection Observer setup
// const observerOptions = {
//   root: null, // Use the viewport as the root
//   threshold: 0.2 // Trigger when 20% of the element is visible
// };

// const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');            
//     }
//     else{
//       entry.target.classList.remove('visible');
//     }
//   });
// }, observerOptions);

// // Observe each project section
// projectSections.forEach(section => {   
//   fadeInOnScroll.observe(section);
//   fadeInOnScroll.observe(title); 
// });

// projectSections.forEach((section, index) => {
//   section.addEventListener('mouseenter', () => {
//     if (isSectionClicked) return; 
      

//     const video = section.querySelector('video');
//     const gif = section.querySelector('img');

//     // Find the contentWrapper and character within the project section
//     const contentWrapper = section.querySelector('.content-wrapper');
//     const backgroundWrapper = section.querySelector('.background-wrapper');   
//     const character = contentWrapper ? contentWrapper.querySelector('.character') : null;
//     const logo = contentWrapper ? contentWrapper.querySelector('.logo') : null;
    
//     if (dimmedOverlay) {
//       dimmedOverlay.style.display = 'block';
//       dimmedOverlay.style.opacity = '0.7'; // Set the faded opacity
  
//       // Get the index of the hovered section
//       const index = Array.from(projectSections).indexOf(section);
  
//       // Update the background image based on the hovered section
//       if (index >= 0 && sectionBackgrounds[index]) {
//         dimmedOverlay.innerHTML = ''; // Clear existing content
//         dimmedOverlay.style.backgroundImage = `url('${sectionBackgrounds[index]}')`;
//         dimmedOverlay.style.backgroundSize = 'cover';
//         dimmedOverlay.style.backgroundPosition = 'center';
//       }

//       backgroundWrapper.classList.remove('shrink');
//       // Apply rotation for the hovered section using a 3D effect
//       if (backgroundWrapper) {
//         // Apply rotation and scale to the background wrapper
//         backgroundWrapper.style.transform = 'scale(1.1) rotateY(0deg)';      
        
//       }
//     }

//     // Apply rotation for sections to the left and right
//     projectSections.forEach((sec) => {
//       if (sec !== section) {
//         // Find the background-wrapper inside the current section
//         const backgroundWrapper = sec.querySelector('.background-wrapper');
        
//         if (backgroundWrapper) {
//           backgroundWrapper.classList.add("shrink");
//           if (sec.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_FOLLOWING) {
//             backgroundWrapper.style.transform = 'rotateY(40deg)'; // Rotate right            
//           } else {
//             backgroundWrapper.style.transform = 'rotateY(-40deg)'; // Rotate left            
//           }
//         }
//       }
//     }); 

//     if (character) {    
//       character.classList.add('fade-in');     
//     } 

//     if(logo)
//     {
//       logo.classList.add('fade-in');      
//     }
    
    
//   });

//   section.addEventListener('mouseleave', () => {
//     if (isSectionClicked) return; 

    

//     // Remove the video and reset overlay
//     if (backgroundVideo) {
//       backgroundVideo.remove();
//       backgroundVideo = null;
//     }
//     if (dimmedOverlay) {
//       dimmedOverlay.style.display = 'none';
//       dimmedOverlay.style.backgroundImage = ''; // Clear background image
//       dimmedOverlay.innerHTML = ''; // Clear video content
//     }
   
//     backgroundWrappers.forEach((wrap) => {
//       wrap.classList.remove('shrink');
//       wrap.style.transform = '';
//     });

//     const character = section.querySelector('.character');
//     const logo = section.querySelector('.logo');
//     if (character) {
//       character.classList.remove('fade-in');
//     }
//     if (logo) {
//       logo.classList.remove('fade-in');
//     }
    
//   });

//   section.addEventListener('click', () => {
//     isSectionClicked = true;

   
    

//     title.classList.add('fading-out');
//     dimmedOverlay.style.opacity = '1';

//     // Reset all cards to the default state
//     document.querySelectorAll('.project-section').forEach((c) => {
//       c.classList.remove('left', 'right', 'hidden');
//       c.style.pointerEvents = ''; // Reset pointer events
//     });
   
//     if (homeSection) {
//       homeSection.style.visibility = 'hidden'; // Hides the home section
//       homeSection.style.opacity = '0'; // Adds a fade-out effect
//       homeSection.style.transition = 'opacity 0.5s ease'; // Smooth transition for opacity
//     }
  
//     otherSections.forEach((otherSection) => {
//       if (otherSection !== section) {
//         otherSection.style.visibility = 'hidden'; // Hides other sections
//         otherSection.style.opacity = '0'; // Adds a fade-out effect
//         otherSection.style.transition = 'opacity 0.5s ease'; // Smooth transition for opacity
//       }
//     });
    
    
    
    
    
//     if (index === 0) {
//       projectSections[0].style.zIndex = '3';
//       projectSections[0].style.transform = 'translateX(0%)';
//       projectSections[1].classList.add('fading-out');
//       projectSections[2].style.transform = 'translateX(0%)';
//       projectSections[2].classList.add('fading-out'); 
      
//         /* fades in subpage parts */
//       jawbreakersubpageparts.forEach(element => {
//         element.classList.add('fadedOut');     
//       });

//       /* fades out card bg */
//       // backgroundWrappers.forEach((wrap) => {
//       //   wrap.classList.add('fadeout');      
//       // });
//       projectSections[0].classList.add('fadeout');

//       jawbreakersection.classList.add('enablescrollbar');
      

//     } else if (index === 1) {
//       projectSections[1].style.zIndex = '3';
//       projectSections[0].style.transform = 'translateX(0%)';
//       projectSections[0].classList.add('fading-out');  
//       projectSections[2].style.transform = 'translateX(0%)';    
//       projectSections[2].classList.add('fading-out');     
//     } else if (index === 2) {
//       projectSections[2].style.zIndex = '3';
//       projectSections[0].style.transform = 'translateX(0%)';
//       projectSections[0].classList.add('fading-out');
//       projectSections[1].classList.add('fading-out');
//       projectSections[2].style.transform = 'translateX(0%)';  
//     }

//     document.querySelectorAll('.project-section').forEach((c) => {
//       if (c !== section) { 
//         if (c.classList.contains('left') || c.classList.contains('right')) {
//           c.classList.add('fading-out');
//           c.style.pointerEvents = 'none'; 
//         }
//       }
//     });
//   });

  

 
  
// });
