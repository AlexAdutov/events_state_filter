// Импорт необходимых модулей и компонентов
import { useState } from 'react';
import './Portfolio.css';
import Toolbar from '../Toolbar/Toolbar.jsx';
import ProjectList from '../ProjectList/ProjectList';

// Основной компонент Portfolio
function Portfolio(props) {
    // Деструктуризация свойства data из пропсов
    const { data } = props;
    // Использование хука useState для управления состоянием
    const [state, setImage] = useState(data);
    // Массив фильтров
    const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

    let newArr = []; // Переменная для хранения нового отфильтрованного массива проектов
    let activeCategory; // Переменная для хранения активной категории фильтрации

    // Функция для фильтрации изображений
    const filterImage = (evt) => {
        // Получение всех кнопок фильтров и удаление класса 'active' у каждой
        const buttons = document.querySelectorAll('button');
        buttons.forEach((item) => item.classList.remove('active'));

        // Добавление класса 'active' к выбранной кнопке фильтра
        evt.target.classList.add('active');

        // Получение текста выбранной категории фильтрации
        activeCategory = evt.target.textContent;
        // Фильтрация данных в зависимости от выбранной категории
        activeCategory === 'All'
            ? (newArr = data) // Если выбрана категория 'All', то показываем все проекты
            : (newArr = data.filter(
                  (item) => item['category'] === activeCategory
              )); // Иначе фильтруем проекты по выбранной категории

        // Установка нового состояния с отфильтрованным массивом проектов
        setImage(newArr);
    };

    // Возвращаем JSX компонента Portfolio
    return (
        <div className='container'>
            {/* Блок с тулбаром */}
            <div className='toolbar'>
                <Toolbar
                    filters={filters}
                    selected={activeCategory}
                    onSelectFilter={filterImage}
                />
            </div>

            {/* Блок с галереей проектов */}
            <div className='gallery'>
                <ProjectList projects={state} />
            </div>
        </div>
    );
}

// Экспорт компонента Portfolio
export default Portfolio;
