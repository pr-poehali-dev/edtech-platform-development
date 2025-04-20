import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-edtech-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Готовы внедрить IT-технологии в образовательный процесс?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Присоединяйтесь к сообществу инноваторов в образовании и получите доступ к лучшим практикам и ресурсам
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-edtech-primary hover:bg-edtech-secondary">
            Начать сейчас
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Запросить демо
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
