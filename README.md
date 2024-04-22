# ManualMaker Backend
ManualMaker - сервис для создания всевозможных руководств.

# Список технологий
1. NestJS - JavaScript framework для создания серверных приложений
2. TypeScript - язык программирования
3. MongoDB - база данных
4. Mongoose - ODM для MongoDB

# Статус проекта: В разработке

# Как запускать
## Необходимое ПО
Для запуска проекта необходимо установить 
- [NodeJS](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)
Создать аккаунт [MongoDB](https://www.mongodb.com/cloud/atlas/register)

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
DATABASE = *строка подключения к mongodb*
ACCESS_TOKEN_SECRET = *секретная строка*

## Запустить
В обычном режиме
```
nest start
```

или в режиме разработки
```
nest start --watch
```
