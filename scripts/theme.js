const lightbulbElement = document.querySelector('.lightbulb-container');
lightbulbElement.addEventListener('click', changeTheme);
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.id = 'dark__theme';
    } else {
        document.body.id = '';
    }
});

function changeTheme() {
    if (document.body.id === 'dark__theme') {
        document.body.id = '';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.id = 'dark__theme';
        localStorage.setItem('theme', 'dark');
    }
}