export const loadTawkTo = () => {
  // Create the script element
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://embed.tawk.to/6651a081981b6c5647749650/1hundlupm";
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");

  // Insert the script element into the DOM
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);
};
