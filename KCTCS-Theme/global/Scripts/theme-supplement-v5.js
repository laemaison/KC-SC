/* KCTCS Workforce Stores - theme-supplement-v5
   Purpose: Footer RFI mailto handler only */
(function () {
  const subjectLine = 'Storefront request for information';
  let rfiAttached = false;

  function attachRfiHandler() {
    if (rfiAttached) return;

    const meta = document.querySelector('meta[name="kctcs-rfi-email"]');
    const emailAddress = (meta?.content || '').trim();
    if (!emailAddress) return;

    const footerLink = document.querySelector('.footer-cta-button > .SC-Menu_link');
    if (!footerLink) return;

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subjectLine)}`;
    const handler = (e) => {
      const mouseEvent = e.detail?.originalEvent || e;
      if (mouseEvent.ctrlKey || mouseEvent.metaKey || mouseEvent.shiftKey || mouseEvent.button !== 0) return;
      e.preventDefault();
      footerLink.blur();
      window.location.href = mailtoUrl;
    };

    footerLink.addEventListener('sc:navigate', handler, true);
    footerLink.addEventListener('click', handler, true);
    rfiAttached = true;
  }

  document.addEventListener('DOMContentLoaded', function () {
    attachRfiHandler();
    new MutationObserver(() => {
      if (!rfiAttached) attachRfiHandler();
    }).observe(document.body, { childList: true, subtree: true });
  });
})();