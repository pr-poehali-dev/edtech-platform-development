import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Feature from "@/components/Feature";
import TechnologyCard from "@/components/TechnologyCard";
import { 
  BrainCircuitIcon, 
  Users2Icon, 
  SearchIcon, 
  GraduationCapIcon, 
  RocketIcon, 
  SparklesIcon 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Technologies Section */}
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

      {/* Call to Action */}
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

      {/* Benefits */}
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">IT-Образование</h3>
              <p className="text-gray-400">
                Инновационные технологии для современного образования
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Ресурсы</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Исследования</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">info@it-education.ru</li>
                <li className="text-gray-400">+7 (800) 123-45-67</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Подпишитесь</h4>
              <p className="text-gray-400 mb-4">
                Получайте актуальные обновления о новых технологиях
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900" 
                />
                <button className="bg-edtech-primary hover:bg-edtech-secondary px-4 py-2 rounded-r-md">
                  ОК
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 IT-Образование. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
