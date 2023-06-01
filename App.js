import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';

export default function App() {
}

function EnglishMenu({ handleContentChange }) {
  return (
    <>
      <h2>metro via virtual</h2>
      <h3>A virtual exhibition from Hong Kong</h3>
      <button onClick={() => handleContentChange(1)}>curatorial statement</button>
      <button onClick={() => handleContentChange(2)}>essay about the exhibition</button>
      <button onClick={() => handleContentChange(3)}>Autosave: Redoubt</button>
      <button onClick={() => handleContentChange(4)}>Confidential Records: Dual Metropolitans</button>
      <button onClick={() => handleContentChange(5)}>Illumination</button>
      <button onClick={() => handleContentChange(6)}>Butterflies on the Wheel</button>
      <button onClick={() => handleContentChange(7)}>Domestik/Publik</button>
    </>
  );
}

function ChineseMenu({ handleContentChange }) {
  return (
    <>
      <h2>虛擬都會</h2>
      <h3>虛擬都會</h3>
      <button onClick={() => handleContentChange(1)}>策展論</button>
      <button onClick={() => handleContentChange(2)}>自動存檔：堡壘</button>
      <button onClick={() => handleContentChange(3)}>機密錄：雙城</button>
      <button onClick={() => handleContentChange(4)}>啟示</button>
      <button onClick={() => handleContentChange(5)}>黃淑賢</button>
      <button onClick={() => handleContentChange(6)}>家居/公共</button>
    </>
  );
}