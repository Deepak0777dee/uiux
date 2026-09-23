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

  // ============================================
  // DYNAMIC MOBILE HEADER POSITIONING
  // Measures the real topbar height after render
  // so there is zero gap between topbar and header
  // ============================================
  function fixMobileHeader() {
    if (window.innerWidth > 860) return; // only on mobile

    const topbar = document.querySelector('.topbar');
    const header = document.getElementById('mainHeader');
    const mobileNav = document.getElementById('mobileNav');

    if (!topbar || !header) return;

    const topbarH = topbar.getBoundingClientRect().height;
    const headerH = header.getBoundingClientRect().height;
    const totalH   = topbarH + headerH;

    header.style.top          = topbarH + 'px';
    document.body.style.paddingTop = totalH + 'px';

    if (mobileNav) {
      mobileNav.style.top       = totalH + 'px';
      mobileNav.style.maxHeight = 'calc(100vh - ' + totalH + 'px)';
    }
  }

  // Run on load and on resize (orientation change)
  fixMobileHeader();
  window.addEventListener('resize', fixMobileHeader);

});

