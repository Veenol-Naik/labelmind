# 🧠 LabelMind  
**Explainable, AI-native food label understanding at the moment decisions matter**

Live Prototype 👉 https://labelmind.onrender.com/

---

## 🚀 What is LabelMind?

**LabelMind** is an AI-native consumer experience that helps people understand *how easy or hard a food label is to interpret*  without fear, nutrition scoring, or ingredient dumping.

Instead of listing ingredients or acting like a database, LabelMind acts as an **intelligent co-pilot**:
- It reasons on the user’s behalf
- Explains why a label feels clear or ambiguous
- Communicates uncertainty honestly
- Reduces cognitive load at decision time

This project is intentionally **experience-first**, aligned with the hackathon’s focus on AI-native interaction design.

---

## 🎯 Why this is AI-Native (Not a Traditional App)

Traditional tools:
- Are menu-driven
- Require filters and configuration
- Dump data and expect interpretation

**LabelMind is different:**
- Intent-first (no filters, no settings)
- Interprets labels automatically
- Explains reasoning in human language
- Adapts explanations based on ambiguity, not rules
- Acts as a thinking partner, not a lookup tool

The interface is the intelligence.

---

## 🧩 How It Works (Conceptually)

1. User pastes an ingredient list (or clicks an example)
2. The system detects **signals of interpretive complexity**
   - Functional ingredient descriptions
   - Processing-oriented terms
   - Ambiguous additives
3. The AI synthesizes:
   - A **human-readable verdict**
   - A **clear explanation of why interpretation is needed**
4. Uncertainty is communicated explicitly not hidden

No ingredient databases.  
No health scoring.  
No false certainty.

---

## 🌐 Live Demo

👉 **Live Prototype:**  
https://labelmind.onrender.com/

(Hosted on Render, may take a few seconds to wake up)

---

## 🖥️ Tech Stack

- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Backend:** Python (Flask)
- **Deployment:** Render
- **Design:** Custom UI, dark/light mode, micro-animations

The system uses **simulated reasoning logic** to demonstrate AI-native behavior, as encouraged by the challenge scope.

---

## ▶️ How to Run Locally

clone the repository 
```bash
cd LabelMind
pip install -r requirements.txt
python main.py
