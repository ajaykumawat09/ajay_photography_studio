import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CandidFaq = ({ data = [] }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        FAQ&apos;S
      </h2>

      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        defaultValue={data?.[0]?.id}
      >
        {data.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border rounded-md bg-gray-50"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-base md:text-lg font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-5 text-gray-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CandidFaq;
