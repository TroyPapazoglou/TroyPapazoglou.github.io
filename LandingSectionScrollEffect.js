document.addEventListener("DOMContentLoaded", () => {
    const titleOne = document.getElementById("title-one");
    const titleTwo = document.getElementById("title-two");
    const titleThree = document.getElementById("content");   
  
    const githubIcon = document.getElementById("githubIcon");
    const itchIcon = document.getElementById("itchIcon");
    const linkedInIcon = document.getElementById("linkedInIcon");
  
    window.addEventListener("scroll", function () {
      const value = window.scrollY;
  
      // Apply transformations to titles
      titleOne.style.transform = `translateY(${value}px)`;
      titleTwo.style.transform = `translateY(${value}px)`;
      titleThree.style.transform = `translateY(${value}px)`;
  
      // Rotate and move icons
      const rotationValue = value * 1.5;
      githubIcon.style.transform = `translate(${value * -1}px, ${value}px) rotate(${-rotationValue}deg)`;
      itchIcon.style.transform = `translateY(${value}px) rotate(${rotationValue}deg)`;
      linkedInIcon.style.transform = `translate(${value}px, ${value}px) rotate(${rotationValue}deg)`;
  
      // Adjust opacity based on scroll
      let opacityValue = 1 - value / 1000;
      opacityValue = Math.max(opacityValue, 0);
  
      titleOne.style.opacity = opacityValue;
      titleTwo.style.opacity = opacityValue;
      titleThree.style.opacity = opacityValue;
  
      githubIcon.style.opacity = opacityValue;
      itchIcon.style.opacity = opacityValue;
      linkedInIcon.style.opacity = opacityValue;
    });
  });
  