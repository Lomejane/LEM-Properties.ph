            // show menu
            const navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle'),
            navClose = document.getElementById('nav-close')
        
                    // Menu Show
                    // Validate If Constant exist
        
        if(navToggle){
            navToggle.addEventListener('click', () =>{
                navMenu.classList.add('show-menu')
            })
        }
        
                    // Menu Hidden
                    // Validate is constant Exixts
        if(navClose){
            navClose.addEventListener('click', () =>{
                navMenu.classList.remove('show-menu')
            })
        }
            // Remonve Menu Mobile
        const navLink = document.querySelectorAll('.nav---link')
        
        const linkAction = () =>{
            const navMenu = document.getElementById('nav-menu')
                // When we click on each nav--link, we remove the show--menu
            navMenu.classList,remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))
        