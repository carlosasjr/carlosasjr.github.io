(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Galeria: a miniatura troca a tela do notebook ou do celular do projeto.
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const windowZoom = gallery.querySelector('.window .zoom');
    const caption = gallery.querySelector('.window-bar span:last-child');
    const phoneZoom = gallery.querySelector('.phone');
    const thumbs = gallery.querySelectorAll('.thumb');

    const show = (zoom, thumb) => {
      const img = zoom.querySelector('img');
      const apply = () => {
        img.src = thumb.dataset.src;
        img.alt = thumb.dataset.alt;
        zoom.dataset.title = thumb.dataset.title;
        zoom.setAttribute('aria-label', `Ampliar tela: ${thumb.dataset.title}`);
        zoom.classList.remove('is-swapping');
      };

      if (reduceMotion) {
        apply();
        return;
      }

      zoom.classList.add('is-swapping');
      const preload = new Image();
      preload.onload = () => setTimeout(apply, 120);
      preload.onerror = apply;
      preload.src = thumb.dataset.src;
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const isPhone = thumb.dataset.kind === 'phone';

        thumbs.forEach((other) => {
          if ((other.dataset.kind === 'phone') === isPhone) {
            other.setAttribute('aria-pressed', String(other === thumb));
          }
        });

        show(isPhone ? phoneZoom : windowZoom, thumb);

        if (!isPhone && caption) {
          caption.textContent = thumb.dataset.title;
        }
      });
    });
  });

  // Tela ampliada.
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lightboxTitle = lightbox.querySelector('[data-title]');

  document.querySelectorAll('.zoom').forEach((zoom) => {
    zoom.addEventListener('click', () => {
      const img = zoom.querySelector('img');
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      lightboxTitle.textContent = zoom.dataset.title || img.alt;
      lightbox.showModal();
    });
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  // Dica do histórico de commits.
  const tip = document.createElement('div');
  tip.className = 'tip mono';
  tip.hidden = true;
  document.body.append(tip);

  const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric', timeZone: 'UTC' });

  document.querySelectorAll('.heat-cells').forEach((cells) => {
    cells.addEventListener('pointermove', (event) => {
      const cell = event.target.closest('i');
      if (!cell) {
        tip.hidden = true;
        return;
      }

      const total = Number(cell.dataset.n);
      const when = monthName.format(new Date(`${cell.dataset.m}-15T00:00:00Z`)).replace('. de ', '/').replace(' de ', '/');
      tip.textContent = `${when}: ${total} ${total === 1 ? 'commit' : 'commits'}`;
      tip.hidden = false;

      const x = Math.min(event.clientX + 12, window.innerWidth - tip.offsetWidth - 8);
      tip.style.left = `${x}px`;
      tip.style.top = `${event.clientY - 36}px`;
    });

    cells.addEventListener('pointerleave', () => {
      tip.hidden = true;
    });
  });

  // No celular o histórico abre nos meses mais recentes.
  const scroller = document.querySelector('.heat-scroll');
  if (scroller) scroller.scrollLeft = scroller.scrollWidth;

  // Copiar e-mail.
  document.querySelectorAll('[data-copy]').forEach((button) => {
    const label = button.textContent;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = 'Copiado';
      } catch (error) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(button.previousElementSibling);
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = 'Selecionado';
      }
      setTimeout(() => {
        button.textContent = label;
      }, 2000);
    });
  });
})();
