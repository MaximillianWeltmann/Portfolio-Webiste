/**
 * Arda Durmaz - Portfolyo Başlangıç Kodları
 * EmailJS ve Chatbase için başlangıç kodları
 */

// EmailJS başlangıç kodu
(function() {
  emailjs.init("_si0zx8oQiR4khyiJ");
})();

// Chatbase entegrasyonu
(function(){
  if(!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...arguments) => {
      if(!window.chatbase.q){
        window.chatbase.q=[]
      }
      window.chatbase.q.push(arguments)
    };
    
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if(prop === "q") {
          return target.q
        }
        return (...args) => target(prop, ...args)
      }
    });
  }
  
  const onLoad = function() {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "UllZWhhgFCX7nsHBktkDq";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script)
  };
  
  if(document.readyState === "complete") {
    onLoad()
  } else {
    window.addEventListener("load", onLoad)
  }
})(); 