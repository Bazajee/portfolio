// Wait for the window to load before executing the code
window.addEventListener('load', () => {

    // Array of colors in hex format
    const colorArray = ["5800FF","5800FF", "333fff", "005bff", "006fff", "006fff"];
    // Set the initial background color of the body
    document.body.style.backgroundColor = `#${colorArray[0]}`;

    // Get elements: header, sections, and footer
    const headerElement = document.getElementsByTagName('header');
    const sectionsElement = document.body.getElementsByTagName('section');
    const footerElement = document.body.getElementsByTagName('footer');
    
    // Merge all elements into one array
    const allElements = [...headerElement, ...sectionsElement, ...footerElement];

    // Change background color of the header
    headerElement[0].style.backgroundColor = `#FF4C29`;

    // Function to update the displayed section based on scroll position
    function updateDisplaySection(indiceElement) {
        let displaySection;
        let lastKnownScrollPosition = window.scrollY;
        lastKnownScrollPosition = window.scrollY;

        // Check if the element is in the viewport
        if (
            allElements[indiceElement].getBoundingClientRect().top <= 0 &&
            allElements[indiceElement].getBoundingClientRect().bottom >= 0
        ) {
            // Change body background color based on the current section
            if (displaySection !== indiceElement) {
                document.body.style.backgroundColor = `#${colorArray[indiceElement]}`;
                displaySection = indiceElement;
            }
            console.log(displaySection);
        }
    }

    // Function to update positions of elements
    function positionUpdate() {
        for (let i in allElements) {
            updateDisplaySection(i);
        }
    }

    // Debounce function to limit the frequency of execution of another function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function () {
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Event listener for scroll with a debounced position update
    window.addEventListener('scroll', positionUpdate);

    // Event listener for custom scrollend event with position update
    window.addEventListener('scrollend', positionUpdate);
});