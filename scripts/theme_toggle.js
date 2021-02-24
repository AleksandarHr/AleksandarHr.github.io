//  Taken from: https://radek.io/posts/secret-darkmode-toggle/

var toggle, logo, container, darkIcon, lightIcon, theme;

window.onload = function(){
  toggle = document.getElementById('toggle-input');
  lightIcon = document.getElementById('light-icon');
  darkIcon = document.getElementById('dark-icon');
  toggle.addEventListener('click', () => {
      theme = toggle.checked ? 'light' : 'dark';
      setTheme(theme, true);
      updateUI(theme);
      draw();
  });

  /* Show/hide toggle */
  logo = document.querySelector('.site-logo__logo');
  container = document.querySelector('.site-logo__toggle-container');
  logo.addEventListener('click', () => isLogoOpen() ? closeLogo() : openLogo());

  /* Set theme on load */
  // const osPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // const preferredTheme = localStorage.getItem('preferred-theme') || osPreference;
  preferredTheme = 'dark';
  setTheme(preferredTheme, false);
  updateUI(preferredTheme);
}

function setTheme(theme, persist = false) {
    const on = theme;
    const off = theme === 'light' ? 'dark' : 'light'

    const htmlEl = document.documentElement;
    htmlEl.classList.add(on);
    htmlEl.classList.remove(off);

    if (persist) {
        localStorage.setItem('preferred-theme', theme);
    }
}

function updateUI(theme) {
    toggle.checked = theme === 'light';

    /* Show the right icon */
    if (theme === 'light') {
        lightIcon.classList.add('active');
        darkIcon.classList.remove('active');
    } else {
        darkIcon.classList.add('active');
        lightIcon.classList.remove('active');
    }
}

function isLogoOpen() {
  return logo.classList.contains('site-logo__logo--open');
}

function autoClose(e) {
  if (isLogoOpen()) {
    const path = e.composedPath();
    if (path.indexOf(container) < 0 && path.indexOf(logo) < 0) {
      closeLogo();
      window.removeEventListener('click', autoClose);
    }
  }
}

function openLogo() {
  logo.classList.add('site-logo__logo--open');
  window.addEventListener('click', autoClose);
}

function closeLogo() {
  logo.classList.remove('site-logo__logo--open');
  window.removeEventListener('click', autoClose);
}
