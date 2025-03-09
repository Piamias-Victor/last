// src/components/home/DashboardPreview.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<"ventes" | "stocks" | "analytics">("ventes");
  
  const tabs = [
    { id: "ventes", label: "Analyse des ventes" },
    { id: "stocks", label: "Gestion des stocks" },
    { id: "analytics", label: "Prévisions" },
  ] as const;

  const getDashboardImage = () => {
    switch (activeTab) {
      case "ventes":
        return "/dashboards/ventes-dashboard.png";
      case "stocks":
        return "/dashboards/stocks-dashboard.png";
      case "analytics":
        return "/dashboards/analytics-dashboard.png";
      default:
        return "/dashboards/ventes-dashboard.png";
    }
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 text-sm md:text-base font-medium transition-colors ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Preview Image */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 relative aspect-video"
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
          <Image
            src={getDashboardImage()}
            alt={`${activeTab} dashboard preview`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHXYV/FwAAAABJRU5ErkJggg=="
          />
        </div>
      </motion.div>
      
      {/* Dashboard Features */}
      <div className="grid grid-cols-3 border-t border-gray-200 dark:border-gray-700 text-center">
        <div className="p-4 border-r border-gray-200 dark:border-gray-700">
          <div className="text-blue-600 font-semibold">Données en temps réel</div>
        </div>
        <div className="p-4 border-r border-gray-200 dark:border-gray-700">
          <div className="text-blue-600 font-semibold">Tableaux exportables</div>
        </div>
        <div className="p-4">
          <div className="text-blue-600 font-semibold">Filtres avancés</div>
        </div>
      </div>
    </div>
  );
};