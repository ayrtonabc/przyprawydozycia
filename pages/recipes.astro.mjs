import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_D7nxSSMy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_77qp9gKc.mjs';
import { $ as $$Header } from '../chunks/Header_DvXhwyGk.mjs';
import { s as supabase } from '../chunks/supabase_d8qzg9EM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: recipes } = await supabase.from("recipes").select("*").order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Przepisy - Nina Fierkowicz", "data-astro-cid-ufwbdbbi": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ufwbdbbi": true })} ${maybeRenderHead()}<main class="recipes-page" data-astro-cid-ufwbdbbi> <h1 data-astro-cid-ufwbdbbi>Przepisy</h1> <div class="recipes-grid" data-astro-cid-ufwbdbbi> ${recipes?.map((recipe) => renderTemplate`<article class="recipe-card" data-astro-cid-ufwbdbbi> <a${addAttribute(`/recipes/${recipe.id}`, "href")} class="recipe-link" data-astro-cid-ufwbdbbi> <div class="recipe-image"${addAttribute(`background-image: url(${recipe.image_url || "/images/default-recipe.jpg"})`, "style")} data-astro-cid-ufwbdbbi></div> <div class="recipe-content" data-astro-cid-ufwbdbbi> <h2 data-astro-cid-ufwbdbbi>${recipe.title}</h2> <p class="date" data-astro-cid-ufwbdbbi>${new Date(recipe.created_at).toLocaleDateString("pl-PL")}</p> <div class="description" data-astro-cid-ufwbdbbi>${unescapeHTML(recipe.description.slice(0, 150) + "...")}</div> <span class="read-more" data-astro-cid-ufwbdbbi>Czytaj więcej →</span> </div> </a> </article>`)} </div> </main> ` })} `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/recipes/index.astro", void 0);

const $$file = "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/recipes/index.astro";
const $$url = "/recipes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
