(() => {
  const content = window.RESTAURANT_CONTENT;

  document.querySelectorAll('[data-content]').forEach((element) => {
    const value = content.restaurant[element.dataset.content];
    if (value) element[element.dataset.content === 'headline' ? 'innerHTML' : 'textContent'] = value.replace('\n', '<br>');
  });

  document.querySelectorAll('[data-link="phone"]').forEach((link) => link.href = `tel:${content.restaurant.phoneHref}`);
  document.querySelectorAll('[data-link="maps"]').forEach((link) => link.href = content.restaurant.mapsHref);

  const tabs = document.querySelector('.menu-tabs');
  const menuList = document.querySelector('.menu-list');

  function renderMenu(index) {
    const group = content.menu[index];
    menuList.innerHTML = group.items.map((item) => `
      <article class="menu-item">
        <div><h3>${item.name}</h3><p>${item.note}</p></div>
        <span>${item.price}</span>
      </article>`).join('');
    tabs.querySelectorAll('button').forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
  }

  content.menu.forEach((group, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.role = 'tab';
    button.textContent = group.category;
    button.addEventListener('click', () => renderMenu(index));
    tabs.appendChild(button);
  });
  renderMenu(0);

  function track(eventName) {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: eventName, demo: 'restaurante_almar' });
  }

  document.querySelectorAll('[data-event]').forEach((element) => {
    element.addEventListener('click', () => track(element.dataset.event));
  });

  const toast = document.querySelector('.toast');
  document.querySelector('.demo-contact').addEventListener('click', () => {
    toast.classList.add('visible');
    window.setTimeout(() => toast.classList.remove('visible'), 2600);
  });

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 32), { passive: true });
})();
