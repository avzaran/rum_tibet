const burger = document.getElementById('burger');
        const sidebar = document.getElementById('sidebar');

        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            sidebar.classList.toggle('open');
        });