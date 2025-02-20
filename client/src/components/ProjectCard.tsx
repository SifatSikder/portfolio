import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  delay?: number;
}

export default function ProjectCard({ title, description, github, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open(github, "_blank")}
          >
            <BsGithub className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
