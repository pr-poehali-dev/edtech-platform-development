import { GraduationCapIcon, RocketIcon, SparklesIcon } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-edtech-dark">Для кого наши решения</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            IT-технологии помогают всем участникам образовательного процесса достигать лучших результатов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="h-16 w-16 bg-edtech-light rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCapIcon className="h-8 w-8 text-edtech-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Для учащихся</h3>
            <p className="text-gray-600">Доступ к качественным материалам, интерактивное взаимодействие, персонализированный подход</p>
          </div>
          <div className="text-center p-6">
            <div className="h-16 w-16 bg-edtech-light rounded-full flex items-center justify-center mx-auto mb-4">
              <RocketIcon className="h-8 w-8 text-edtech-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Для преподавателей</h3>
            <p className="text-gray-600">Инструменты для создания контента, системы оценивания, аналитика эффективности обучения</p>
          </div>
          <div className="text-center p-6">
            <div className="h-16 w-16 bg-edtech-light rounded-full flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="h-8 w-8 text-edtech-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Для организаций</h3>
            <p className="text-gray-600">Оптимизация образовательных процессов, снижение затрат, повышение качества обучения</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
