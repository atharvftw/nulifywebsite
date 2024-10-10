
import logo1 from "../assets/Screenshot 2024-10-04 113453.png";
import logo2 from "../assets/raspberry.png";
import logo3 from "../assets/tkinter.png";
import logo4 from "../assets/flask.png";

interface SponsorProps {
  logo: string;  // For image URL or path
}

const sponsors: SponsorProps[] = [
  {
    logo: logo1,
  },
  {
    logo: logo2,
  },
  {
    logo: logo3,
  },
  {
    logo: logo4,
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Technology Used
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ logo }: SponsorProps) => (  // Destructure logo only
          <div key={logo} className="flex items-center">
            <img 
              src={logo} 
              alt="Sponsor Logo" 
              className="h-16 object-contain" // Adjust size as needed
            />
          </div>
        ))}
      </div>
    </section>
  );
};
