import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is AI nullification a standard feature in Vernier calipers?",
    answer: "While AI-assisted nullification is becoming more popular, it is not yet a standard feature in all Vernier calipers. However, with advances in technology, more digital and hybrid tools are incorporating AI-driven calibration  features.",
    value: "item-1",
  },
  {
    question: "Do I still need to learn how to nullify a Vernier caliper manually if I use AI?",
    answer:
      "While AI can automate much of the process, it's still important to understand how to manually nullify a Vernier caliper in case AI tools aren't available. Having foundational knowledge ensures you can handle any situation, with or without AI assistance.",
    value: "item-2",
  },
  {
    question:
      "Can AI be used to nullify other measuring instruments besides Vernier calipers?",
    answer:
      "Yes, AI can be applied to a variety of precision measurement tools, including micrometers, dial calipers, and even more complex measurement systems in industrial applications. The principles of alignment and calibration apply broadly to these tools, and AI can enhance accuracy across different instruments",
    value: "item-3",
  },
  {
    question: "Is using AI for nullification suitable for beginners",
    answer: "Yes, AI makes the nullification process simpler and more intuitive, especially for beginners. With real-time guidance and visual feedback, even those new to using Vernier calipers can achieve accurate nullification quickly.",
    value: "item-4",
  },
  {
    question:
      "How accurate is AI in detecting misalignments during nullification?",
    answer:
      "AI systems are highly accurate in detecting even the slightest misalignments between the Vernier scale and main scale, ensuring that any potential errors are quickly identified and corrected. The accuracy depends on the precision of the sensors or image recognition algorithms used.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
