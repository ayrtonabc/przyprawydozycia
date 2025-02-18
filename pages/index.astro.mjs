import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent, u as unescapeHTML } from '../chunks/astro/server_D7nxSSMy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_77qp9gKc.mjs';
import { $ as $$Header } from '../chunks/Header_DvXhwyGk.mjs';
import 'clsx';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_d8qzg9EM.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-bg" data-astro-cid-bbe6dxrz></div> <div class="hero-content" data-aos="fade-up" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>Przyprawy do życia</h1> <p class="author" data-astro-cid-bbe6dxrz>Nina Fierkowicz</p> <p class="tagline" data-astro-cid-bbe6dxrz>Naturalne przyprawy i zioła, które odmienią Twoją kuchnię</p> <div class="cta-group" data-astro-cid-bbe6dxrz> <a href="tel:+48123456789" class="cta-button primary" data-astro-cid-bbe6dxrz> <span class="icon" data-astro-cid-bbe6dxrz>📞</span> <span data-astro-cid-bbe6dxrz>Zamów telefonicznie</span> </a> <a href="#produkty" class="cta-button secondary" data-astro-cid-bbe6dxrz>Zobacz produkty</a> </div> </div> <div class="scroll-indicator" data-astro-cid-bbe6dxrz> <div class="mouse" data-astro-cid-bbe6dxrz> <div class="wheel" data-astro-cid-bbe6dxrz></div> </div> <div class="arrow" data-astro-cid-bbe6dxrz></div> </div> </section> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/Hero.astro", void 0);

