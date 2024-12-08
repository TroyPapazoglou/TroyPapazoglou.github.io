document.addEventListener("DOMContentLoaded", () => {    
  const homeSection = document.querySelector("#home");
  const projectsSection = document.querySelector(".major-projects");
  const otherProjectSection = document.querySelector(".projects-section");
  const sections = [homeSection, projectsSection, otherProjectSection];

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
   * Scrolls smoothly to the top of the closest section.
   */
  function scrollToTopOfClosestSection() {
    const closestSection = getClosestSection();
    const sectionTop = closestSection.offsetTop; // Get the top of the closest section

    window.scrollTo({
      top: sectionTop, // Scroll to the top of the section
      behavior: "smooth",
    });
  }

  // Listen for resizing and fullscreen changes
  window.addEventListener("resize", scrollToTopOfClosestSection);
  document.addEventListener("fullscreenchange", scrollToTopOfClosestSection);
});
