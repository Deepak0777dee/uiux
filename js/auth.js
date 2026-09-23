/* ============================================
   AUTH.JS — Authentication & RBAC
   Roles: admin, student
   Online Education Platform
   ============================================ */

const AUTH_KEY = 'edu_platform_auth';
const USERS_DB_KEY = 'edu_platform_users';

function getUsers() {
  let users = JSON.parse(localStorage.getItem(USERS_DB_KEY));
  if (!users || users.length === 0) {
    users = [
      { id: 1, name: 'Admin User', email: 'admin@edu.com', password: 'Admin@123', role: 'admin', phone: '555-0001', createdAt: '2026-01-01' },
      { id: 2, name: 'Jane Student', email: 'student@edu.com', password: 'Student@123', role: 'student', phone: '555-0002', createdAt: '2026-02-15' }
    ];
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
  }
  return users;
}

function saveUsers(users) {
  localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
}

function authLogin(email, password, role = 'student') {
  const users = getUsers();
  let user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (!user) {
    user = { id: Date.now(), name: email.split('@')[0], email, password, role, phone: '', createdAt: new Date().toISOString().split('T')[0] };
    users.push(user);
    saveUsers(users);
  } else {
    // For skeleton demo, just update their role dynamically if requested
    user.role = role;
    saveUsers(users);
  }
  
  const session = { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone };
  localStorage.setItem(AUTH_KEY, JSON.stringify(session));
  return { success: true, user: session };
}

function authSignup(name, email, password, phone, role = 'student') {
  const users = getUsers();
  const newUser = {
    id: Date.now(), name, email, password,
    role: role, phone: phone || '',
    createdAt: new Date().toISOString().split('T')[0],
  };
  users.push(newUser);
  saveUsers(users);
  const session = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role, phone: newUser.phone };
  localStorage.setItem(AUTH_KEY, JSON.stringify(session));
  return { success: true, user: session };
}

function authLogout() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = 'login.html';
}

function authIsLoggedIn() {
  return !!localStorage.getItem(AUTH_KEY);
}

function authGetUser() {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
}

function authIsAdmin() {
  const user = authGetUser();
  return user && user.role === 'admin';
}

/* RBAC: Protect backoffice routes */
function authProtectRoute(requiredRole) {
  if (!authIsLoggedIn()) {
    window.location.href = 'login.html';
    return false;
  }
  if (requiredRole === 'admin' && !authIsAdmin()) {
    window.location.href = 'dashboard.html';
    return false;
  }
  return true;
}

/* RBAC: Hide/show UI elements based on role */
function authApplyRBAC() {
  const user = authGetUser();
  if (!user) return;

  document.querySelectorAll('[data-role="admin-only"]').forEach(el => {
    el.style.display = user.role === 'admin' ? '' : 'none';
  });

  const setTextById = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setTextById('sb-role', user.role.toUpperCase());
  setTextById('sb-email', user.email);
  setTextById('topbar-name', user.name);
  setTextById('topbar-email', user.email);
}

/* Toast Notification */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = '0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Auto-apply RBAC on load if it's a dashboard page
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.dashboard-layout')) {
    authApplyRBAC();
  }
});
