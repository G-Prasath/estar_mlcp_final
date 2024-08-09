export const loadGTM = (gtmId) => {
  const scriptId = 'gtm-script';
  // Check if the script is already added
  if (document.getElementById(scriptId)) {
    return;
  }
  // Create the script element
  const script = document.createElement('script');
  script.id = scriptId;
  script.defer = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  script.charset = 'UTF-8';
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);

  // Initialize the dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
};

