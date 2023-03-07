import React, { useEffect } from 'react';
import "./event_page.scss"
function Event_page({ event_name, data }) {
  useEffect(() => {
    var s;
    const spanizeLetters = {
      settings: {
        letters: document.querySelectorAll('.js-spanize'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function(){
        s.letters.forEach(function(el) {
          var spanizer = el.textContent.trim().split("");
          el.innerHTML = '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
    spanizeLetters.init();
  }, []);

  return (
    <main>
      <section className="mast">
        <figure className="mast__bg" style={{backgroundImage: 'url(https://images6.alphacoders.com/614/614315.jpg)'}}></figure>
        <header className="mast__header">
          <h1 className="mast__title js-spanize">{event_name}</h1>
          <hr className="sep" />
          <p className="mast__text js-spanize">
            {data} 
          </p>
        </header>
      </section>
    </main>
  );
}

export default Event_page;
