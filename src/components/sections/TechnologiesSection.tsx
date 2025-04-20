import TechnologyCard from "@/components/TechnologyCard";

const TechnologiesSection = () => {
  return (
    <section className="py-16 bg-edtech-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-edtech-dark">Инновационные технологии</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с передовыми решениями, которые трансформируют образовательный процесс
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechnologyCard 
            title="Искусственный интеллект"
            description="Системы машинного обучения для создания адаптивных образовательных траекторий. Интеллектуальные ассистенты помогают преподавателям автоматизировать рутинные задачи и сосредоточиться на качестве обучения."
            imageUrl="/placeholder.svg"
          />
          <TechnologyCard 
            title="Виртуальная реальность"
            description="Иммерсивные технологии VR позволяют создавать реалистичные симуляции и среды для практического обучения. Студенты могут безопасно тренироваться в виртуальных лабораториях и осваивать сложные навыки."
            imageUrl="/placeholder.svg"
          />
          <TechnologyCard 
            title="Мобильное обучение"
            description="Образовательные приложения и адаптивный контент для обучения в любом месте и времени. Геймификация и микрообучение повышают вовлеченность и мотивацию учащихся всех возрастов."
            imageUrl="/placeholder.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
