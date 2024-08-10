const schema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Estar Engineers",
  url: "https://www.estar.in/",
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://www.google.co.in/search?q=estar+engineers+pvt+ltd&sca_esv=ac57164e41e9010e&sca_upv=1&sxsrf=ADLYWIJ2z4fOrNrhWYxZ6yGxba5eSKx-9Q%3A1722340488642&source=hp&ei=iNSoZsXnI77f1e8P1Ky80AQ&iflsig=AL9hbdgAAAAAZqjimO_P0_t8dD9cIIuQTcm7gq7JHZpf&gs_ssp=eJzj4tVP1zc0LCgpr6jKyzI1YLRSNagwTjQ1MjO1NEyxtEgxNUpKsTKoSDQxMjYzTTEwtDQ2NDEzN_cSTy0uSSxSSM1Lz8xLTS0qVigoK1HIKUkBAIpvF8Y&oq=estar+engineer&gs_lp=Egdnd3Mtd2l6Ig5lc3RhciBlbmdpbmVlcioCCAAyCxAuGIAEGMcBGK8BMgIQJjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESIU6UABY8y9wAHgAkAEAmAH6AaAB-gyqAQU2LjcuMbgBA8gBAPgBAZgCDqACxA3CAgQQIxgnwgIKECMYgAQYJxiKBcICCxAAGIAEGLEDGIMBwgIKEAAYgAQYQxiKBcICBRAAGIAEwgIQEAAYgAQYsQMYQxiDARiKBcICCBAAGIAEGLEDwgIIEC4YgAQYsQPCAggQLhiABBjlBMICDRAAGIAEGLEDGEMYigXCAgUQLhiABMICBxAAGIAEGAqYAwCSBwYyLjExLjGgB5OIAQ&sclient=gws-wiz{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};


export const loadSchema = () => {
 
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
 
};



