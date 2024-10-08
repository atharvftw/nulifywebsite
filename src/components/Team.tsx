import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// Import images from the assets folder
import atharvaImg from "../assets/atharva.jpg";
import arman from "../assets/arman.jpg";
import omkar from "../assets/omkar.jpg";
import apoorva from "../assets/apoorva.jpg";

interface TeamProps {
  image: string; // Accepts imported local image
  name: string;
  position: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    image: atharvaImg,
    name: "Atharva Pawar",
    position: "Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/atharv-pawar-475524250",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/sheeshhatharv",
      },
    ],
  },
  {
    image: arman,
    name: "Arman Siddiqui",
    position: "Tech Lead",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/arman-siddiqui-19461b2a2",
      },
      
      {
        name: "Instagram",
        url: "https://www.instagram.com/armankhan",
      },
    ],
  },
  {
    image: omkar,
    name: "Omkar Patil",
    position: "Stake holder",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/omkar-patil-8b1313229",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    image: apoorva,
    name: "Apoorva Sonawane",
    position: "Marketing & Documentation",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/apoorva-sonawane-10600b227",
      },
      {
        name: "Instagram",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold"> Meet Our {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Crew{" "}
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      Innovative professionals driving success through passion and collaboration
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(({ image, name, position, socialNetworks }: TeamProps) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={image}
                alt={`${name} ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              
            </CardContent>

            <CardFooter>
              {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                <div key={name}>
                  <a
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
