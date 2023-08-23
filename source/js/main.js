const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const sidebarOpen = document.querySelector('.sidebar-open');
const sidebarClose = document.querySelector('.sidebar-close');

sidebarOpen.addEventListener('click', () => {
  sidebar.classList.add('show');
  sidebarOverlay.classList.add('show');
});

const hideSidebar = () => {
  sidebar.classList.remove('show');
  sidebarOverlay.classList.remove('show');
};

sidebarClose.addEventListener('click', () => {
  hideSidebar();
});

sidebarOverlay.addEventListener('click', () => {
  hideSidebar();
});