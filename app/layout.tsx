import "./globals.css";

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body>

        <h1>JIJIJI</h1>
        { children }
      </body>
    </html>
  );
}
