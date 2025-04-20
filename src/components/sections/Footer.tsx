const Footer = () => {
  return (
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
  );
};

export default Footer;
