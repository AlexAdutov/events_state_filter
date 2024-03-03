// Импорт стилей для компонента ProjectList
import './ProjectList.css';

// Определение функционального компонента ProjectList
const ProjectList = ({ projects }) => {
    let index = 0; // Инициализация переменной для уникальных ключей

    // Возвращаем JSX, отображающий список проектов
    return projects.map((item) => (
        <div className='box-img' key={index++}> {/* Создание div с классом 'box-img' */}
            <img src={item.img} alt='' className='image' /> {/* Вывод изображения */}
        </div>
    ));
};

// Экспорт компонента ProjectList по умолчанию
export default ProjectList;
