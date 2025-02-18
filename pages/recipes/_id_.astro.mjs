import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_D7nxSSMy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_77qp9gKc.mjs';
import { $ as $$Header } from '../../chunks/Header_DvXhwyGk.mjs';
import { s as supabase } from '../../chunks/supabase_d8qzg9EM.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: recipe, error } = await supabase.from("recipes").select(`
    *,
    recipe_steps (
      *
    )
  `).eq("id", id).single();
  if (!recipe) {
    return Astro2.redirect("/recipes");
  }
  if (error) {
    console.error("Error fetching recipe:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${recipe.title} - Przepisy`, "data-astro-cid-5ojdkvba": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5ojdkvba": true })} ${maybeRenderHead()}<main class="recipe-page" data-astro-cid-5ojdkvba> <article class="recipe-article" data-astro-cid-5ojdkvba> <div class="recipe-hero"${addAttribute(`background-image: url(${recipe.image_url || "/images/default-recipe.jpg"})`, "style")} data-astro-cid-5ojdkvba> <div class="hero-content" data-astro-cid-5ojdkvba> <h1 data-astro-cid-5ojdkvba>${recipe.title}</h1> <p class="date" data-astro-cid-5ojdkvba>${new Date(recipe.created_at).toLocaleDateString("pl-PL")}</p> </div> </div> <div class="recipe-content" data-astro-cid-5ojdkvba> <div class="description" data-astro-cid-5ojdkvba>${unescapeHTML(recipe.description)}</div> ${recipe.youtube_url && renderTemplate`<div class="video-container" data-astro-cid-5ojdkvba> <iframe${addAttribute(recipe.youtube_url.replace("watch?v=", "embed/"), "src")} title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-5ojdkvba></iframe> </div>`} ${recipe.recipe_steps && recipe.recipe_steps.length > 0 && renderTemplate`<div class="steps" data-astro-cid-5ojdkvba> <h2 data-astro-cid-5ojdkvba>Kroki przygotowania</h2> ${recipe.recipe_steps.sort((a, b) => a.step_number - b.step_number).map((step) => renderTemplate`<div class="step" data-astro-cid-5ojdkvba> <h3 data-astro-cid-5ojdkvba>Krok ${step.step_number}</h3> <p data-astro-cid-5ojdkvba>${step.description}</p> ${step.image_url && renderTemplate`<img${addAttribute(step.image_url, "src")}${addAttribute(`Krok ${step.step_number}`, "alt")} data-astro-cid-5ojdkvba>`} </div>`)} </div>`} </div> </article> </main> ` })} `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/recipes/[id].astro", void 0);

const $$file = "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/recipes/[id].astro";
const $$url = "/recipes/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
