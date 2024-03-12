function addNavbarClickListeners() {
    const links = document.querySelectorAll('ul a');
}
    for (const link of links) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPosition = document.querySelector(link.getAttribute('href')).offsetTop;
        window.scrollTo({
          top: targetPosition - 50, 
          behavior: 'smooth'
        });
      });
  }
  window.addNavbarClickListeners = addNavbarClickListeners;
  
  const biodataLink = document.querySelector('#navbarNav a[href="biodata.html"]');
  biodataLink.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPosition = document.querySelector(biodataLink.getAttribute('href')).offsetTop;
    window.scrollTo({
      top: targetPosition - 50, 
      behavior: 'smooth'
    });
  });
  
  const contactLink = document.querySelector('#navbarNav a[href="contact.html"]');
  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPosition = document.querySelector(contactLink.getAttribute('href')).offsetTop;
    window.scrollTo({
      top: targetPosition - 50,
      behavior: 'smooth'
    });
  });