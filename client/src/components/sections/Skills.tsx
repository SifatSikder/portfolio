import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SkillBadge from "@/components/SkillBadge";

const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "Dart"],
  frameworks: [
    "Pandas", "NumPy", "FastAPI", "OpenCV", "YOLO", "spaCy", 
    "Streamlit", "React", "AngularJS", "TailwindCSS", "Node.js", "Flutter"
  ],
  ml: ["PyTorch", "Keras", "sci-kit-learn", "Hugging Face Transformers"],
  databases: ["MySQL", "MongoDB", "PostgreSQL"],
  tools: ["Git", "GitHub", "Docker", "Jira"]
};

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>

        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <SkillBadge key={skill} name={skill} delay={i * 0.1} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Libraries & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, i) => (
                  <SkillBadge key={skill} name={skill} delay={i * 0.1} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ml.map((skill, i) => (
                  <SkillBadge key={skill} name={skill} delay={i * 0.1} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Databases & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.databases, ...skills.tools].map((skill, i) => (
                  <SkillBadge key={skill} name={skill} delay={i * 0.1} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
