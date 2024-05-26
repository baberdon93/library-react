import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./UI/Highlight";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__titles">
            Why choose <span className="purple">Library?</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="fa-bolt-lightning" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly"
            />

            <Highlight
              icon={<FontAwesomeIcon icon="fa-book-open" />}
              title="10,000+ Books"
              para="Library has books in all of your favorite categories."
            />

            <Highlight
              icon={<FontAwesomeIcon icon="fa-tags" />}
              title="Affordable....ish"
              para="Get your hands on popular books for as little as $10!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
