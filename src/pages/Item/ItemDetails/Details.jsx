import React from "react";

export default function Details({ description }) {
  return (
    <div>
      <p className="text-slate-600">
        {description ? (
          description
        ) : (
          <>
            {" "}
            A hamburger, or simply burger, is a food consisting of fillings—
            usually a patty of ground meat, typically beef—placed inside a
            sliced bun or bread roll. Hamburgers are often served with cheese,
            lettuce, tomato, onion, pickles, bacon, or chilis; condiments such
            as ketchup, mustard, mayonnaise, relish, or a "special sauce," often
            a variation of Thousand Island dressing; and are frequently placed
            on sesame seed buns.
            <br />
            <br />
            Food is one of the basic necessities of life. Food contains
            nutrients—substances essential for the growth, repair and for the
            regulation of vital processes. Nutrients provide the energy our
            bodies need to function.
          </>
        )}
      </p>
    </div>
  );
}
