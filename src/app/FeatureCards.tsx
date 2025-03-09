// src/components/home/FeatureCards.tsx
"use client";

import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
    >
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export const FeatureCards = () => {
  const features = [
    {
      icon: "📊",
      title: "Analyses multi-niveaux",
      description: "Segmentation par laboratoire, marque, famille et produit pour une vision précise."
    },
    {
      icon: "📈",
      title: "Tableaux de bord dynamiques",
      description: "Visualisation intuitive des tendances de ventes et de stocks."
    },
    {
      icon: "🚀",
      title: "Tracking de performance",
      description: "Comparaison entre périodes avec calcul d'évolution en temps réel."
    },
    {
      icon: "🔮",
      title: "Prévisions intelligentes",
      description: "Simulation d'évolution pour anticiper les tendances du marché."
    },
    {
      icon: "⚠️",
      title: "Détection de ruptures",
      description: "Identification des produits en rupture et impact financier associé."
    },
    {
      icon: "🏪",
      title: "Analyse par pharmacie",
      description: "Performance par point de vente pour cibler vos actions commerciales."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
        />
      ))}
    </div>
  );
};