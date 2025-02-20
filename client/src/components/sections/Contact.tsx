import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiHuggingface, SiDocker, SiKaggle } from "react-icons/si";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: BsGithub,
      url: "https://github.com/sifatsikder"
    },
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      url: "https://www.linkedin.com/in/sifatsikder1221/"
    },
    {
      name: "Kaggle",
      icon: SiKaggle,
      url: "https://www.kaggle.com/sifatsikder"
    },
    {
      name: "HuggingFace",
      icon: SiHuggingface,
      url: "https://huggingface.co/sifat1221"
    },
    {
      name: "DockerHub",
      icon: SiDocker,
      url: "https://hub.docker.com/u/sifat1221"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <p className="text-lg">Email: sifatsikder2814@gmail.com</p>
                <p className="text-lg">Phone: +8801618551063</p>
                <p className="text-lg">Location: Dhaka, Bangladesh</p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {socialLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        <link.icon className="mr-2 h-5 w-5" />
                        {link.name}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}