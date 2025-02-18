import { c as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, d as addAttribute, b as createAstro } from './astro/server_D7nxSSMy.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="pl"> <head><meta charset="UTF-8"><meta name="description" content="Naturalne przyprawy i zio\u0142a, produkty organiczne"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"><\/script>', "</head> <body> ", " <script>\n			AOS.init({\n				duration: 1000,\n				once: true,\n				offset: 50\n			});\n		<\/script> </body> </html> "])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
