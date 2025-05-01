import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as createAstro, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot, s as spreadAttributes, F as Fragment } from '../chunks/astro/server_VKEFiZ0x.mjs';
import 'clsx';
/* empty css                                 */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center px-4 py-5 w-full xl:w-[1120px] shadow-md backdrop-blur bg-gray/60"> <img class="rounded-full size-14" src="https://pbs.twimg.com/profile_images/1905453319574720513/tx4FncIl_400x400.jpg" alt="agus photo"> <nav class="hidden md:flex flex-row gap-x-10 opacity-80"> <a href="#top" class="hover:text-blue-500 transition-colors">Inicio</a> <a href="#experiencia" class="hover:text-blue-500 transition-colors">Experiencia</a> <a href="#proyectos" class="hover:text-blue-500 transition-colors">Proyectos</a> <a href="#sobre-mi" class="hover:text-blue-500 transition-colors">Sobre Mi</a> <a href="mailto:agustinampo80@gmail.com" class="hover:text-blue-500 transition-colors">Contacto</a> </nav> </header>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="m-4 w-full xl:w-[1120px] mx-auto mb-10 max-w-screen-xl"> <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-center md:text-left"> <span class="text-sm text-gray-500">
© 2025
<a href="https://github.com/Aguss-Amp2" class="hover:underline">Agustin-Amposta™</a> </span> <ul class="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm font-medium text-blue-400"> <li> <a href="#sobre-mi" class="hover:underline">Sobre Mi</a> </li> <li> <a href="mailto:agustinampo80@gmail.com" class="hover:underline">Contacto</a> </li> </ul> </div> </footer>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/Footer.astro", void 0);

const $$Astro$j = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-blue-100 text-blue-800 text-xs md:text-base lg:text-xl font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/Badge.astro", void 0);

const $$Astro$i = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(` ${className} w-full mx-auto lg:w-[740px] pb-24`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$h = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$g = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/GitHub.astro", void 0);

const $$Astro$f = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/Mail.astro", void 0);

const $$Astro$e = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/10 flex justify-center items-center py-2 px-4 gap-x-2 text-xs md:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/SocialPill.astro", void 0);

const $$Astro$d = createAstro();
const $$LinkInLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LinkInLine;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/LinkInLine.astro", void 0);

const $$Astro$c = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-blue-400/100 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-blue-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white"> ${company} </h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInLine, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg> ` })}`} </div> </div>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/ExperienceItem.astro", void 0);

