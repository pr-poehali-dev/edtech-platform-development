import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-edtech-primary/90 to-edtech-secondary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Трансформация образования с помощью IT-технологий
            </h1>
            <p className="text-lg mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Откройте новые возможности для обучения и преподавания с инновационными цифровыми решениями
            </p>
            <div className="flex space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button className="bg-white text-edtech-primary hover:bg-gray-100">
                Узнать больше
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Наши решения
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <img 
              src="/placeholder.svg" 
              alt="Образовательные технологии" 
              className="max-w-full rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
