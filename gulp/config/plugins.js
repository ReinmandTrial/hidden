import replace from "gulp-replace"; // Поиск и замена
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if"; // Условное ветсвление

// Экспортируем объект
export const plugins = {
  replace: replace,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin
}