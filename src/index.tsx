// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // スタイルシート（もしある場合）
import App from './App';  // Appコンポーネントをインポート

// ReactアプリをHTMLのrootにマウントする
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // public/index.html内の<div id="root"></div>にレンダリング
);
