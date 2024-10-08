import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/aiml.png";
import image3 from "../assets/ojdetect.png";
import image4 from "../assets/rasp.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Powered by Raspberry Pi 5",
    description:
      "It delivers enhanced processing, seamless connectivity, and reliable performance. Ideal for AI, IoT projects, or general computing, it offers a strong foundation for innovation and efficiency.",
    image: image4,
  },
  {
    title: "Object Size Detection",
    description:
      "Our system accurately tracks and identifies objects in real-time, boosting efficiency and reliability for applications like security and automation.",
    image: image3,
  },
  {
    title: "AI & Machine Learning Integration",
    description:
      "Real-time analysis and smart recommendations ensure accurate performance, with predictive alerts for maintenance.",
    image: image,
  },
];

const featureList: string[] = [
  "Realtime Detection",
  "Easy Setup",
  "24/7 Monitoring",
  "Minimalist",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great{" "}
        </span>
        Features
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            key={title}
            className="shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-primary/50 glow-card"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto h-[150px] object-contain"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
