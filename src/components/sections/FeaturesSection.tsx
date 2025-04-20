import Feature from "@/components/Feature";
import { BrainCircuitIcon, Users2Icon, SearchIcon } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-edtech-dark">Преимущества IT в образовании</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Современные технологии открывают новые горизонты для эффективного обучения и профессионального развития
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<BrainCircuitIcon className="h-6 w-6" />}
            title="Персонализация обучения"
            description="Адаптивные системы, подстраивающиеся под индивидуальные потребности и темп обучения каждого ученика"
          />
          <Feature 
            icon={<Users2Icon className="h-6 w-6" />}
            title="Коллаборативное обучение"
            description="Инструменты для совместной работы, обмена знаниями и групповых проектов в цифровой среде"
          />
          <Feature 
            icon={<SearchIcon className="h-6 w-6" />}
            title="Доступ к информации"
            description="Неограниченные возможности для поиска и получения знаний из различных источников в любое время"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
