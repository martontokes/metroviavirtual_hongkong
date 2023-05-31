import React, { useState, useEffect } from 'react';

export default function App() {
  const [isWelcome, setWelcome] = useState(true);
  const [isEnglish, setEnglish] = useState(undefined);

  return (
    <>
      {isWelcome ? (
        <Welcome setWelcome={setWelcome} setEnglish={setEnglish} />
      ) : (
        <Content isEnglish={isEnglish} />
      )}
    </>
  );
}

function Welcome({ setWelcome, setEnglish }) {
  return (
    <>
      <h1>metro via virtual</h1>
      <h1>a virtual exhibition from Hong Kong</h1>
      <button onClick={() => { setWelcome(false); setEnglish(true); }}>enter exhibition</button>
      <h1>虛擬都會</h1>
      <h1>來自香港的線上展覽</h1>
      <button onClick={() => { setWelcome(false); setEnglish(false); }}>進入展覽</button>

    </>
  );
}

function Content({ isEnglish }) {
  if (isEnglish) {
    return <EnglishContent />;
  } else {
    return <ChineseContent />;
  }
}

function EnglishContent() {
  return <h1>English Content Rendered</h1>;
}

function ChineseContent() {
  return <h1>Chinese Content Rendered</h1>;
}