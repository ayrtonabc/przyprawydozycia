import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D7nxSSMy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_77qp9gKc.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as supabase } from '../chunks/supabase_d8qzg9EM.mjs';
import { s as styles, a as styles$1, b as styles$2 } from '../chunks/index.b5db7371_CoHy-6E1.mjs';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
export { renderers } from '../renderers.mjs';

function ImageUpload({ onImageUpload, currentImage }) {
  const [preview, setPreview] = useState(currentImage || "");
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: styles.imageUpload, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleFileChange,
        className: styles.fileInput
      }
    ),
    preview && /* @__PURE__ */ jsx("div", { className: styles.imagePreview, children: /* @__PURE__ */ jsx("img", { src: preview, alt: "Preview" }) })
  ] });
}

async function uploadImage(file, bucket) {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;
    const { error: uploadError, data } = await supabase.storage.from(bucket).upload(filePath, file);
    if (uploadError) {
      console.error("Error uploading image:", uploadError);
      return null;
    }
    const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return publicUrl;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

const CATEGORIES = [
  { value: "naturalne", label: "Naturalne" },
  { value: "organiczne", label: "Organiczne" },
  { value: "przyprawy", label: "Przyprawy" },
  { value: "ziola", label: "Zioła" }
];
function ProductForm({ onSuccess, initialProduct }) {
  const [formData, setFormData] = useState({
    title: initialProduct?.title || "",
    description: initialProduct?.description || "",
    price: initialProduct?.price?.toString() || "",
    image_url: initialProduct?.image_url || "",
    category: initialProduct?.category || "naturalne"
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let imageUrl = formData.image_url;
    if (selectedFile) {
      const uploadedUrl = await uploadImage(selectedFile, "products");
      if (uploadedUrl) {
        imageUrl = uploadedUrl;
      }
    }
    const productData = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      image_url: imageUrl,
      category: formData.category
    };
    const { error } = initialProduct ? await supabase.from("products").update(productData).eq("id", initialProduct.id) : await supabase.from("products").insert([productData]);
    if (!error) {
      setFormData({ title: "", description: "", price: "", image_url: "", category: "naturalne" });
      setSelectedFile(null);
      onSuccess();
    } else {
      console.error("Error al guardar el producto:", error);
    }
    setLoading(false);
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: styles$1.form, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$1.formGroup, children: [
      /* @__PURE__ */ jsx("label", { className: styles$1.label, children: "Zdjęcie produktu" }),
      /* @__PURE__ */ jsx(
        ImageUpload,
        {
          onImageUpload: (file) => setSelectedFile(file),
          currentImage: formData.image_url
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.formGroup, children: [
      /* @__PURE__ */ jsx("label", { className: styles$1.label, children: "Nazwa produktu" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: formData.title,
          onChange: (e) => setFormData({ ...formData, title: e.target.value }),
          required: true,
          className: styles$1.input
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.formGroup, children: [
      /* @__PURE__ */ jsx("label", { className: styles$1.label, children: "Kategoria" }),
      /* @__PURE__ */ jsx(
        "select",
        {
          value: formData.category,
          onChange: (e) => setFormData({ ...formData, category: e.target.value }),
          required: true,
          className: styles$1.select,
          children: CATEGORIES.map((category) => /* @__PURE__ */ jsx("option", { value: category.value, children: category.label }, category.value))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.formGroup, children: [
      /* @__PURE__ */ jsx("label", { className: styles$1.label, children: "Opis" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          value: formData.description,
          onChange: (e) => setFormData({ ...formData, description: e.target.value }),
          required: true,
          className: styles$1.input
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.formGroup, children: [
      /* @__PURE__ */ jsx("label", { className: styles$1.label, children: "Cena (PLN)" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          step: "0.01",
          value: formData.price,
          onChange: (e) => setFormData({ ...formData, price: e.target.value }),
          required: true,
          className: styles$1.input
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: styles$1.submitBtn, disabled: loading, children: loading ? "Zapisywanie..." : initialProduct ? "Zapisz zmiany" : "Dodaj produkt" })
  ] });
}

function ProductManager() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  useEffect(() => {
    loadProducts();
  }, []);
  async function loadProducts() {
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (data) setProducts(data);
  }
  async function deleteProduct(id) {
    if (!confirm("Czy na pewno chcesz usunąć ten produkt?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (!error) {
      loadProducts();
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: styles$2.productManager, children: [
    /* @__PURE__ */ jsx("h2", { children: "Zarządzanie Produktami" }),
    editingProduct ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setEditingProduct(null),
          className: styles$2.backButton,
          children: "← Wróć do listy"
        }
      ),
      /* @__PURE__ */ jsx(
        ProductForm,
        {
          onSuccess: () => {
            loadProducts();
            setEditingProduct(null);
          },
          initialProduct: editingProduct
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ProductForm, { onSuccess: loadProducts }),
      /* @__PURE__ */ jsxs("div", { className: styles$2.productsList, children: [
        /* @__PURE__ */ jsx("h3", { children: "Istniejące Produkty" }),
        products.map((product) => /* @__PURE__ */ jsxs("div", { className: styles$2.productItem, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$2.productInfo, children: [
            product.image_url && /* @__PURE__ */ jsx(
              "img",
              {
                src: product.image_url,
                alt: product.title,
                className: styles$2.productThumbnail
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { children: product.title }),
              /* @__PURE__ */ jsx("p", { children: product.description }),
              /* @__PURE__ */ jsxs("p", { className: styles$2.price, children: [
                product.price,
                " zł"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$2.actions, children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setEditingProduct(product),
                className: styles$2.editButton,
                children: "Edytuj"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => deleteProduct(product.id),
                className: styles$2.deleteButton,
                children: "Usuń"
              }
            )
          ] })
        ] }, product.id))
      ] })
    ] })
  ] });
}

function EventForm({ onSuccess, initialEvent }) {
  const [formData, setFormData] = useState({
    title: initialEvent?.title || "",
    description: initialEvent?.description || "",
    location: initialEvent?.location || "",
    maps_url: initialEvent?.maps_url || "",
    image_url: initialEvent?.image_url || "",
    event_date: initialEvent?.event_date ? new Date(initialEvent.event_date).toISOString().slice(0, 16) : ""
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let imageUrl = formData.image_url;
    if (selectedFile) {
      const uploadedUrl = await uploadImage(selectedFile, "events");
      if (uploadedUrl) {
        imageUrl = uploadedUrl;
      }
    }
    const eventData = {
      title: formData.title,
      description: formData.description,
      location: formData.location,
      maps_url: formData.maps_url,
      image_url: imageUrl,
      event_date: formData.event_date
    };
    const { error } = initialEvent ? await supabase.from("events").update(eventData).eq("id", initialEvent.id) : await supabase.from("events").insert([eventData]);
    if (!error) {
      setFormData({
        title: "",
        description: "",
        location: "",
        maps_url: "",
        image_url: "",
        event_date: ""
      });
      setSelectedFile(null);
      onSuccess();
    } else {
      console.error("Error al guardar el evento:", error);
    }
    setLoading(false);
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "form", children: [
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "Zdjęcie wydarzenia" }),
      /* @__PURE__ */ jsx(
        ImageUpload,
        {
          onImageUpload: (file) => setSelectedFile(file),
          currentImage: formData.image_url
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "Nazwa wydarzenia" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: formData.title,
          onChange: (e) => setFormData({ ...formData, title: e.target.value }),
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "Opis" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          value: formData.description,
          onChange: (e) => setFormData({ ...formData, description: e.target.value }),
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "Lokalizacja" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: formData.location,
          onChange: (e) => setFormData({ ...formData, location: e.target.value }),
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "Link do Google Maps" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "url",
          value: formData.maps_url,
          onChange: (e) => setFormData({ ...formData, maps_url: e.target.value }),
          placeholder: "https://goo.gl/maps/..."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { children: "Data i godzina wydarzenia" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "datetime-local",
          value: formData.event_date,
          onChange: (e) => setFormData({ ...formData, event_date: e.target.value }),
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "submit-btn", disabled: loading, children: loading ? "Zapisywanie..." : initialEvent ? "Zapisz zmiany" : "Dodaj wydarzenie" }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .form {
          max-width: 600px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        textarea {
          min-height: 100px;
          resize: vertical;
        }

        .submit-btn {
          background: var(--primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          width: 100%;
        }

        .submit-btn:hover {
          opacity: 0.9;
        }
      ` })
  ] });
}

function EventManager() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  useEffect(() => {
    loadEvents();
  }, []);
  async function loadEvents() {
    const { data } = await supabase.from("events").select("*").order("event_date", { ascending: true });
    if (data) setEvents(data);
  }
  async function deleteEvent(id) {
    if (!confirm("Czy na pewno chcesz usunąć to wydarzenie?")) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (!error) {
      loadEvents();
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "event-manager", children: [
    /* @__PURE__ */ jsx("h2", { children: "Zarządzanie Wydarzeniami" }),
    editingEvent ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setEditingEvent(null),
          className: "back-button",
          children: "← Wróć do listy"
        }
      ),
      /* @__PURE__ */ jsx(
        EventForm,
        {
          onSuccess: () => {
            loadEvents();
            setEditingEvent(null);
          },
          initialEvent: editingEvent
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(EventForm, { onSuccess: loadEvents }),
      /* @__PURE__ */ jsxs("div", { className: "events-list", children: [
        /* @__PURE__ */ jsx("h3", { children: "Nadchodzące Wydarzenia" }),
        events.map((event) => /* @__PURE__ */ jsxs("div", { className: "event-item", children: [
          /* @__PURE__ */ jsxs("div", { className: "event-info", children: [
            event.image_url && /* @__PURE__ */ jsx(
              "img",
              {
                src: event.image_url,
                alt: event.title,
                className: "event-thumbnail"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { children: event.title }),
              /* @__PURE__ */ jsx("p", { children: event.description }),
              /* @__PURE__ */ jsxs("p", { className: "location", children: [
                "📍 ",
                event.location
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "date", children: [
                "📅 ",
                new Date(event.event_date).toLocaleDateString("pl-PL")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "actions", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setEditingEvent(event),
                className: "edit-button",
                children: "Edytuj"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => deleteEvent(event.id),
                className: "delete-button",
                children: "Usuń"
              }
            )
          ] })
        ] }, event.id))
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .event-manager {
          padding: 1rem;
        }

        .events-list {
          margin-top: 2rem;
        }

        .event-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin-bottom: 1rem;
          background: white;
        }

        .event-info {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .event-thumbnail {
          width: 120px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
        }

        .actions {
          display: flex;
          gap: 0.5rem;
        }

        .edit-button {
          background: var(--accent);
          color: var(--text);
        }

        .delete-button {
          background: #ff4444;
          color: white;
        }

        .back-button {
          margin-bottom: 1rem;
          background: var(--accent);
          color: var(--text);
        }

        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .location, .date {
          color: var(--secondary);
          margin: 0.25rem 0;
        }
      ` })
  ] });
}

function RecipeEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor: editor2 }) => {
      onChange(editor2.getHTML());
    }
  });
  if (!editor) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "recipe-editor", children: [
    /* @__PURE__ */ jsxs("div", { className: "editor-toolbar", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => editor.chain().focus().toggleBold().run(),
          className: editor.isActive("bold") ? "is-active" : "",
          children: "B"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => editor.chain().focus().toggleItalic().run(),
          className: editor.isActive("italic") ? "is-active" : "",
          children: "I"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => editor.chain().focus().toggleBulletList().run(),
          className: editor.isActive("bulletList") ? "is-active" : "",
          children: "• List"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(EditorContent, { editor }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .recipe-editor {
          border: 1px solid #ddd;
          border-radius: 4px;
          overflow: hidden;
        }

        .editor-toolbar {
          padding: 0.5rem;
          border-bottom: 1px solid #ddd;
          background: #f5f5f5;
        }

        button {
          margin-right: 0.5rem;
          padding: 0.25rem 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          background: white;
          cursor: pointer;
        }

        button.is-active {
          background: var(--primary);
          color: white;
        }

        :global(.ProseMirror) {
          padding: 1rem;
          min-height: 200px;
          outline: none;
        }

        :global(.ProseMirror p) {
          margin: 0.5rem 0;
        }
      ` })
  ] });
}

function RecipeStepForm({ steps, onStepsChange }) {
  const addStep = () => {
    onStepsChange([...steps, { description: "", image_url: "" }]);
  };
  const removeStep = (index) => {
    onStepsChange(steps.filter((_, i) => i !== index));
  };
  const updateStep = (index, updates) => {
    onStepsChange(
      steps.map((step, i) => i === index ? { ...step, ...updates } : step)
    );
  };
  const handleImageUpload = async (index, file) => {
    const imageUrl = await uploadImage(file, "recipe-steps");
    if (imageUrl) {
      updateStep(index, { image_url: imageUrl });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "recipe-steps", children: [
    steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "step", children: [
      /* @__PURE__ */ jsxs("div", { className: "step-header", children: [
        /* @__PURE__ */ jsxs("h4", { children: [
          "Krok ",
          index + 1
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => removeStep(index),
            className: "remove-btn",
            children: "Usuń"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Opis kroku" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: step.description,
            onChange: (e) => updateStep(index, { description: e.target.value }),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Zdjęcie kroku (opcjonalnie)" }),
        /* @__PURE__ */ jsx(
          ImageUpload,
          {
            onImageUpload: (file) => handleImageUpload(index, file),
            currentImage: step.image_url
          }
        )
      ] })
    ] }, index)),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: addStep,
        className: "add-btn",
        children: "+ Dodaj krok"
      }
    ),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .recipe-steps {
          margin: 2rem 0;
        }

        .step {
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .step-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .remove-btn {
          background: #ff4444;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .add-btn {
          background: var(--accent);
          color: var(--text);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
      ` })
  ] });
}

function RecipeForm({ onSuccess, initialRecipe }) {
  const [formData, setFormData] = useState({
    title: initialRecipe?.title || "",
    description: initialRecipe?.description || "",
    youtube_url: initialRecipe?.youtube_url || "",
    image_url: initialRecipe?.image_url || ""
  });
  const [steps, setSteps] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let imageUrl = formData.image_url;
    if (selectedFile) {
      const uploadedUrl = await uploadImage(selectedFile, "recipes");
      if (uploadedUrl) {
        imageUrl = uploadedUrl;
      }
    }
    const recipeData = {
      title: formData.title,
      description: formData.description,
      youtube_url: formData.youtube_url,
      image_url: imageUrl
    };
    if (initialRecipe?.id) {
      const { error: recipeError } = await supabase.from("recipes").update(recipeData).eq("id", initialRecipe.id);
      if (recipeError) {
        console.error("Error updating recipe:", recipeError);
        setLoading(false);
        return;
      }
      await supabase.from("recipe_steps").delete().eq("recipe_id", initialRecipe.id);
      if (steps.length > 0) {
        const { error: stepsError } = await supabase.from("recipe_steps").insert(
          steps.map((step, index) => ({
            recipe_id: initialRecipe.id,
            step_number: index + 1,
            description: step.description,
            image_url: step.image_url
          }))
        );
        if (stepsError) {
          console.error("Error creating steps:", stepsError);
          setLoading(false);
          return;
        }
      }
    } else {
      const { data: recipe, error: recipeError } = await supabase.from("recipes").insert([recipeData]).select().single();
      if (recipeError || !recipe) {
        console.error("Error creating recipe:", recipeError);
        setLoading(false);
        return;
      }
      if (steps.length > 0) {
        const { error: stepsError } = await supabase.from("recipe_steps").insert(
          steps.map((step, index) => ({
            recipe_id: recipe.id,
            step_number: index + 1,
            description: step.description,
            image_url: step.image_url
          }))
        );
        if (stepsError) {
          console.error("Error creating steps:", stepsError);
          setLoading(false);
          return;
        }
      }
    }
    setFormData({ title: "", description: "", youtube_url: "", image_url: "" });
    setSteps([]);
    setSelectedFile(null);
    onSuccess();
    setLoading(false);
  }
  return /* @__PURE__ */ jsxs("div", { className: "recipe-form", children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Zdjęcie główne przepisu" }),
        /* @__PURE__ */ jsx(
          ImageUpload,
          {
            onImageUpload: (file) => setSelectedFile(file),
            currentImage: formData.image_url
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Tytuł" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: formData.title,
            onChange: (e) => setFormData({ ...formData, title: e.target.value }),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Opis" }),
        /* @__PURE__ */ jsx(
          RecipeEditor,
          {
            value: formData.description,
            onChange: (content) => setFormData({ ...formData, description: content })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { children: "Link do YouTube (opcjonalnie)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "url",
            value: formData.youtube_url,
            onChange: (e) => setFormData({ ...formData, youtube_url: e.target.value }),
            placeholder: "https://youtube.com/watch?v=..."
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "Kroki przepisu" }),
      /* @__PURE__ */ jsx(
        RecipeStepForm,
        {
          steps,
          onStepsChange: setSteps
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "submit-btn", disabled: loading, children: loading ? "Zapisywanie..." : initialRecipe ? "Zapisz zmiany" : "Dodaj Przepis" })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .recipe-form {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .submit-btn {
          background: var(--primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
      ` })
  ] });
}

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  useEffect(() => {
    loadRecipes();
  }, []);
  async function loadRecipes() {
    const { data } = await supabase.from("recipes").select(`
        *,
        recipe_steps (
          *
        )
      `).order("created_at", { ascending: false });
    if (data) setRecipes(data);
  }
  async function deleteRecipe(id) {
    if (!confirm("Czy na pewno chcesz usunąć ten przepis?")) return;
    const { error } = await supabase.from("recipes").delete().eq("id", id);
    if (!error) {
      loadRecipes();
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "recipe-manager", children: [
    /* @__PURE__ */ jsx("h2", { children: "Zarządzanie Przepisami" }),
    editingRecipe ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setEditingRecipe(null),
          className: "back-button",
          children: "← Wróć do listy"
        }
      ),
      /* @__PURE__ */ jsx(
        RecipeForm,
        {
          onSuccess: () => {
            loadRecipes();
            setEditingRecipe(null);
          },
          initialRecipe: editingRecipe
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(RecipeForm, { onSuccess: loadRecipes }),
      /* @__PURE__ */ jsxs("div", { className: "recipes-list", children: [
        /* @__PURE__ */ jsx("h3", { children: "Opublikowane Przepisy" }),
        recipes.map((recipe) => /* @__PURE__ */ jsxs("div", { className: "recipe-item", children: [
          /* @__PURE__ */ jsxs("div", { className: "recipe-info", children: [
            recipe.image_url && /* @__PURE__ */ jsx(
              "img",
              {
                src: recipe.image_url,
                alt: recipe.title,
                className: "recipe-thumbnail"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { children: recipe.title }),
              /* @__PURE__ */ jsx("p", { children: recipe.description }),
              recipe.youtube_url && /* @__PURE__ */ jsx("p", { className: "youtube", children: "🎥 Film na YouTube" }),
              /* @__PURE__ */ jsxs("p", { className: "steps-count", children: [
                "Liczba kroków: ",
                recipe.steps?.length || 0
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "actions", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setEditingRecipe(recipe),
                className: "edit-button",
                children: "Edytuj"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => deleteRecipe(recipe.id),
                className: "delete-button",
                children: "Usuń"
              }
            )
          ] })
        ] }, recipe.id))
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .recipe-manager {
          padding: 1rem;
        }

        .recipes-list {
          margin-top: 2rem;
        }

        .recipe-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin-bottom: 1rem;
          background: white;
        }

        .recipe-info {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .recipe-thumbnail {
          width: 120px;
          height: 80px;
          object-fit: cover;
          border-radius: 4px;
        }

        .actions {
          display: flex;
          gap: 0.5rem;
        }

        .edit-button {
          background: var(--accent);
          color: var(--text);
        }

        .delete-button {
          background: #ff4444;
          color: white;
        }

        .back-button {
          margin-bottom: 1rem;
          background: var(--accent);
          color: var(--text);
        }

        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .youtube {
          color: #ff0000;
          margin: 0.25rem 0;
        }

        .steps-count {
          color: var(--secondary);
          margin: 0.25rem 0;
        }
      ` })
  ] });
}

function AdminPanel() {
  const [activeTab, setActiveTab] = useState("products");
  return /* @__PURE__ */ jsxs("div", { className: "admin-container", children: [
    /* @__PURE__ */ jsx("h1", { children: "Panel Administracyjny" }),
    /* @__PURE__ */ jsxs("div", { className: "tabs", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `tab ${activeTab === "products" ? "active" : ""}`,
          onClick: () => setActiveTab("products"),
          children: "Produkty"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `tab ${activeTab === "events" ? "active" : ""}`,
          onClick: () => setActiveTab("events"),
          children: "Wydarzenia"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `tab ${activeTab === "recipes" ? "active" : ""}`,
          onClick: () => setActiveTab("recipes"),
          children: "Przepisy"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "content", children: [
      activeTab === "products" && /* @__PURE__ */ jsx(ProductManager, {}),
      activeTab === "events" && /* @__PURE__ */ jsx(EventManager, {}),
      activeTab === "recipes" && /* @__PURE__ */ jsx(RecipeManager, {})
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        /* General container styles */
        .admin-container {
          background: var(--background);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* Title styles */
        h1 {
          color: var(--primary);
          margin-bottom: 2rem;
        }

        /* Tabs container styles */
        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 2px solid #eee;
          padding-bottom: 1rem;
        }

        /* Tab button styles */
        .tab {
          padding: 0.75rem 1.5rem;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: var(--secondary);
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        /* Hover effect for tabs */
        .tab:hover {
          background: #f0f0f0;
        }

        /* Active tab style */
        .tab.active {
          background: var(--accent);
          color: var(--text);
        }

        /* Content area styles */
        .content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
      ` })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel Administracyjny - Przyprawy do \u017Cycia", "data-astro-cid-yati7zbk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="admin-panel" data-astro-cid-yati7zbk> <div class="background-pattern" data-astro-cid-yati7zbk></div> ${renderComponent($$result2, "AdminPanel", AdminPanel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/components/admin/AdminPanel", "client:component-export": "default", "data-astro-cid-yati7zbk": true })} </main> ` })} `;
}, "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/edit/index.astro", void 0);

const $$file = "C:/Users/Ayrton/Desktop/Proyectos Web/Abiertos/Nina/src/pages/edit/index.astro";
const $$url = "/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
