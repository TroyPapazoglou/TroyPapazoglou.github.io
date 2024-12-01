document.addEventListener("DOMContentLoaded", () => {    
    const homeSection = document.querySelector("#home");
    const projectsSection = document.querySelector(".major-projects");
    const sections = [homeSection, projectsSection];
  
    /**
     * Finds the closest section to the center of the viewport.
     */
    function getClosestSection() {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let closestSection = sections[0];
      let closestDistance = Math.abs(viewportCenter - (closestSection.offsetTop + closestSection.offsetHeight / 2));
  
      sections.forEach((section) => {
        const sectionCenter = section.offsetTop + section.offsetHeight / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);
        if (distance < closestDistance) {
          closestSection = section;
          closestDistance = distance;
        }
      });
  
      return closestSection;
    }
  
    /**
     * Scrolls smoothly to the center of the closest section.
     */
    function centerOnClosestSection() {
      const closestSection = getClosestSection();
      const sectionCenter = closestSection.offsetTop + closestSection.offsetHeight / 2;
      const viewportHeight = window.innerHeight;
  
      window.scrollTo({
        top: sectionCenter - viewportHeight / 2,
        behavior: "smooth",
      });
    }
  
    // Listen for resizing and fullscreen changes
    window.addEventListener("resize", centerOnClosestSection);
    document.addEventListener("fullscreenchange", centerOnClosestSection);
  });
  