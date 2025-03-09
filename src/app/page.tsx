// src/app/page.tsx

import { DashboardPreview } from "@/components/home/DashboardPreview";
import { FeatureCards } from "@/components/home/FeatureCards";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            ApoData Analytics
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Intelligence commerciale pour optimiser la performance de votre pharmacie
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
              Démarrer maintenant
            </button>
            <button className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-gray-700 rounded-full font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-700">
              Voir la démo
            </button>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <DashboardPreview />
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Fonctionnalités principales
        </h2>
        <FeatureCards />
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir ApoData Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">+27%</div>
              <p className="text-blue-100">d'augmentation moyenne des ventes</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">-15%</div>
              <p className="text-blue-100">de réduction des ruptures de stock</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">taux de satisfaction client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à optimiser votre performance ?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Rejoignez des centaines de pharmacies qui ont transformé leur activité grâce à ApoData Analytics.
        </p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl">
          Demander une démo personnalisée
        </button>
      </section>
    </div>
  );
}