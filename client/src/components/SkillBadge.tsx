import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

export default function SkillBadge({ name, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
    >
      <Badge variant="secondary" className="text-sm py-2 px-4">
        {name}
      </Badge>
    </motion.div>
  );
}
