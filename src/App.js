import React from "react";
import "./styles.css";
import { useState } from "react";

const books = {
  STARTUP: [
    { name: "Zero To One", rating: "5/5", singer: "Peter Theil" },
    {
      name: "The Mom Test",
      rating: "4/5",
      singer: "Rob Fitzpatrick"
    },
    { name: "Ship It", rating: "4/5", singer: "THe Product School" }
  ],

  FINANCE: [
    { name: "The Psychology Of Money", rating: "5/5", singer: "MOrgan Housel" },
    {
      name: "Rich Dad Poor Dad",
      rating: "4/5",
      singer: "Robert T Kiyosaki"
    },
    {
      name: "Stocks to Riches",
      rating: "3/5",
      singer: "Parag Parik"
    }
  ],

  SELFHELP: [
    {
      name: "Almanack Of Naval Ravikant",
      rating: "5/5",
      singer: "Eric Jorgenson"
    },
    { name: "Secret", rating: "5/5", singer: "Rohnda Byrne" },
    { name: "Rework", rating: "3/5", singer: "Jason Fried" }
  ],

  CULTURAL: [
    {
      name: "Autobiography of a yogi",
      rating: "4/5",
      singer: "Paramahamsa Yogananda"
    },
    { name: "Shiva Triology", rating: "3/5", singer: "Amish Tripati" },
    { name: "Where are we going?", rating: "3/5", singer: "Katie Zaho" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("CULTURAL");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Great books </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are my favourite books, click a genre to check out books from them{" "}
      </p>

      <div>
        {Object.keys(books).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              background: "#F87171"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[selectedGenre].map((books) => (
            <li
              key={books.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                background: "#5BC3EB"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {books.name} </div>
              <div style={{ fontSize: "smaller" }}> {books.rating} </div>
              <div style={{ fontSize: "smaller" }}> {books.singer} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
