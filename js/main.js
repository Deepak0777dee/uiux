/* ============================================
   MAIN.JS — UI Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  

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

  // CSS now handles all header layout on mobile seamlessly using .header-wrapper
});
