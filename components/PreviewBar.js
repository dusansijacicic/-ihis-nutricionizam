'use client';

import { useEffect, useState } from 'react';

// Oznaka koja se prikazuje samo u admin pregledu (vidi lib/preview.js).
export default function PreviewBar() {
  const [path, setPath] = useState('/rs');

  useEffect(() => {
    setPath(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="preview-bar" role="status">
      <span className="preview-bar-dot"></span>
      <span className="preview-bar-text"><strong>Admin pregled</strong> · nove izmene vide samo admini</span>
      <a href={`/api/preview?mode=off&redirect=${encodeURIComponent(path)}`}>Javna verzija</a>
      <a href="/admin">Admin panel</a>
    </div>
  );
}
