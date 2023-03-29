import React, { useEffect, useState } from 'react';
import "./event_page.scss"

function Event_page({ event_name, description, rules, registration }) {
  const [stateValue, setStateValue] = useState(description);
  const [shouldRunEffect, setShouldRunEffect] = useState(true);
  const [subtitle, setSubtitle] = useState("description");

  useEffect(() => {
    const spanizeWords = {
      settings: {
        words: document.querySelectorAll('.js-spanize'),
      },
      init: function() {
        this.bindEvents();
      },
      bindEvents: function(){
        const words = Array.from(this.settings.words);
        words.forEach(function(el) {
          const spanizer = el.innerHTML.trim().split(" ").map(function(word) {
            if (word === '&lt;br&gt;' || word === '<br>') {
              return '<br></br>';
            } else {
              return '<span>' + word + '</span> <span> </span>';
            }
          }).join("");
          el.innerHTML = spanizer;
        });
      },
    };
    spanizeWords.init();

    return () => {
      const words = Array.from(spanizeWords.settings.words);
      words.forEach(function(el) {
        el.innerHTML = el.textContent;
      });
    };
  }, [stateValue, shouldRunEffect]);
    
  const handleClickRules = () => {
    setStateValue(rules);
    setSubtitle("rules")
    setShouldRunEffect(true);
  };

  const handleClickDescription = () => {
    setStateValue(description);
    setSubtitle("description")
    setShouldRunEffect(true);
  };

  const handleClickRegister = () => {
    setStateValue(registration);
    setSubtitle("register")
    setShouldRunEffect(true);
  };

  const styles4={
    height:'100vh'
  }

  const text = stateValue;

  return (
    <main className='event_info_main' style={styles4}>
      <section className="mast">
        <figure className="mast__bg" style={{backgroundImage: 'url(https://images6.alphacoders.com/614/614315.jpg)'}}></figure>
        <header className="mast__header">
          <h1 className="mast__title js-spanize">{event_name}</h1>
          <hr className="sep" />
          <h3 className="mast__title js-spanize subtitle">{subtitle}</h3>
          <div className='textbox'>
          <p className="contents" dangerouslySetInnerHTML={{__html: text}}/>
          </div>
        </header>
      </section>
      <div className='bottom'>     
          <div className="svg-wrapper">
  <a className='button' onClick={handleClickDescription}>About</a>
  <svg xmlns="http://www.w3.org/2000/svg">
  <rect id="shape" />
  </svg>
</div>
{/* Next button */}
<div className="svg-wrapper">
  <a className='button' onClick={handleClickRules}>Rules</a>
  <svg xmlns="http://www.w3.org/2000/svg">
  <rect id="shape" />
  </svg>
</div>
{/* Next button */}
<div className="svg-wrapper">
  <a className='button' onClick={handleClickRegister}>Register</a>
  <svg xmlns="http://www.w3.org/2000/svg">
  <rect id="shape" />
  </svg>
</div>
</div>

    </main>
    
  );
}

export default Event_page;
