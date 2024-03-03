// Импорт стилей для компонента Toolbar
import './Toolbar.css';

// Определение функционального компонента Toolbar
const Toolbar = ({ filters, selected='All', onSelectFilter }) => {
    let index = 0;
    // Возвращаем JSX, отображающий панель инструментов
    return (
        <div className='toolbar'>
            {filters.map((item) => (
                //onClick Обработчик события клика на кнопку 
                //key Уникальный ключ для каждой кнопки className Добавление класса 'active' для выбранной категории
                <button onClick={onSelectFilter} key={index++} className={item === selected ? 'active' : ''}                >
                    {item}
                </button>
            ))}
        </div>
    );
};

// Экспорт компонента Toolbar по умолчанию
export default Toolbar;
