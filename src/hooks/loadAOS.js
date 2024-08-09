export const loadAOS = async () => {
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const loadStylesheet = (href) => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  };

  try {
    await loadStylesheet('https://unpkg.com/aos@next/dist/aos.css');
    await loadScript('https://unpkg.com/aos@next/dist/aos.js');
    window.AOS.init();
  } catch (error) {
    console.error('Error loading AOS:', error);
  }
};
