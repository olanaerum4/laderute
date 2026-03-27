import './globals.css';
export const metadata = { title: 'LadeRute.no', description: 'Elbil ruteplanner' };
export default function RootLayout({ children }) {
  return (<html lang="no"><head></head><body>{children}</body></html>);
}