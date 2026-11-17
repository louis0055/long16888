(() => {
  const pixelIds = ["1639839471211949", "2481927949280959"];

  if (!window.fbq) {
    const fbq = function () {
      if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments);
      else fbq.queue.push(arguments);
    };

    window.fbq = fbq;
    window._fbq ||= fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.append(script);
  }

  for (const id of pixelIds) window.fbq("init", id);
  window.fbq("track", "PageView");

  for (const link of document.querySelectorAll('a[href="https://lin.ee/Oyo0OTM"]')) {
    link.addEventListener("click", () => window.fbq("trackCustom", "LineClick"));
  }
})();