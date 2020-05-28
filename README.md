# Message Board Web App

This is a version 1 of the Message Board Web app powered by Laravel and React.


## Technical Requirements
1. Composer
1. NPM
1. Vagrant or Docker
1. PHP 7 + 
1. MySQL


## Description

1. I used Laravel as my backend and ReactJS as my Frontend.
1. I used MySQL as my database
1. The Design is so simple, there are few restricts when using laravel with React so I just used a simple boostrap design.
1. I used 'react-bootstrap-table-next' for the Bootstrap Table that is capable of sorting the columns. It is also capable of adding pagination add-ons but due to time constraints I not be able to do so. But in the version 2 I can add it.
1. I have not implemented the 'support commenting on comments' but can add it in version 2.


## Functionalities
1. Login as user
1. Logout as user
1. View Message Board (sort per column)
1. Add New Message  (title, body and category fyi: able to add more category in the database)
1. View Message Detail
1. Add Comments per message


## To Install 

1. Create a database in the Mysql
1. Add .env file, just add the Database details
1. composer update
1. php artisan migrate
1. php artisan db:seed
1. Npm install
1. npm run dev