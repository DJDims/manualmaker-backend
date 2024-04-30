# ManualMaker Backend
ManualMaker - сервис для создания всевозможных руководств.

# Список технологий
1. NestJS - JavaScript framework для создания серверных приложений
2. TypeScript - язык программирования
3. MongoDB - база данных
4. Mongoose - ODM для MongoDB
5. Swagger - документация endpoint'ов проекта

# Статус проекта: В разработке

# Как запускать
## Необходимое ПО
Для запуска проекта необходимо установить 
- [NodeJS](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)
- Зарегистрировать аккаунт [MongoDB](https://www.mongodb.com/cloud/atlas/register) и создать базу данных 

## Клонировать проект
```
git clone https://github.com/DJDims/manualmaker-backend
cd manualmaker-backend
```

## Установить зависимости
Через pnpm
```
pnpm i
```

или npm
```
npm i
```

или yarn
```
yarn install
```

## Заполнить файл .env
- DATABASE = *строка подключения к mongodb*
- ACCESS_TOKEN_SECRET = *секретная строка*

## Запустить
В обычном режиме
```
nest start
```

или в режиме разработки
```
nest start --watch
```

## Перейти в swagger
Swagger доступен по адресу localhost:3000/api
![Swagger](public/swagger.png)

# Благодарности
- [Алексей Константинович Козлов](https://github.com/MiFista01) - за полезные советы, тестирование проекта и помощь в разработке
- [Юрий Валентинович Мельников](https://github.com/Dew25) - за полезные советы
