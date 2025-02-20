import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Research() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Research</h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">BanglaFake: Bengali Deepfake Audio Dataset</CardTitle>
              <p className="text-muted-foreground">Submitted to INTERSPEECH 2025</p>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Developed and evaluated a Bengali deepfake audio dataset (12,260 real & 13,260 synthetic utterances) 
                using SOTA Text-to-Speech models. Conducted MOS evaluations and t-SNE visualizations to enhance 
                deepfake detection in low-resource languages.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <h2 className="text-3xl font-bold text-center my-12">Competitions</h2>

        <div className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Bengali Automatic Speech Recognition (ASR) | Team DataDojo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Ranked 4th in IUT CSE Fest Datathon</p>
                <p>• Processed a 79+ hour speech corpus from 373 individuals across 10 regions</p>
                <p>• Designed an end-to-end speech recognition pipeline using deep learning models</p>
                <p><a href="https://www.kaggle.com/competitions/ben10" className="text-primary hover:underline">View on Kaggle</a></p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Mathematical Reasoning for Low-Resource Languages | Team_Free_Palestine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Ranked 6th out of 100+ teams</p>
                <p>• Enhanced Qwen-7B for Bangla reasoning through additional pretraining</p>
                <p>• Applied Direct Preference Optimization (DPO) for superior inference results</p>
                <p><a href="https://www.kaggle.com/competitions/dlsprint3" className="text-primary hover:underline">View on Kaggle</a></p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
