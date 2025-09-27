export const metadata = {
  title: 'PrizmChain',
  description: 'Your Web3 social curator.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
