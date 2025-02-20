import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              I am a fresh graduate from the University of Dhaka, Bangladesh with a Bachelor's degree in Software Engineering. 
              My academic journey has equipped me with a solid foundation in programming, particularly in Python, 
              and a deep understanding of machine learning concepts.
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p>Email: sifatsikder2814@gmail.com</p>
                <p>Phone: +8801618551063</p>
                <p>Location: Dhaka, Bangladesh</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Profiles</h3>
                <p><a href="https://www.kaggle.com/sifatsikder" className="text-primary hover:underline">Kaggle</a></p>
                <p><a href="https://huggingface.co/sifat1221" className="text-primary hover:underline">HuggingFace</a></p>
                <p><a href="https://hub.docker.com/u/sifat1221" className="text-primary hover:underline">DockerHub</a></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
