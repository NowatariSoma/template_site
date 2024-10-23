// src/App.tsx
import React from 'react';
import BusinessPage from './components/pages/BusinessPage';  // BusinessPageコンポーネントをインポート

const App: React.FC = () => {
  return (
    <div>
      {/* ビジネス紹介ページをレンダリング */}
      <BusinessPage />
    </div>
  );
}

export default App;
