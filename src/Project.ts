import ReactIcon from "./components/icons/React.astro";
import TailwindIcon from "./components/icons/Tailwind.astro";
import NodeJsIcon from "./components/icons/NodeJs.astro";
import JavascriptIcon from "./components/icons/Javascript.astro";
import HtmlIcon from "./components/icons/HTML.astro";
import CssIcon from "./components/icons/Css.astro";
import MongoDBIcon from "./components/icons/MongoDB.astro";
import GitHubIcon from "./components/icons/GitHub.astro";
import LinkIcon from "./components/icons/Link.astro";

const TAGS = {
    REACT: {
        name: "React",
        class: "bg-blue-600 text-white",
        icon: ReactIcon,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: TailwindIcon,
    },
    NODE: {
        name: "Node Js",
        class: "bg-green-100 text-[#41873F]",
        icon: NodeJsIcon,
    },
    JAVASCRIPT: {
        name: "Javascript",
        class: "bg-yellow-100 text-black",
        icon: JavascriptIcon,
    },
    HTML: {
        name: "HTML 5",
        class: "bg-orange-100 text-black",
        icon: HtmlIcon,
    },
    CSS: {
        name: "CSS",
        class: "bg-blue-100 text-black",
        icon: CssIcon,
    },
    MONGODB: {
        name: "MongoDB",
        class: "bg-green-200 text-[#41873F]",
        icon: MongoDBIcon,
    },
    GITHUB: {
        name: "GitHub",
        class:
            "rounded-full border border-white/10 bg-white/5 hover:scale-110 hover:bg-white/10 transition",
        icon: GitHubIcon,
    },
    LINK: {
        name: "Demo",
        class:
            "rounded-full border border-white/10 bg-white/5 hover:scale-110 hover:bg-white/10 transition",
        icon: LinkIcon,
    },
};

export const PROJECTS = [
    {
        title: "Slack Version",
        description:
            "Basado en Slack con diseño propio que implica crear una plataforma de comunicación similar a Slack, pero con un diseño personalizado. El sistema incluiría canales, mensajería directa, área de trabajo, invitación de usuarios, verificaciones de emails y posiblemente integraciones con otras herramientas, todo adaptado a un estilo visual único. Espero críticas para poder mejorar o perfeccionar lo trabajado.",
        link: "https://proyecto-final-front-rouge.vercel.app",
        github: "https://github.com/Aguss-Amp2/Proyecto-Final-Front",
        image: "/projects/project1.png",
        tags: [
            TAGS.REACT,
            TAGS.NODE,
            TAGS.JAVASCRIPT,
            TAGS.MONGODB,
            TAGS.GITHUB,
            TAGS.LINK,
        ],
    },
    {
        title: "Clon Front Spotify",
        description:
            "Este proyecto tiene como objetivo recrear la interfaz de usuario de Spotify, enfocándose en su diseño limpio, funcional y moderno. El sistema contará con una barra de navegación lateral para acceder a las distintas secciones, un reproductor de música fijo en la parte inferior.",
        link: "https://clon-spotify-virid.vercel.app",
        github: "https://github.com/Aguss-Amp2/Clon-Spotify",
        image: "/projects/project2.png",
        tags: [
            TAGS.REACT,
            TAGS.TAILWIND,
            TAGS.JAVASCRIPT,
            TAGS.GITHUB,
            TAGS.LINK,
        ],
    },
];