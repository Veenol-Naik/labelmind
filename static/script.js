const analyzeBtn = document.getElementById("analyze-btn");
const input = document.getElementById("ingredients");

const result = document.getElementById("result");
const verdict = document.getElementById("verdict");
const summary = document.getElementById("summary");
const explanation = document.getElementById("explanation");
const explainToggle = document.getElementById("toggle");
const themeToggle = document.getElementById("themeToggle");

const SIGNALS = {
  "added sugar": ["sugar", "glucose", "fructose", "syrup"],
  "palm oil": ["palm oil", "palmolein"],
  "emulsifier": ["emulsifier", "e471", "lecithin"],
  "artificial flavour": ["artificial flavour", "artificial flavor"],
  "artificial colour": ["colour", "color", "e150"]
};

function buildVerdict(found) {
  if (found.length === 0)
    return { text: "Easy to understand", className: "verdict low" };
  if (found.length === 1)
    return { text: "Some interpretation required", className: "verdict moderate" };
  if (found.length === 2)
    return { text: "Takes a bit of effort to interpret", className: "verdict moderate" };
  return { text: "Harder to interpret at a glance", className: "verdict high" };
}

function buildExplanation(found) {
  const lines = [];

  const hasFunctional =
    found.includes("emulsifier") || found.includes("artificial flavour");
  const hasSugarOil =
    found.includes("added sugar") || found.includes("palm oil");

  if (found.length === 1) {
    lines.push(
      "One ingredient is described in a way that doesn’t clearly explain what it is."
    );
    lines.push(
      "This forces the reader to pause and mentally interpret its role."
    );
  }

  if (found.length === 2) {
    lines.push(
      "A couple of ingredients are listed using functional or generic descriptions."
    );
    lines.push(
      "Together, they reduce how quickly the label can be understood."
    );
  }

  if (found.length >= 3) {
    lines.push(
      "Several ingredients prioritize function over clarity."
    );
    lines.push(
      "When many such terms appear together, forming a clear picture becomes difficult."
    );
  }

  if (hasFunctional) {
    lines.push(
      "Terms like emulsifiers or flavouring agents describe what an ingredient does, not what it actually is."
    );
  }

  if (hasSugarOil) {
    lines.push(
      "Added sugars or refined oils are often listed without context about quantity or purpose."
    );
  }

  lines.push(
    "Overall, understanding this label requires more time and mental effort than usual."
  );

  return lines;
}

analyzeBtn.onclick = () => {
  const text = input.value.toLowerCase().trim();
  if (!text) return;

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

  if (found.length === 0) {
    summary.innerText =
      "The ingredients are described clearly, making the label easy to understand at a glance.";
    explanation.innerHTML = `
      <li>The ingredients use familiar, specific food terms.</li>
      <li>Most people can quickly understand what the product contains.</li>
      <li>Very little interpretation is required.</li>
    `;
    return;
  }

  summary.innerText =
    "Some ingredients don’t clearly explain what they are or why they’re included, which increases interpretation effort.";

  const explanationLines = buildExplanation(found);
  explanation.innerHTML = explanationLines
    .map(line => `<li>${line}</li>`)
    .join("");
};

explainToggle.onclick = () => {
  explanation.classList.toggle("hidden");
  const open = !explanation.classList.contains("hidden");
  explainToggle.classList.toggle("open", open);
  explainToggle.innerText = open
    ? "Hide details"
    : "Why does this label need interpretation?";
};

// Example buttons (FIXED)
document.querySelectorAll(".example-btn").forEach(btn => {
  btn.onclick = () => {
    input.value = btn.dataset.text;
  };
});

// Dark mode toggle (FIXED)
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  themeToggle.innerText =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};
