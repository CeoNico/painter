import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export const NavLinks = [
  { id: "1", href: "#Comentarios", title: "Comentarios" },
  { id: "2", href: "#Trabajos", title: "Trabajos" },
  { id: "3", href: "#Sobre-Nosotros", title: "Sobre Nosotros" },
  { id: "4", href: "#Contacto", title: "Contacto" },
];

export const socialLinks = [
  {
    id: "1",
    image: <FaInstagram className="text-white" size={30} />,
    label: "Instagram",
    href: "https://www.instagram.com/pintura_gral_lucianodesteffano/",
  },
  {
    id: "2",
    image: <FaFacebook className="text-white" size={30} />,
    label: "Facebook",
    href: "https://www.facebook.com/PintorOficialDesteffano",
  },
  {
    id: "3",
    image: <FaWhatsapp className="text-white" size={30} />,
    label: "WhatsApp",
    href: "https://wa.me/message/JT6HBKSL3564P1",
  },
  {
    id: "4",
    image: "",
    label: "Email",
    href: "luchodesteffano@gmail.com",
  },
];

export const examples = [
  {
    imgAntes: <Image src="/Concesionaria_Antes.jpg" width={300} height={300} />,
    imgDespues: <Image src="/Concesionaria_Despues.jpg" width={300} height={300} />,
    label: "Nuestros Favoritos",
    subtext:
      "Mira un poco sobre nuestros trabajos favoritos que hemos realizado!",
  },
  {
    imgAntes: <Image src="/Casa_Exterior_Antes.jpg" width={300} height={300} />,
    imgDespues: <Image src="/Casa_Exterior_Despues.jpg" width={300} height={300} />,
    label: "Trabajos en el exterior",
    subtext:
      "Disfruta unos ejemplos de los trabajos que hicimos en el exterior del lo pintado",
  },
  {
    imgAntes: <Image src="/House_Antes.jpg" width={300} height={300} />,
    imgDespues: <Image src="/House_Despues.jpg" width={300} height={300} />,
    label: "Trabajos en el interior",
    subtext:
      "Disfruta unos ejemplos de los trabajos que hicimos en el exterior del lo pintado",
  },
];

export const reviews = [
  {
    //imgURL: Url Here,
    //logoURL: Url Here,
    customerName: "Concessionaria de Toyota",
    feedback:
      "La atención al detalle y la calidad del producto superaron mis expectativas. ¡Muy recomendable!",
  },
  {
    //imgURL: Url Here,
    //logoURL: Url Here,
    customerName: "Dueño de Immobiliaria en Salta, Alfredo",
    feedback:
      "El producto no solo cumplió sino que superó mis expectativas. ¡Definitivamente seré un cliente recurrente!",
  },
  {
    //imgURL: Url Here
    //logoURL: Url Here,
    customerName: "Dueño de Immobiliaria en Salta, Juan",
    feedback:
      "El producto no solo cumplió sino que superó mis expectativas. ¡Definitivamente seré un cliente recurrente!",
  },
];
