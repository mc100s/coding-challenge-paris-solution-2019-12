import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState([]); // [] or null
  const [selectedCelebId, setSelectedCelebId] = useState(null); // Better, instead of null: []
  const [search, setSearch] = useState("");

  // useEffect with a 2nd param === [] => function executed only after the 1st render
  useEffect(() => {
    for (let page = 1; page <= 10; page++) {
      axios
        .get(
          `https://api.themoviedb.org/3/person/popular?page=${page}&api_key=ac8d871bc92c64c3486c06e7c6f7224b`
        )
        .then(response => {
          setCelebrities(celebrities => [
            ...celebrities,
            ...response.data.results
          ]);
        });
    }
  }, []);

  // Not useful anymore because the initial value of celebrities is []
  if (!celebrities) return <div>Loading...</div>;

  const filteredCelebrities = celebrities.filter(celeb =>
    celeb.name.toUpperCase().includes(search.toUpperCase())
  );
  const selectedCeleb = celebrities.find(celeb => celeb.id === selectedCelebId);

  return (
    <div>
      <h1>Celebrities</h1>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="celebrity-row">
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                {filteredCelebrities.length}{" "}
                {filteredCelebrities.length === 1 ? "celebrity" : "celebrities"}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCelebrities.map(celeb => (
              <tr
                key={celeb.id}
                className="celebrity-table-row"
                onClick={() => setSelectedCelebId(celeb.id)}
              >
                <td>
                  <img
                    className="celeb-pic"
                    src={
                      "https://image.tmdb.org/t/p/w185/" + celeb.profile_path
                    }
                    alt=""
                  />
                </td>
                <td
                  style={{
                    fontWeight: selectedCelebId === celeb.id ? "bold" : "normal"
                  }}
                >
                  {celeb.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedCeleb && (
          <div>
            <img
              src={
                "https://image.tmdb.org/t/p/w185/" + selectedCeleb.profile_path
              }
              alt=""
            />
            <h2>{selectedCeleb.name}</h2>
            <h4>Known for</h4>
            {selectedCeleb.known_for.map(movie => (
              <div key={movie.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w185/" + movie.backdrop_path}
                  alt=""
                />
                <br />
                {movie.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(celebrities, null, 2)}
      </pre>
    </div>
  );
}
