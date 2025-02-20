import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        <div className="space-y-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Science in Software Engineering</CardTitle>
                <CardDescription>University of Dhaka | 2019-2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">CGPA: 3.89/4.00</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Higher Secondary Certificate (HSC)</CardTitle>
                <CardDescription>Dhaka College | 2017-2018</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">GPA: 5.00/5.00</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
