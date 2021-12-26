// Selectors and such.
const ELEMENTS_ELIGIBLE_FOR_TABLE_OF_CONTENTS = ["h2", "h3"];
const CLASS_NAME_FOR_ACTIVE_SECTION = 'active'
const TABLE_OF_CONTENTS_LINK_SELECTOR = '.section-nav a'

// Document-level global state.
const sections = ELEMENTS_ELIGIBLE_FOR_TABLE_OF_CONTENTS
    .reduce((sum, s) => [...sum, ...document.getElementsByTagName(s)], [])
    .sort((a, b) => a.offsetTop - b.offsetTop);

const sectionOffsets = sections
    .map(section => section.offsetTop);
const links = document
    .querySelectorAll(TABLE_OF_CONTENTS_LINK_SELECTOR);

const findIndexOfActiveElement = (currentPosition, potentialSectionOffsets) => potentialSectionOffsets
    .map((offset, index) => [index, offset])
    .filter(([_, offset]) => offset <= currentPosition)
    .slice(-1)[0][0]

const updateActiveElement = (currentPosition, potentialSections, potentialElements) => {
    const index = findIndexOfActiveElement(currentPosition, potentialSections);
    if (!index) return;
    potentialElements.forEach(e => e.setAttribute('class', ''))
    potentialElements[index].setAttribute('class', CLASS_NAME_FOR_ACTIVE_SECTION);
}

window.onscroll = () => updateActiveElement(
    document.documentElement.scrollTop || document.body.scrollTop, 
    sectionOffsets, 
    links
);
