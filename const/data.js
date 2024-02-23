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
    imgAntes: "/Edificio_Antes.jpg",
    imgDespues: "/Edificio_Despues.jpg",
    label: "Nuestros Favoritos",
    subtext:
      "Mira un poco sobre nuestros trabajos favoritos que hemos realizado!",
    category: 'favorites'
  },
  {
    imgAntes: "/Casa_Exterior_Antes.jpg",
    imgDespues: "/Casa_Exterior_Despues.jpg",
    label: "Trabajos en el exterior",
    subtext:
      "Disfruta unos ejemplos de los trabajos que hicimos en el exterior del lo pintado",
    category: 'exteriores'
  },
  {
    imgAntes: "/House_Antes.jpg",
    imgDespues: "/House_Despues.jpg",
    label: "Trabajos en el interior",
    subtext:
      "Disfruta unos ejemplos de los trabajos que hicimos en el exterior del lo pintado",
      category: "interiores"
  },
];

export const reviews = [
  {
    imgURL: "/headshot.jpg",
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
