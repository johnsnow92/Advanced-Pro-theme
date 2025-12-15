 const heading = document.getElementById('mainHeading');
  const btn = document.getElementById('toggleBtn');
  btn.addEventListener('click', (e) => {
    heading.classList.toggle('responsive-navbar');
  });

// ======================================================
        const menuBtn =
            document.querySelector(".menu-btn");

        const menu =
            document.querySelector(".menu");

        const menuNav =
            document.querySelector(".menu-nav");

        const menuBranding =
            document.querySelector(".menu-branding");

        const navItems =
            document.querySelectorAll(".nav-item");


        let showMenu = false;

        menuBtn.addEventListener("click", toggleMenu);

        function toggleMenu() {
            if (!showMenu) {
                menuBtn.classList.toggle("close");
                menu.classList.toggle("show");
                menuNav.classList.toggle("show");
                menuBranding.classList.toggle("show");
                navItems.forEach((item) =>
                    item.classList.toggle("show"));

              
                showMenu = true;
            } else {
                menuBtn.classList.remove("close");
                menu.classList.remove("show");
                menuNav.classList.remove("show");
                menuBranding.classList.remove("show");
                navItems.forEach((item) =>
                    item.classList.remove("show"));

                showMenu = false;
            }
        }





