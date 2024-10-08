import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "First 30 days free, then subscription starts at standard rates.",
    buttonText: "Download Now",
    benefitList: [
      "Camera and Raspberry Pi kit",
      "4GB Storage",
      "No Usage Limit",
      "Priority support",
      "Training & Setup Executive Session",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Access{" "}
        </span>
        Instantly
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Download the app now and start unlocking powerful object detection features within minutes.
      </h3>
      <div className="flex justify-center px-4">
        {pricingList.map((pricing: PricingProps) => (
          <div key={pricing.title} className="relative w-full max-w-[1000px]">
            {/* Decorative blur effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-3/4 h-1/2 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-3/4 h-1/2 bg-primary/5 rounded-full blur-3xl" />
            </div>
            
            <Card className="backdrop-blur-sm bg-background/95 border-2 border-primary/10">
              <CardHeader className="space-y-4">
                <CardTitle className="flex items-center justify-between text-2xl">
                  {pricing.title}
                  {pricing.popular === PopularPlanType.YES ? (
                    <Badge
                      variant="secondary"
                      className="text-sm text-primary"
                    >
                      Most popular
                    </Badge>
                  ) : null}
                </CardTitle>
                <div>
                  <span className="text-5xl font-bold">${pricing.price}</span>
                  <span className="text-muted-foreground text-xl ml-2">/month</span>
                </div>
                <CardDescription className="text-lg">{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full h-14 text-lg">{pricing.buttonText}</Button>
              </CardContent>

              <hr className="w-[90%] mx-auto mb-6 opacity-30" />

              <CardFooter>
                <div className="space-y-6 w-full">
                  {pricing.benefitList.map((benefit: string) => (
                    <span
                      key={benefit}
                      className="flex items-center"
                    >
                      <Check className="text-primary h-6 w-6 flex-shrink-0" />
                      <h3 className="ml-4 text-lg">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
