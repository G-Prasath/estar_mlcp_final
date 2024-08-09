import { useEffect } from 'react';

export const loadAOS = () => {
  useEffect(() => {
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

    const loadAOS = async () => {
      try {
        await loadStylesheet('https://unpkg.com/aos@next/dist/aos.css');
        await loadScript('https://unpkg.com/aos@next/dist/aos.js');
        window.AOS.init();
      } catch (error) {
        console.error('Error loading AOS:', error);
      }
    };

    loadAOS();
  }, []);
};

export const loadTawkTo = () => {
  useEffect(() => {
    const loadTawkTo = () => {
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.defer = true;
        s1.src = "https://embed.tawk.to/6651a081981b6c5647749650/1hundlupm";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    };

    loadTawkTo();
  }, []);
};

export const loadGTM = (gtmId) => {
  useEffect(() => {
    const scriptId = 'gtm-script';

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.charset = 'UTF-8';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [gtmId]);
};


export const loadSchema = (schema) => {
  useEffect(() => {
    const scriptId = 'schema-script';
    
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.defer = true;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [schema]);
};