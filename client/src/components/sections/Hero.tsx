import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
        >
          Hi, I'm Sifat Sikder
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Recent Computer Science graduate with a strong passion for machine learning and artificial intelligence. 
          Equipped with deep understanding of algorithms, data analysis, and problem-solving techniques.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/sifatsikder", "_blank")}
          >
            <BsGithub className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://www.linkedin.com/in/sifatsikder1221/", "_blank")}
          >
            <BsLinkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
