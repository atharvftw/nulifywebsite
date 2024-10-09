import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from 'lucide-react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Reach Out{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            to Us
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2 relative"
          onSubmit={handleSubmit}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@example.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            disabled={isSubmitted}
          />
          <Button disabled={isSubmitted}>
            {isSubmitted ? 'Sent!' : 'Submit'}
          </Button>
          
          {isSubmitted && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
                <Check className="text-white" />
              </div>
              <p className="text-green-500 font-medium">Thank you for reaching out!</p>
            </div>
          )}
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
}
