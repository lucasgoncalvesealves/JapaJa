import "./globals.css";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export const metadata = {
  title: {
    template: 'JAPA JÁ | %s',
    default: 'JAPA JÁ',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        {children}
        <script async src="https://cse.google.com/cse.js?cx=d38731f1cf69b44da"></script>
        <TheFooter />
      </body>
    </html>
  );
}
