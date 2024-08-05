import React from "react";
import { FaqData } from "../../data/Faq";
// Define the FaqData directly in the component

const Faq = () => {
  const { productFaqs, generalFaqs } = FaqData;

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 max-lg:p-8">
        <div className="space-y-8">
          <p className="text-center text-3xl max-md:text-2xl font-[700]">
            GENERAL FAQs
          </p>
          {generalFaqs.map((section, index) => (
            <div key={index}>
              <h2 className="text-primary text-xl font-bold">
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.questions.map((faq, faqIndex) => (
                  <details className="group" key={faqIndex}>
                    <summary className="flex justify-between cursor-pointer py-2 bg-light_white p-2 rounded-lg">
                      <span>{faq.question}</span>
                      <span className="group-open:rotate-180 transition-transform text-sm">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-2 text-muted-foreground rounded-lg p-2 bg-[#EDFFFD80]">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-3xl max-md:text-2xl font-[700]">
            PRODUCT BASED FAQs
          </p>
          {productFaqs.map((section, index) => (
            <div key={index}>
              <h2 className="text-primary text-xl font-bold">
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.questions.map((faq, faqIndex) => (
                  <details className="group" key={faqIndex}>
                    <summary className="flex justify-between cursor-pointer py-2 bg-light_white p-2 rounded-lg">
                      <span>{faq.question}</span>
                      <span className="group-open:rotate-180 transition-transform text-sm">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-2 text-muted-foreground rounded-lg p-2 bg-[#EDFFFD80]">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
