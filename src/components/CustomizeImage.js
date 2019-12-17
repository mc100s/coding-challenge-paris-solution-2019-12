import React, { useState } from "react";

export default function CustomizeImage() {
  const [url, setUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__480.jpg"
  );
  const [size, setSize] = useState(100);
  return (
    <div>
      <h1>Customize Image</h1>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
      <br />
      <input
        type="range"
        value={size}
        onChange={e => setSize(Number(e.target.value))}
        min={0}
        max="200"
      />
      <br />
      {size} x {size}px
      <br />
      <img src={url} alt="" style={{ width: size, height: size, objectFit: "cover" }} />
    </div>
  );
}
