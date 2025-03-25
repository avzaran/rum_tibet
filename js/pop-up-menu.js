document.addEventListener('DOMContentLoaded', function() {
    const headerNav = document.querySelector('.header__nav');
    const menuItems = ['Про гида', 'Программа тура', 'Стоимость', 'Блог', 'Контакты'];

    function createButton() {
        const button = document.createElement('button');
        button.className = 'pop-up-button';
        button.textContent = '☰';
        return button;
    }

    function createPopupMenu() {
        const popup = document.createElement('div');
        popup.className = 'pop-up-menu';

        const ul = document.createElement('ul');
        menuItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = item;
            li.appendChild(a);
            ul.appendChild(li);
        });

        popup.appendChild(ul);
        return popup;
    }

    function toggleMenu() {
        const existingPopup = headerNav.querySelector('.pop-up-menu');
        if (existingPopup) {
            existingPopup.remove();
        } else {
            const popup = createPopupMenu();
            headerNav.appendChild(popup);
        }
    }

    function handleResize() {
        const button = headerNav.querySelector('.pop-up-button');
        if (window.innerWidth < 400) {
            if (!button) {
                const newButton = createButton();
                newButton.addEventListener('click', toggleMenu);
                headerNav.appendChild(newButton);
            }
        } else {
            if (button) {
                button.remove();
                const popup = headerNav.querySelector('.pop-up-menu');
                if (popup) popup.remove();
            }
        }
    }

    // Инициализация
    handleResize();
    window.addEventListener('resize', handleResize);
});