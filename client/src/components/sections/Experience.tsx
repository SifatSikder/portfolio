import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Trainee Software Engineer</CardTitle>
                <CardDescription>KAZ Software Ltd | January 2024 – June 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Developed KAZ Lunchbot, an Amazon Lex-powered chatbot automating the company's lunch subscription process.</p>
                <p>• Worked on P1ston, a supply chain automation tool enhancing PO visibility, order tracking, and supplier quoting.</p>
                <p>• Applied SCRUM methodology, ensuring agile collaboration, sprint planning, and efficient project updates.</p>
                <p>• Enhanced soft communication skills, effectively collaborating with cross-functional teams and stakeholders.</p>
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
                <CardTitle>Assistant Analyst</CardTitle>
                <CardDescription>DSSE, University of Dhaka | June 2023 – September 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Assisted in automating the University of Chittagong's system under Dr. Kazi Muhyemin-Us-Sakib by creating the software specification and requirement documents.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
