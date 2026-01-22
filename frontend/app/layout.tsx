import "../styles/globals.css";

export const metadata = {
  title: "EchoRoom",
  description: "Community Ideas, Experiments & Reflection Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
