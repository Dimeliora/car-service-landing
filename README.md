# Верстка лендинга сервиса по обслуживанию автомобилей

Адаптивная верстка макета лендинга для устройств с шириной экрана от 320px.

Реализация интерактивных элементов:
- адаптивное бургер-меню с выпадающими списками ссылок. Раскрытие списка с клавиатуры реализовано через кнопку со стрелкой рядом со ссылкой (доступна табуляцией)
- модальное окно с видеоплеером (используется YouTube API)
- модальное окно с формой
- смена контента галлереи переключением табов
- "счетчик подписчиков", увеличивающийся на рандомное число в рандомные промежутки времени. Отсчет начинается после прокрутки страницы до элемента счетчика (используется Intersection Observer)

## Сборка проекта

```bash
1. git clone https://github.com/Dimeliora/car-service-landing
2. cd car-service-landing
3. npm install
```

Для сборки проекта используется планировщик задач Gulp.
Скрипты для сборки:

- serve - сборка в development-режиме и запуск dev-server
- build - сборка в development-режиме
- prod - сборка в production-режиме

В режиме production осуществляется минификация HTML, CSS и JS кода без записи source-map, создание и подключение favicon.

### ВНИМАНИЕ

Для работы скрипта генерации favicon необходимо наличие файла **_favicon.png_** в директории _src/favicon_, там же расположен файл **_favicon-design.json_** для описания правил отображения иконок на разных устройствах.
