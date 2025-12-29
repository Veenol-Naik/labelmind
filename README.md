# LabelMind

**LabelMind** is an interactive tool that helps users understand **how easy or difficult a food label is to interpret**.  
It does **not** judge health, nutrition, or brand quality. Instead, it focuses on **label clarity and interpretability**.

> _Not fear. Not guesswork. Just clarity._

---

## 🚩 Problem Statement

Food ingredient labels often rely on:
- Functional or processing-oriented terms (e.g., emulsifiers, stabilizers)
- Generic descriptions (e.g., flavouring substances)
- Additive codes that require prior knowledge

This creates **cognitive friction** for consumers trying to make quick, informed decisions — especially when context matters (daily use, kids, diabetic, etc.).

Most tools either:
- Dump raw ingredient databases, or
- Add AI-generated health scores on top of existing systems

**LabelMind takes a different approach.**

---

## 💡 Core Idea

LabelMind introduces a **new interaction paradigm**:
> Instead of telling users *what to eat*, it shows them *how much interpretation a label requires*.

The output is **explainable, calm, and contextual**, helping users build trust and understanding rather than fear.

---

## ✨ Key Features

- 🧾 Paste any ingredient list
- 🎯 Choose consumer context (Daily / Kids / Diabetic / Occasional)
- 🧠 Identifies interpretation-heavy ingredient patterns
- 🗣️ Human-readable verdicts:
  - *Clear and direct label*
  - *Moderately interpretive label*
  - *Heavily interpretive label*
- 📖 Expandable explanations (no hidden logic)
- 🎨 Clean UI with micro-animations
- 🌙 Light / Dark mode toggle
- 🚀 Example buttons for common product labels

---

## 🧠 Explainability First

Every verdict is supported by:
- Clear reasoning
- Plain-language explanations
- No black-box models
- No hallucinated claims

LabelMind does **not** rely on:
- LLM-generated judgments
- Nutrition scoring systems
- Medical assumptions

---

## 🚫 What LabelMind Is NOT

- ❌ A health or nutrition scoring app  
- ❌ An AI-powered database browser  
- ❌ An OCR or scraping pipeline  
- ❌ A regulatory compliance checker  

It deliberately avoids making claims about health outcomes.

---

## 🧪 Example Scenarios

- Compare how interpretable two snack labels are
- Understand why a soft drink label feels confusing at first glance
- See how interpretation difficulty changes with consumer context
- Educate users on label transparency without overwhelming them

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Backend:** Python (Flask)
- **No external APIs**
- **No LLM dependency**

---

## 📂 Project Structure

LabelMind/
├── README.me
├── main.py
├── requirements.txt
├── templates/
│ └── index.html
└── static/
├── style.css
└── script.js


## ▶️ How to Run Locally

1. Clone the repository
git clone <repository-url>
cd LabelMind

2. Install dependencies
pip install -r requirements.txt

3. Run the application
python main.py

4. Open in your browser
👉 http://127.0.0.1:5000