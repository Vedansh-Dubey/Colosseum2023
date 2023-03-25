import React, { useEffect } from "react";
import "./EventCards.scss";
import $ from 'jquery';
import { Link } from 'react-router-dom'

const EventCards = () => {

  useEffect(() => {
    var x;
    var $cards = $(".card");
    var $style = $(".hover");

    $cards
      .on("mousemove touchmove", function (e) {
        // normalise touch/mouse
        var pos = [e.offsetX, e.offsetY];
        e.preventDefault();
        if (e.type === "touchmove") {
          pos = [e.touches[0].clientX, e.touches[0].clientY];
        }
        var $card = $(this);
        // math for mouse position
        var l = pos[0];
        var t = pos[1];
        var h = $card.height();
        var w = $card.width();
        var px = Math.abs(Math.floor(100 / w * l) - 100);
        var py = Math.abs(Math.floor(100 / h * t) - 100);
        var pa = (50 - px) + (50 - py);
        // math for gradient / background positions
        var lp = (50 + (px - 50) / 1.5);
        var tp = (50 + (py - 50) / 1.5);
        var px_spark = (50 + (px - 50) / 7);
        var py_spark = (50 + (py - 50) / 7);
        var p_opc = 20 + (Math.abs(pa) * 1.5);
        var ty = ((tp - 50) / 2) * -1;
        var tx = ((lp - 50) / 1.5) * .5;
        // css to apply for active card
        var grad_pos = `background-position: ${lp}% ${tp}%;`
        var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
        var opc = `opacity: ${p_opc / 100};`
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
        // need to use a <style> tag for psuedo elements
        var style = `
        .card:hover:before { ${grad_pos} }  /* gradient */
        .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
      `
        // set / apply css class and style
        $cards.removeClass("active");
        $card.removeClass("animated");
        $card.attr("style", tf);
        $style.html(style);
        if (e.type === "touchmove") {
          return false;
        }
        clearTimeout(x);
      }).on("mouseout touchend touchcancel", function () {
        // remove css, apply custom animation on end
        var $card = $(this);
        $style.html("");
        $card.removeAttr("style");
        x = setTimeout(function () {
          $card.addClass("animated");
        }, 2500);
      });
  }, []);


  const styles = {
    overflow: 'hidden',
  };


  const styles3 = {
    paddingBlockStart: '65px'
  };

  return (
    <main style={styles}>
      <div className="Events">
        <h2 className="heading">
          Adventures
        </h2>
      </div>
      <div className="Section" style={{
        overflow: 'hidde',
        position: 'relative',
        top: '10vh',
      }}>
        <section className="cards">
          <Link to="/events/1" className="card firstevent animated" data-text="first event"></Link>
          <Link to="/events/2" className="card secondevent animated"></Link>
          <Link to="/events/3" className="card thirdevent animated"></Link>
          <div className="card firstbuffer animated"></div>
        </section>
      </div>
      <div className="Section" style={styles3}>
        <section className="cards">
          <Link to="/events/4" className="card fourthevent animated"></Link>
          <Link to="/events/5" className="card fifthevent animated"></Link>
          <Link to="/events/6" className="card sixthevent animated"></Link>
          <div className="card secondbuffer animated"></div>
        </section>
      </div>
      <style className="hover"></style>
    </main>
  );
};

export default EventCards;
