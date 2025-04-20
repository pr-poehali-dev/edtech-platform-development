import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { LaptopIcon, BookOpenIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <LaptopIcon className="h-8 w-8 text-edtech-primary" />
            <span className="font-bold text-xl text-edtech-dark">IT-Образование</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Технологии</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {technologies.map((tech) => (
                      <NavigationMenuLink
                        key={tech.title}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-edtech-light hover:text-edtech-primary"
                      >
                        <div className="text-sm font-medium leading-none">{tech.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {tech.description}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Применение</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {applications.map((app) => (
                      <NavigationMenuLink
                        key={app.title}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-edtech-light hover:text-edtech-primary"
                      >
                        <div className="text-sm font-medium leading-none">{app.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {app.description}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    О проекте
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

const technologies = [
  {
    title: "Онлайн-обучение",
    description: "Платформы и инструменты для дистанционного образования"
  },
  {
    title: "Интерактивный контент",
    description: "Технологии создания вовлекающих учебных материалов"
  },
  {
    title: "Виртуальная реальность",
    description: "Погружение в виртуальную среду для эффективного обучения"
  },
  {
    title: "Искусственный интеллект",
    description: "ИИ-решения для персонализации образовательного процесса"
  }
];

const applications = [
  {
    title: "Школьное образование",
    description: "Внедрение IT-технологий в школьную программу обучения"
  },
  {
    title: "Высшее образование",
    description: "Цифровая трансформация вузов и университетов"
  },
  {
    title: "Корпоративное обучение",
    description: "Системы для повышения квалификации сотрудников"
  },
  {
    title: "Инклюзивное образование",
    description: "Адаптивные технологии для обучения людей с особыми потребностями"
  }
];

export default Navbar;
