/* ============================================
   MAIN.JS — UI Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '100%';
      navMenu.style.left = '0';
      navMenu.style.right = '0';
      navMenu.style.background = '#fff';
      navMenu.style.padding = '1rem';
      navMenu.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
      navMenu.style.zIndex = '999';
    });
  }

  // Update Auth Links in Header based on session
  if (typeof authIsLoggedIn === 'function') {
    const topbarAuth = document.getElementById('topbar-auth');
    if (topbarAuth) {
      if (authIsLoggedIn()) {
        const user = authGetUser();
        topbarAuth.innerHTML = `
          <span>Welcome, ${user.name}</span>
          <a href="#" onclick="authLogout()" style="color:var(--yellow); font-weight:600;">Logout</a>
          <a href="dashboard.html" style="color:#fff; text-decoration:underline;">Dashboard</a>
        `;
      }
    }
  }

  // Handle Logout clicks
  const logoutBtns = document.querySelectorAll('.logout-btn');
  logoutBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof authLogout === 'function') authLogout();
    });
  });

});
