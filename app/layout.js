import { Roboto_Condensed, Playfair_Display } from "next/font/google";
import "./globals.css";

const hero_font = Roboto_Condensed({
  subsets: ["latin"],
  fallback: "Sans_Serif",
});
const body_font = Playfair_Display({
  subsets: ["latin"],
  weight: "500",
  fallback: "Sans_Serif",
});

export const metadata = {
  title: "Pintador Desteffano",
  description:
    "Servicio de Pintador por Luciano Desteffano ubicado en Abraham Rallé , Salta, Argentina. Realiza pinturas para vario distintas neccessidades como pintando paredes tu casa o pintando el parking de tu nuevo edificio. Trabajos en Interiores, Exteriores, Obras, Dptos, Locales, ect. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={hero_font.className}>
        {children}
      </body>
    </html>
  );
}
