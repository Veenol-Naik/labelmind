const analyzeBtn = document.getElementById("analyze-btn");
const input = document.getElementById("ingredients");

const result = document.getElementById("result");
const verdict = document.getElementById("verdict");
const summary = document.getElementById("summary");
const explanation = document.getElementById("explanation");
const explainToggle = document.getElementById("toggle");
const themeToggle = document.getElementById("themeToggle");

const imageBtn = document.getElementById("imageBtn");
const imageInput = document.getElementById("imageInput");

const SIGNALS = {
  "added sugar": ["sugar", "glucose", "fructose", "syrup"],
  "palm oil": ["palm oil", "palmolein"],
  "emulsifier": ["emulsifier", "e471", "lecithin"],
  "artificial flavour": ["artificial flavour", "artificial flavor"],
  "artificial colour": ["colour", "color", "e150"]
};

const BASIC_FOOD_WORDS = [
  "water", "milk", "wheat", "flour", "rice", "salt",
  "oil", "corn", "oats", "sugar", "cocoa", "soy"
];

function looksLikeIngredientText(text) {
  const words = text.split(/[, ]+/);

  const hasSignal = words.some(word =>
    Object.values(SIGNALS).flat().some(k => word.includes(k))
  );

  const hasBasicFood = words.some(word =>
    BASIC_FOOD_WORDS.some(f => word.includes(f))
  );

  return hasSignal || hasBasicFood;
}

/* ---------- Dynamic Explain Button Text ---------- */
function getExplainButtonText(found) {
  if (found.length === 0)
    return "Why is this label easy to understand?";
  if (found.length <= 2)
    return "Why does this label take some effort?";
  return "Why is this label hard to understand?";
}

/* ---------- Verdict ---------- */
function buildVerdict(found) {
  if (found.length === 0)
    return { text: "Easy to understand", className: "verdict low" };
  if (found.length === 1)
    return { text: "Some interpretation required", className: "verdict moderate" };
  if (found.length === 2)
    return { text: "Takes a bit of effort to interpret", className: "verdict moderate" };
  return { text: "Harder to interpret at a glance", className: "verdict high" };
}

/* ---------- Explanation (UNCHANGED LOGIC) ---------- */
function buildExplanation(found) {
  const lines = [];

  if (found.length === 0) {
    lines.push("The ingredients are written using familiar food terms.");
    lines.push("Most people can quickly understand what the product contains.");
    lines.push("Very little interpretation is required.");
    return lines;
  }

  if (found.length === 1) {
    lines.push("One ingredient is described indirectly.");
    lines.push("This requires a small amount of interpretation.");
  }

  if (found.length === 2) {
    lines.push("A couple of ingredients use functional or generic descriptions.");
    lines.push("This slows down understanding at a glance.");
  }

  if (found.length >= 3) {
    lines.push("Several ingredients prioritize function over clarity.");
    lines.push("This makes forming a clear picture more difficult.");
  }

  lines.push(
    "This does not judge the product, it reflects how much mental effort is needed."
  );

  return lines;
}

/* ---------- MAIN ANALYSIS ---------- */
analyzeBtn.onclick = () => {
  const text = input.value.toLowerCase().trim();
if (!text) return;

if (!looksLikeIngredientText(text)) {
  result.classList.remove("hidden");
  verdict.innerText = "Input not recognizable";
  verdict.className = "verdict moderate";
  summary.innerText =
    "This doesn’t look like a food ingredient list. Please enter ingredients as shown on a food label.";
  explanation.innerHTML = `
    <li>Try entering ingredients separated by commas.</li>
    <li>Example: <em>Milk, Sugar, Wheat Flour, Cocoa Powder</em></li>
  `;
  return;
}
  const items = text.split(",").map(i => i.trim());
  let found = [];

  items.forEach(item => {
    for (const key in SIGNALS) {
      if (SIGNALS[key].some(k => item.includes(k))) {
        found.push(key);
      }
    }
  });

  found = [...new Set(found)];
  result.classList.remove("hidden");

  const verdictData = buildVerdict(found);
  verdict.innerText = verdictData.text;
  verdict.className = verdictData.className;

  summary.innerText =
    found.length === 0
      ? "The label is clear and easy to understand."
      : "Some ingredients require extra interpretation.";

  explanation.innerHTML = buildExplanation(found)
    .map(line => `<li>${line}</li>`)
    .join("");

  explainToggle.innerText = getExplainButtonText(found);
};

/* ---------- Toggle Explanation ---------- */
explainToggle.onclick = () => {
  explanation.classList.toggle("hidden");
  const open = !explanation.classList.contains("hidden");

  explainToggle.innerText = open
    ? "Hide details"
    : getExplainButtonText(
        verdict.classList.contains("low") ? [] :
        verdict.classList.contains("moderate") ? ["x"] :
        ["x","y","z"]
      );
};

/* ---------- Example Buttons ---------- */
document.querySelectorAll(".example-btn").forEach(btn => {
  if (btn.dataset.text) {
    btn.onclick = () => {
      input.value = btn.dataset.text;
    };
  }
});

/* ---------- Option A: Simulated Image Input ---------- */
imageBtn.onclick = () => imageInput.click();

imageInput.onchange = () => {
  // Simulated OCR result
  input.value =
    "Carbonated Water, Sugar, Palm Oil, Emulsifier (E471), Artificial Flavour";
};

/* ---------- Dark Mode ---------- */
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  themeToggle.innerText =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};
