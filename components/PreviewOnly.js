import { isPreview } from '../lib/preview';

// Prikazuje sadržaj samo u admin pregledu (vidi lib/preview.js).
export default function PreviewOnly({ children }) {
  return isPreview() ? <>{children}</> : null;
}
