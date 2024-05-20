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
        <div id="wrapper">
          <TheHeader />
          {children}
          <TheFooter />
        </div>
      </body>
    </html>
  );
}
