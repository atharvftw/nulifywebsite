import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.jpg";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Machine Learning Integration",
    description:
      "Implement intelligent systems into your existing processes to automate decision-making, detect patterns, and forecast trends.",
    icon: <ChartIcon />, // You can replace this with an appropriate ML-related icon
  },
  {
    title: "Data Analytics & Insights",
    description:
      "Unlock valuable insights from your data with advanced algorithms that help you make data-driven decisions faster and more efficiently.",
    icon: <WalletIcon />, // Replace this with an icon related to data or analytics
  },
  {
    title: "Automated Predictive Models",
    description:
      "Generate predictive models to automate forecasting, optimize resource allocation, and enhance business operations in real time.",
    icon: <MagnifierIcon />, // You can use an icon that represents automation or AI
  },
];


export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            AI-Driven Solutions {" "}
            </span>
            for Your Business
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Harness the power of machine learning to transform data into actionable insights, automate tasks, and drive intelligent decision-making.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain rounded-lg"

          alt="About services"
        />
      </div>
    </section>
  );
};
