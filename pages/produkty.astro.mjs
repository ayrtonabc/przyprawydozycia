import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D7nxSSMy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_77qp9gKc.mjs';
import { $ as $$Header } from '../chunks/Header_DvXhwyGk.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Produkty = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      name: "Mieszanka Zi\xF3\u0142 do Herbaty",
      description: "Zawiera: traw\u0119 pospolit\u0105, bylic\u0119 estragon, galgant, bertram, koper, li\u015B\u0107 laurowy, majeranek, melis\u0119, tymianek",
      price: "29,99 z\u0142"
    },
    {
      name: "Kawa Lani Coffee",
      description: "Specjalna mieszanka kawy z aromatycznymi przyprawami",
      price: "39,99 z\u0142"
    },
    {
      name: "Przyprawy do Chleba",
      description: "Tradycyjna mieszanka do wypieku domowego chleba",
      price: "24,99 z\u0142"
    },
    {
      name: "Herbata 'Siedmiu Z\u0142odziei'",
      description: "Unikalna mieszanka z galgantem i bertramem",
      price: "34,99 z\u0142"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Produkty - Kaflowa Kuchnia", "data-astro-cid-z52sddz2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-z52sddz2": true })} ${maybeRenderHead()}<main data-astro-cid-z52sddz2> <h1 data-astro-cid-z52sddz2>Nasze Produkty</h1> <div class="products-grid" data-astro-cid-z52sddz2> ${products.map((product) => renderTemplate`<div class="product-card" data-astro-cid-z52sddz2> <h2 data-astro-cid-z52sddz2>${product.name}</h2> <p data-astro-cid-z52sddz2>${product.description}</p> <p class="price" data-astro-cid-z52sddz2>${product.price}</p> <a href="tel:+48123456789" class="order-button" data-astro-cid-z52sddz2>Zamów telefonicznie</a> </div>`)} </div> </main> ` })} `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/produkty.astro", void 0);

const $$file = "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/produkty.astro";
const $$url = "/produkty";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Produkty,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