const $$Astro$b = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCE = [
    {
      date: "Actualmente...",
      title: "Trabajando en un Proyecto Propio",
      company: "",
      description: "Estoy Realizando un Clon de Spotify utilizando Astro, React, JavaScript",
      link: ""
    },
    {
      date: "Agosto - 2024 / Marzo - 2025",
      title: "Desarrollador Full Stack MERN",
      company: "Universidad Tecnologica Nacional UTN",
      description: "Realic\xE9 la diplomatura de Desarrollador Full Stack MERN en la UTN, donde adquir\xED s\xF3lidos conocimientos en el desarrollo web utilizando tecnolog\xEDas como MongoDB, Express.js, React y Node.js. Durante la cursada, desarroll\xE9 proyectos integrales aplicando buenas pr\xE1cticas de programaci\xF3n, manejo de bases de datos, autenticaci\xF3n, APIs REST y despliegue de aplicaciones.",
      link: ""
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCE.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/Experience.astro", void 0);

const $$Astro$a = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`<!--?xml version="1.0" encoding="UTF-8"?-->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24px" height="24px" viewBox="0 0 569 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g fill="none" fill-rule="evenodd"> <g transform="translate(-227, -256)" fill="currentColor" fill-rule="nonzero"> <g transform="translate(227, 256)"> <path d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201" id="Path"></path> <path d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539" id="Shape"></path> </g> </g> </g> </svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/React.astro", void 0);

const $$Astro$9 = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="colorCurrent" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/Tailwind.astro", void 0);

const $$Astro$8 = createAstro();
const $$NodeJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NodeJs;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="292"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"></stop><stop offset="32.88%" stop-color="#418B3D"></stop><stop offset="63.52%" stop-color="#419637"></stop><stop offset="93.19%" stop-color="#3FA92D"></stop><stop offset="100%" stop-color="#3FAE2A"></stop></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"></stop><stop offset="40.32%" stop-color="#54A044"></stop><stop offset="71.36%" stop-color="#66B848"></stop><stop offset="90.81%" stop-color="#6CC04A"></stop></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"></stop><stop offset="28.64%" stop-color="#66B848"></stop><stop offset="59.68%" stop-color="#54A044"></stop><stop offset="86.24%" stop-color="#41873F"></stop></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><mask id="d" fill="#fff"><use xlink:href="#b"></use></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"></path><mask id="g" fill="#fff"><use xlink:href="#e"></use></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/NodeJs.astro", void 0);

const $$Astro$7 = createAstro();
const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/Javascript.astro", void 0);

const $$Astro$6 = createAstro();
const $$HTML = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HTML;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/HTML.astro", void 0);

const $$Astro$5 = createAstro();
const $$Css = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"></path><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z"></path><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"></path><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/Css.astro", void 0);

const $$Astro$4 = createAstro();
const $$MongoDB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MongoDB;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/MongoDB.astro", void 0);

const $$Astro$3 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"> <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"></path> <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"></path> </svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/Link.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    REACT: {
      name: "React",
      class: "bg-blue-600 text-white",
      icon: $$React
    },
    NODE: {
      name: "Node Js",
      class: "bg-green-100 text-[#41873F]",
      icon: $$NodeJs
    },
    JAVASCRIPT: {
      name: "Javascript",
      class: "bg-yellow-100 text-black",
      icon: $$Javascript
    },
    MONGODB: {
      name: "MongoDB",
      class: "bg-green-200 text-[#41873F]",
      icon: $$MongoDB
    },
    GITHUB: {
      name: "GitHub",
      class: "rounded-full border border-white/10 bg-white/5 hover:scale-110 hover:bg-white/10 transition",
      icon: $$GitHub
    },
    LINK: {
      name: "Demo",
      class: "rounded-full border border-white/10 bg-white/5 hover:scale-110 hover:bg-white/10 transition",
      icon: $$Link
    }
  };
  const PROJECTS = [
    {
      title: "Slack Version",
      description: "Basado en Slack con dise\xF1o propio que implica crear una plataforma de comunicaci\xF3n similar a Slack, pero con un dise\xF1o personalizado. El sistema incluir\xEDa canales, mensajer\xEDa directa, area de trabajo, invitacion de usuarios , verificaciones de emails y posiblemente integraciones con otras herramientas, todo adaptado a un estilo visual \xFAnico y espec\xEDfico a mi manera espero las criticas para poder mejorar o perfeccionar lo trabajado.",
      link: "https://proyecto-final-front-rouge.vercel.app",
      github: "https://github.com/Aguss-Amp2/Proyecto-Final-Front",
      image: "/projects/project1.png",
      tags: [
        TAGS.REACT,
        TAGS.NODE,
        TAGS.JAVASCRIPT,
        TAGS.MONGODB,
        TAGS.GITHUB,
        TAGS.LINK
      ]
    }
  ];
  return renderTemplate`${PROJECTS.map(({ title, description, link, github, image, tags }) => renderTemplate`${maybeRenderHead()}<article class="pb-4"><h3 class="text-2xl font-semibold text-blue-400 mb-2">${title}</h3><p class="text-lg mb-4 text-pretty">${description}</p><ul class="flex flex-wrap gap-x-2 flex-row">${tags.map((tag) => renderTemplate`<li class="flex">${tag.name === "GitHub" || tag.name === "Demo" ? renderTemplate`<a${addAttribute(tag.name === "GitHub" ? github : link, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`flex gap-x-2 text-xs rounded-full items-center ${tag.class} my-2 py-2 px-2 hover:scale-105 transition-transform`, "class")}>${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-6" })}${tag.name}</a>` : renderTemplate`<span${addAttribute(`flex gap-x-2 text-xs rounded-full items-center ${tag.class} my-2 py-2 px-2`, "class")}>${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-6" })}${tag.name}</span>`}</li>`)}</ul><img class="rounded shadow-2xl hover:scale-102 transition-transform shadow-white/10"${addAttribute(image, "src")}${addAttribute(`Captura del Proyecto ${image}`, "alt")}></article>`)}`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/Projects.astro", void 0);

const $$Astro$2 = createAstro();
const $$BriefCase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BriefCase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/BriefCase.astro", void 0);

const $$Astro$1 = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/Code.astro", void 0);

const $$Astro = createAstro();
const $$Me = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Me;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16"> <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path> </svg>`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/components/icons/Me.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio de Agustin Amposta - Desarrollador y Programador Web", "description": "Desarrollador FullStack MERN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 " }, { "default": ($$result3) => renderTemplate` <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex-row gap-x-4 pb-6 lg:pb-10">
Hey, Soy Agustin Amposta <a href="https://www.linkedin.com/in/agustin-amposta-4a0155230/" target="_blank" rel="noopener" class="flex items-center pt-4">${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponibilidad Inmediata` })}</a> </h1> <h2 class="text-xl lg:text-2xl opacity-80 text-wrap max-w-[700px]"> <span>1 año de experiencia</span>, <span class="text-blue-400/90">Desarrollador FullStack en MERN</span>. De Buenos Aires, Argentina, <span class="opacity-75">con ganas de Nuevos Desafios</span>.
</h2> <nav class="flex gap-6 mt-8 flex-wrap"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/agustin-amposta-4a0155230/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
Linkedin
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://github.com/Aguss-Amp2" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GitHubIcon", $$GitHub, { "class": "size-4 md:size-6" })}
GitHub
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:agustinampo80@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-4 md:size-6" })}
agustinampo80@gmail.com
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia", "class": "scroll-mt-28" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "BriefCaseIcon", $$BriefCase, { "class": "size-7" })}
Experiencia Laboral
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos", "class": "scroll-mt-28" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi", "class": "scroll-mt-28" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "MeIcon", $$Me, { "class": "size-6" })}
Sobre Mi
</h2> <p class="text-1xl">Holaa Soy Agustin Amposta un <span class="text-blue-400">Desarrollador Full Stack</span> especializado en el stack <span class="text-blue-400">MERN</span> (<span class="text-green-400">MongoDB</span>, <span class="text-yellow-400">JavaScript</span>, <span class="text-blue-500">React Js</span> y <span class="text-green-300">Node Js</span>). Me apasiona el estudio constante, los desafíos que impulsan mi crecimiento profesional y el deporte, que forma parte de mi disciplina diaria. Siempre busco superarme y aprender algo nuevo en cada proyecto.</p> ` })} </main> ` })}`;
}, "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/Desktop/Proyectos/Proyecto-Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
