import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaRegClock } from "react-icons/fa"; 
import { IoShieldCheckmark } from "react-icons/io5";
import { MdBrokenImage } from "react-icons/md";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

interface FeatureProps {
  icon: JSX.Element; // Now expects a string for the PNG image source
  title: string;
  description: string;
}


const features: FeatureProps[] = [
  {
    icon: < MdBrokenImage  className="w-10 h-10" style={{ color: 'hsl(210, 100%, 50%)' }} />,
    title: "Quality Assurance",
    description:
      "Detect cracks, scratches, defects and any other flaws visible or invisible to the human eye.",
  },
  {
    icon: <IoExtensionPuzzleSharp className="w-10 h-10" style={{ color: 'hsl(210, 100%, 50%)' }} />,
    title: "Assembly Verification",
    description:
      "Inspect components to ensure all assembly steps are complete and detect if operator tasks have been properly completed.",
  },
  {
    icon:<FaRegClock className="w-10 h-10" style={{ color: 'hsl(210, 100%, 50%)' }}/>,
    title: "Process Optimization",
    description:
      "Identify small stops and slow cycles for process improvement by monitoring work zones, cycle times, and workflows.",
  },
  {
    icon: <IoShieldCheckmark className="w-10 h-10" style={{ color: 'hsl(210, 100%, 50%)' }}/>,
    title: "Safety and Compliance",
    description:
      "Monitor and alert for personal protective equipment, worker behavior and compliance in various environments.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
      Precision {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Workflow {" "}
        </span>
         : Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Explore how our innovative object detection system enhances every stage of your workflow with precision, efficiency, and compliance, ensuring optimal performance across key processes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
