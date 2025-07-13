export function removeOffscreenClass() {

    // landing section stuff
     const elements = [
        document.getElementById("title-one"),
        document.getElementById("title-two"),
        document.getElementById("title-three"),
        document.getElementById("content"),
        document.getElementById("githubIcon"),
        document.getElementById("itchIcon"),
        document.getElementById("linkedInIcon"),
        document.getElementById("UnderConstruction")
    ];
    
  
    setTimeout(() => {
        removeClass(elements, "offscreen");
    }, 100);

    // major projects section stuff
    // const majorprojectsection = document.getElementById("major-projects");

    // const sectionelements = [
    //     document.getElementById("project-one"),
    //     document.getElementById("project-two"),
    //     document.getElementById("project-three"),     
    //     document.getElementById("majorprojectstitle")
    // ];   
    
    // const projectCards = [
    //     document.getElementById("project-one"),
    //     document.getElementById("project-two"),
    //     document.getElementById("project-three"),             
    // ];  

    // const cardVideos = [
    //     document.getElementById("jawbreakervideo"),
    //     document.getElementById("helevatorgif"),
    //     document.getElementById("purrfectcatchvideo"),
    // ];
    
  

    // if(majorprojectsection)
    // {
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.2
    //     }

    //     const observer = new IntersectionObserver((entries, observer) => 
    //     {
    //         entries.forEach(element => {
    //             if(element.isIntersecting){
    //                 removeClass(sectionelements, "hidden");                    
    //                 observer.unobserve(element.target);
    //             }
                    
    //         });
    //     },options);
        
    //     observer.observe(majorprojectsection);
    // }
   
    // const backgroundWrappers = document.querySelectorAll('.background-wrapper');   

    // const cardContentMap = {};

    // projectCards.forEach(card => {
    //     const contentWrapper = card.querySelector('.content-wrapper');
    //     if (contentWrapper) {
    //         cardContentMap[card.id] = Array.from(contentWrapper.children);
    //     }
    // });

    // const backgroundWrapperMap = new Map();

    
    // document.querySelectorAll('.project-section').forEach(section => {
    //     const backgroundWrapper = section.querySelector('.background-wrapper');
    //     const backgroundVideo = backgroundWrapper.querySelector('.background-video, .background-gif');
    //     if (backgroundWrapper && backgroundVideo) {
    //         backgroundWrapperMap.set(section.id, backgroundVideo);
    //     }
    // });


    // const rotationConfig = {
    //     noHover: [30, 0, -30], // Default rotation
    //     left: [0, -45, -45],   // Hover on left
    //     middle: [45, 0, -45],  // Hover on middle
    //     right: [45, 45, 0],    // Hover on right
    // };

    // //map the element IDs to rotation keys
    // const idToConfigKey = {
    //     backgroundone: 'left',
    //     backgroundtwo: 'middle',
    //     backgroundthree: 'right',
    // };

    // const idToVideoMap = {
    //     backgroundone: 'jawbreakervideo',
    //     backgroundtwo: 'helevatorgif',
    //     backgroundthree: 'purrfectcatchvideo'
    // };
  

    // //listens for hover on any of the cards
    // backgroundWrappers.forEach(wrapper => {
    //     wrapper.addEventListener('mouseenter', () => {
    //         const sectionId = getParentSectionId(wrapper); 
    //         if (sectionId) {
    //             const rotationKey = idToConfigKey[wrapper.id];
    //             const backgroundVid = backgroundWrapperMap.get(sectionId);
    //             applyRotation(rotationConfig[rotationKey]);
    //             showContent(sectionId);              
    //             applyOutline(backgroundVid); 
    //         }
    //     });
    
    //     wrapper.addEventListener('mouseleave', () => {
    //         const sectionId = getParentSectionId(wrapper);
    //         if (sectionId) {
    //             const backgroundVid = backgroundWrapperMap.get(sectionId);
    //             applyRotation(rotationConfig.noHover);
    //             hideContent(sectionId);
    //             removeOutline(backgroundVid);
    //         }
    //     });
    // });
    

    // function applyOutline(element) {        
    //     element.classList.add('outline');
    // }
        
    // function removeOutline(element) {
    //     element.classList.remove('outline');
    // }

    // //apply rotations based on config
    // function applyRotation(rotationArray) {
    //     backgroundWrappers.forEach((element, index) => {
    //         element.style.transform = `rotateY(${rotationArray[index]}deg)`;
    //     });
    // }

    // //show content by removing "hidden" class
    // function showContent(cardId) {
    //     if (cardContentMap[cardId]) {
    //         cardContentMap[cardId].forEach(element => {
    //             element.classList.remove('hidden');
    //         });
    //     }
    // }

    // //hide content by adding "hidden" class
    // function hideContent(cardId) {
    //     if (cardContentMap[cardId]) {
    //         cardContentMap[cardId].forEach(element => {
    //             element.classList.add('hidden');
    //         });
    //     }
    // }

    // //finds the closest parent section
    // function getParentSectionId(wrapper) {
    //     const parentSection = wrapper.closest('.project-section'); 
    //     return parentSection ? parentSection.id : null;
    // }

    //helper function
    const removeClass = (elements, className) => {
        elements.forEach(element => {
            if (element) {
                element.classList.remove(className);
            }
        });
    };
}