const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="o-nas" class="about" data-astro-cid-x2lc2h5w> <div class="about-content" data-astro-cid-x2lc2h5w> <img src="/about.jpg" alt="Nina Fierkowicz w swojej kuchni" class="about-image" data-astro-cid-x2lc2h5w> <div class="about-text" data-aos="fade-left" data-astro-cid-x2lc2h5w> <h2 class="section-title" data-astro-cid-x2lc2h5w>O mnie</h2> <p data-astro-cid-x2lc2h5w>Zapraszam Cię do mojej kaflowej kuchni i chlebowego pieca. Tutaj, w sercu natury, tworzę wyjątkowe mieszanki przypraw i ziół, które nie tylko nadają smak potrawom, ale także wspierają zdrowie i dobre samopoczucie.</p> <p data-astro-cid-x2lc2h5w>Gotujmy na ogniu, dbajmy o zdrowie, pogadajmy o życiu i świadomie korzystajmy z dobrodziejstwa przypraw.</p> <a href="tel:+48123456789" class="contact-button" data-astro-cid-x2lc2h5w>Porozmawiajmy</a> </div> </div> </section> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/AboutSection.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { title, description, image, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="product-card" data-aos="fade-up" data-astro-cid-tjdfhdqb> <div class="product-image"${addAttribute(`background-image: url(${image})`, "style")} data-astro-cid-tjdfhdqb> <div class="price-tag" data-astro-cid-tjdfhdqb>${price}</div> <div class="overlay" data-astro-cid-tjdfhdqb> <a href="tel:+48123456789" class="buy-button" data-astro-cid-tjdfhdqb> <span data-astro-cid-tjdfhdqb>Zamów teraz</span> <span class="icon" data-astro-cid-tjdfhdqb>📞</span> </a> </div> </div> <div class="product-info" data-astro-cid-tjdfhdqb> <h3 data-astro-cid-tjdfhdqb>${title}</h3> <p data-astro-cid-tjdfhdqb>${description}</p> </div> </div> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/ProductCard.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProductFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductFilter;
  const { selectedFilter } = Astro2.props;
  const filters = [
    { value: "all", label: "Wszystkie" },
    { value: "naturalne", label: "Naturalne" },
    { value: "organiczne", label: "Organiczne" },
    { value: "przyprawy", label: "Przyprawy" },
    { value: "ziola", label: "Zio\u0142a" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="filter-container" data-astro-cid-jdeevs2t> <div class="filters" data-astro-cid-jdeevs2t> ${filters.map((filter) => renderTemplate`<a${addAttribute(`?filter=${filter.value}`, "href")}${addAttribute(`filter-button ${selectedFilter === filter.value ? "active" : ""}`, "class")} data-astro-cid-jdeevs2t> ${filter.label} </a>`)} </div> </div> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/ProductFilter.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProductList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductList;
  const filter = Astro2.url.searchParams.get("filter") || "all";
  let query = supabase.from("products").select("*").order("created_at", { ascending: false });
  if (filter !== "all") {
    query = query.ilike("category", filter);
  }
  const { data: products, error } = await query;
  if (error) {
    console.error("Error fetching products:", error);
  }
  return renderTemplate`${maybeRenderHead()}<section id="productos" class="products" data-astro-cid-ccaa3nwd> <h2 data-astro-cid-ccaa3nwd>Nuestros Productos</h2> ${renderComponent($$result, "ProductFilter", $$ProductFilter, { "selectedFilter": filter, "data-astro-cid-ccaa3nwd": true })} <div class="products-grid" data-astro-cid-ccaa3nwd> ${products ? products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "title": product.title, "description": product.description || "", "image": product.image_url || "/images/default-product.jpg", "price": `${product.price.toFixed(2)} \u20AC`, "data-astro-cid-ccaa3nwd": true })}`) : renderTemplate`<p data-astro-cid-ccaa3nwd>Loading products...</p>`} </div> </section> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/ProductList.astro", void 0);

const $$Astro$1 = createAstro();
const $$RecipeCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RecipeCard;
  const { id, title, description, image, time, ingredients } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="recipe-card" data-astro-cid-esnuq5xt> <a${addAttribute(`/recipes/${id}`, "href")} class="recipe-link" data-astro-cid-esnuq5xt> <div class="recipe-image"${addAttribute(`background-image: url(${image})`, "style")} data-astro-cid-esnuq5xt></div> <div class="recipe-content" data-astro-cid-esnuq5xt> <h3 data-astro-cid-esnuq5xt>${title}</h3> ${time && renderTemplate`<p class="time" data-astro-cid-esnuq5xt>⏱️ ${time}</p>`} <p class="description" data-astro-cid-esnuq5xt>${unescapeHTML(description.slice(0, 150) + "...")}</p> ${ingredients && ingredients.length > 0 && renderTemplate`<div class="ingredients" data-astro-cid-esnuq5xt> <h4 data-astro-cid-esnuq5xt>Składniki:</h4> <ul data-astro-cid-esnuq5xt> ${ingredients.map((ingredient) => renderTemplate`<li data-astro-cid-esnuq5xt>${ingredient}</li>`)} </ul> </div>`} <span class="read-more" data-astro-cid-esnuq5xt>Czytaj więcej →</span> </div> </a> </article> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/RecipeCard.astro", void 0);

const $$RecipeList = createComponent(async ($$result, $$props, $$slots) => {
  const { data: recipes, error } = await supabase.from("recipes").select(`
    *,
    recipe_steps (
      *
    )
  `).order("created_at", { ascending: false }).limit(3);
  if (error) {
    console.error("Error fetching recipes:", error);
  }
  return renderTemplate`${maybeRenderHead()}<section id="przepisy" class="recipes" data-astro-cid-xzsbcrec> <h2 data-astro-cid-xzsbcrec>Przepisy</h2> <div class="recipes-grid" data-astro-cid-xzsbcrec> ${recipes ? recipes.map((recipe) => renderTemplate`${renderComponent($$result, "RecipeCard", $$RecipeCard, { "id": recipe.id, "title": recipe.title, "description": recipe.description, "image": recipe.image_url || "/images/default-recipe.jpg", "time": "30 minut", "data-astro-cid-xzsbcrec": true })}`) : renderTemplate`<p data-astro-cid-xzsbcrec>Loading recipes...</p>`} </div> <div class="view-all" data-astro-cid-xzsbcrec> <a href="/recipes" class="view-all-link" data-astro-cid-xzsbcrec>Zobacz wszystkie przepisy →</a> </div> </section> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/RecipeList.astro", void 0);

const $$Astro = createAstro();
const $$EventCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EventCard;
  const { title, date, location, description, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="event-card" data-astro-cid-h4bw6n5x> <div class="event-image"${addAttribute(`background-image: url(${image})`, "style")} data-astro-cid-h4bw6n5x> <div class="event-date" data-astro-cid-h4bw6n5x>${date}</div> </div> <div class="event-content" data-astro-cid-h4bw6n5x> <h3 data-astro-cid-h4bw6n5x>${title}</h3> <p class="location" data-astro-cid-h4bw6n5x>📍 ${location}</p> <p class="description" data-astro-cid-h4bw6n5x>${description}</p> <a href="tel:+48123456789" class="contact-button" data-astro-cid-h4bw6n5x>
Zapytaj o szczegóły
</a> </div> </article> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/EventCard.astro", void 0);

const $$EventList = createComponent(async ($$result, $$props, $$slots) => {
  const { data: events, error } = await supabase.from("events").select("*").gte("event_date", (/* @__PURE__ */ new Date()).toISOString()).order("event_date", { ascending: true });
  if (error) {
    console.error("Error fetching events:", error);
  }
  return renderTemplate`${maybeRenderHead()}<section id="wydarzenia" class="events" data-astro-cid-ugu5mlpi> <h2 data-astro-cid-ugu5mlpi>Nadchodzące Wydarzenia</h2> <div class="events-grid" data-astro-cid-ugu5mlpi> ${events ? events.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$EventCard, { "title": event.title, "date": new Date(event.event_date).toLocaleDateString("pl-PL"), "location": event.location, "description": event.description || "", "image": event.image_url || "/images/default-event.jpg", "data-astro-cid-ugu5mlpi": true })}`) : renderTemplate`<p data-astro-cid-ugu5mlpi>Loading events...</p>`} </div> </section> `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/EventList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Przyprawy do \u017Cycia - Nina Fierkowicz", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AboutSection", $$AboutSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ProductList", $$ProductList, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "RecipeList", $$RecipeList, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "EventList", $$EventList, { "data-astro-cid-j7pv25f6": true })} <section class="philosophy" data-astro-cid-j7pv25f6> <div class="philosophy-content" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Filozofia Pięciu Przemian</h2> <p data-astro-cid-j7pv25f6>Każda nasza mieszanka powstaje w zgodzie z zasadami Pięciu Przemian, łącząc tradycyjną wiedzę z nowoczesnymi potrzebami.</p> <div class="benefits" data-astro-cid-j7pv25f6> <div class="benefit" data-astro-cid-j7pv25f6> <span class="icon" data-astro-cid-j7pv25f6>✿</span> <h3 data-astro-cid-j7pv25f6>Naturalne</h3> <p data-astro-cid-j7pv25f6>100% organiczne składniki</p> </div> <div class="benefit" data-astro-cid-j7pv25f6> <span class="icon" data-astro-cid-j7pv25f6>❀</span> <h3 data-astro-cid-j7pv25f6>Zdrowie</h3> <p data-astro-cid-j7pv25f6>Wspierają odporność</p> </div> <div class="benefit" data-astro-cid-j7pv25f6> <span class="icon" data-astro-cid-j7pv25f6>❋</span> <h3 data-astro-cid-j7pv25f6>Tradycja</h3> <p data-astro-cid-j7pv25f6>Sprawdzone receptury</p> </div> </div> </div> </section> </main> ` })} `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/index.astro", void 0);

const $$file = "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
