const hamburgerContainer = document.getElementById("hamburger-container");
const navigationMenu = document.getElementById("navigation-menu");
        
hamburgerContainer.addEventListener('click', () => 
                                    {
                                        navigationMenu.classList.toggle('active');
                                    })