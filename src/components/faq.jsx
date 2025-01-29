import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleVisibility = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: "faq1",
      question: "How does CareVerse work?",
      answer:
        "CareVerse connects patients with licensed doctors through a simple and secure platform. You can browse available doctors, book appointments, and attend sessions online.",
    },
    {
      id: "faq2",
      question: "Is my data secure on CareVerse?",
      answer:
        "Yes, we take data security seriously. All communication is encrypted, and we comply with healthcare regulations to ensure your information remains confidential.",
    },
    {
      id: "faq3",
      question: "What devices can I use to access CareVerse?",
      answer:
        "CareVerse is accessible via desktop, tablet, and mobile devices through a web browser. No special software is required.",
    },
    {
      id: "faq4",
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team through the contact form on our website, email, or live chat for any assistance.",
    },
    {
      id: "faq5",
      question: "Is there a mobile app available?",
      answer:
        "Currently, CareVerse is accessible via a web browser, but we are working on a mobile app for iOS and Android.",
    },
    {
      id: "faq6",
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, PayPal, and some insurance providers, depending on the doctor’s payment options.",
    },
  ];

  return (
    <section id="faqSection" className="mt-16 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-[#457777] p-4 rounded-lg cursor-pointer"
            onClick={() => toggleVisibility(faq.id)}
          >
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            {openFAQ === faq.id && <p className="mt-2 text-white">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;