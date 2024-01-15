describe ('Автотесты на форму логина и пароля', function () {
    it ('позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio'); // Посетили сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').should('be.visible') // Виден текст 
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совп. текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик

    })
    it('Проверка логики восстановления пароля',function(){
        cy.visit('https://login.qa.studio'); // Посетили сайт
        cy.get('#forgotEmailButton').click(); // Нажали "забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov5.ru'); // Ввели логин
        cy.get('#restoreEmailButton').click(); // Нажали "Отправить код"
        cy.get('#messageHeader').should('be.visible') // Виден текст 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Совп. текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик

    })
    it('Негативный кейс авторизации НЕ верный пароль',function(){
        cy.visit('https://login.qa.studio'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudi5o1'); // Ввели НЕ верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible') // Виден текст 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совп. текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик
    })
    it('Негативный кейс авторизации НЕ верный логин',function(){
        cy.visit('https://login.qa.studio'); // Посетили сайт
        cy.get('#mail').type('german@dolnik5ov.ru'); // Ввели НЕ верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible') // Виден текст 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совп. текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик
    })
    it('Негативный кейс валидации',function(){
        cy.visit('https://login.qa.studio'); // Посетили сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели верный логин без "@"
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible') // Виден текст 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Совп. текста
    })
    it('Проверка на приведение к строчным буквам в логине',function(){
        cy.visit('https://login.qa.studio'); // Посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible') // Виден текст 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совп. текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Наличие кнопки крестик
    })
})