import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I reset my password?",
    answer: "Go to Settings > Security and click Reset Password.",
  },
  {
    id: 2,
    question: "Can I change my email?",
    answer:
      "Yes, under Settings > Account, update your email and confirm it.",
  },
  {
    id: 3,
    question: "How do I cancel my subscription?",
    answer:
      "Go to Billing and click Cancel Plan. You'll keep access until the period ends.",
  },
  {
    id: 4,
    question: "Is there a mobile app?",
    answer:
      "Yes, it's available on iOS and Android, search for the app name in either store.",
  },
];

function FaqItem({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleAnswer() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="faq-item">
      <button onClick={toggleAnswer}>
        {question}
        <span>{isExpanded ? "▼" : "▶"}</span>
      </button>

      {isExpanded && <p>{answer}</p>}
    </div>
  );
}

function FaqList({ faqs }) {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      {faqs.map((faq) => (
        <FaqItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <FaqList faqs={faqs} />
    </div>
  );
}
