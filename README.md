# [ENERGOSTROY](https://daniks0-0.github.io/ENERGOSTROY/)


## Описание проекта

**ENERGOSTROY** — это корпоративный веб-сайт, разработанный для представления деятельности компании, специализирующейся на реализации строительных проектов. Сайт обеспечивает удобный доступ к информации о фирме, её услугах, портфолио завершённых проектов и контактным данным. Проект создан с использованием современных технологий и методик веб-разработки, что гарантирует высокую производительность, кроссбраузерную совместимость и адаптивный дизайн для комфортного взаимодействия на любых устройствах.

---

## Используемые технологии

Проект разработан с использованием следующих технологий и инструментов:

- **React.js** — библиотека для создания пользовательских интерфейсов.
- **SCSS** — препроцессор для CSS, позволяющий писать стили более структурировано и удобно.
- **Vite** — инструмент для быстрой сборки приложения, обеспечивающий мгновенную перезагрузку во время разработки.
- **React Router** — библиотека для создания пользовательских интерфейсов.
- **React Lazy Load Image Component** — библиотека для ленивой загрузки изображений, что повышает производительность приложения.
- **Nginx** и **Ubuntu** — будут использоваться для деплоя веб-приложения на сервер.

---

## Подход к разработке

При разработке проекта был использован компонентно-ориентированный подход. Каждый компонент приложения отвечает за отдельную часть функциональности, что облегчает поддержку и масштабирование проекта. 

## 1. React.js: Компонентный подход
Каждая часть сайта реализована в виде отдельных компонентов React, что упрощает их повторное использование и поддержку. Компоненты разделены по папкам для улучшения читаемости и структуры проекта:
## 2. SCSS: Модульная структура стилей
Используется модульная организация SCSS-файлов:
- **Variables** — переменные для цветов, шрифтов и других параметров.
## 3. Настройка навигации и скролла 
```javascript
const handleMainClick = () => {
    navigate("/"); // переход на главную страницу
    // скролл к разделу "главная"
    setTimeout(() => {
        const mainSection = document.getElementById("main");
        if (mainSection) {
            mainSection.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
    setMenuOpen(false); // закрываем меню после нажатия на ссылку
};
```
## 4. Использование замыкание и хук при разработке функционала сайта
```javascript
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // Состояние для управления меню
    //для отключение скролла при открытие меню
    useEffect(()=>{
        if(menuOpen){
            //отключаю скролл
            document.body.style.overflowY = "hidden";
        }
        else{
            //включаю скролл
            document.body.style.overflowY = "";
        }
        return () => {
            document.body.style.overflowY = "";
        };
    }, [menuOpen]);
```
## 5. Использование библиотеки React Lazy Load Image Component для "ленивой загрузки"
Для повышения производительности используется библиотека для ленивой загрузки изображений:

```javascript
  <LazyLoadImag
   className="row-photo"
   src={Chaplygin1}
   effect="blur"
    />

```
## 5. Использование метода map() для вывода изображений из массива 
Динамическое создание списка партнёров с помощью метода map():
```javascript
const partnersArrs = [
    {
        key:1,
        img:megastroyImage,
    },
    { 
        key:2,
        img:energoArmImage,
    }
];
 {partnersArrs.map(partnersArr =>(
                        <SamplePartners 
                        key = {partnersArr.key}
                        img = {partnersArr.img} 
                        />
 ))
 }
```
---

Дополнительно применяются:
- **React Lazy Load Image Component изображений**, что значительно ускоряет загрузку страниц.
- **Адаптивный дизайн**, обеспечивающий корректное отображение на экранах различных размеров.

---

## Дизайн

Дизайн приложения был разработан в приложение **Figma** и подчеркивает строгий и современный стиль. Основное внимание уделено удобству пользователя:
- Используются спокойные, сдержанные цвета.
- Простая и понятная структура интерфейса помогает пользователям быстро находить нужные функции.
- Проект адаптирован для разных устройств (мобильных, планшетов, настольных компьютеров).

[Посмотреть дизайн в Figma](https://www.figma.com/design/u0RuV3J8utxMHSf9MLgQbF/%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B9?node-id=0-1&t=MYg4cNFY7Pt6Lf3q-1)

---

## Итог проделанных работ

- **Разработка сайта:** Реализованы все страницы и ключевые функциональные компоненты с использованием React.js.
- **Оптимизация производительности:** Использованы современные технологии (Vite, ленивые загрузки изображений) для ускорения загрузки страниц.
- **Адаптивный дизайн:** Сайт корректно отображается на мобильных устройствах, планшетах и настольных компьютерах.
- **SEO-оптимизация:** Добавлены мета-теги, атрибуты `alt` для изображений.
- **Деплой:** Сайт подготовлен к деплою на сервере с использованием Nginx и Ubuntu.

Проект сочетает в себе современные технологии, высокую производительность и качественный дизайн, что делает его удобным и приятным для пользователей.

