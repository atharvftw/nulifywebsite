import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";


const handleGetStartedClick = () => {
  const pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const handleLearnMoreClick = () => {
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
};
export const Hero = () => {
  return (
    <section className="container place-items-center py-10 md:py-32 gap-10 text-center">
      <div className="text-center lg:text-center space-y-6">
        <main className="text-5xl md:text-6xl ">
          <h1>
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text font-['Cedarville Cursive'] italic"
            >
              Supercharge
            </span>{" "}
            <span className="font-semibold">Your Analytics with</span>
          </h1>{" "}
          <h2>
            <span className="dancing-script  bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text ">
              Intelligent
            </span>{" "}
            <span className="font-semibold">ML Solutions</span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-auto text-center">
        Empowering your business with intelligent, data-driven solutions through machine learning.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
      <Button 
        className="w-full md:w-1/3" 
        onClick={handleGetStartedClick} // Get Started click handler
      >
        Get Started
      </Button>
      <a
        rel="noreferrer noopener"
        target="_blank"
        onClick={handleLearnMoreClick} // Add the click handler here
        className={`w-full md:w-1/3 ${buttonVariants({
          variant: "outline"
        })} border-3`} 
      >
        Learn More
      </a>
    </div>
      </div>

      {/* Hero cards sections */}
      
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
