require('dotenv').config();

// const express = require( 'express' ); // express
const puppeteer = require('puppeteer'); // puppeteer

// const server = express(); // Start server

// const port = 4000; // Port server

// server.get( '/', (request, response) => {
//     response.send( 'Olá mundo!' );
// });

// server.listen(port, () => {
//     console.log( `Servidor subiu com sucesso!` )
// });

( async () => {

    const browser = await puppeteer.launch(
        {
            headless: false,
        }
    ); // browser

    const login     = 'https://portal.ifood.com.br/login'; // Login
    const home      = 'https://portal.ifood.com.br/home'; // Home
    const menu      = 'https://portal.ifood.com.br/menu'; // Menu
    const category  = 'https://portal.ifood.com.br/menu/category'; // Category

    const page = await browser.newPage(); // Open the browser

    await page.goto(login); // Access the ifood portal login page

    await page.waitForTimeout(2000); // Wait
    
    await page.type('[name="email"]', process.env.UNSPLASH_EMAIL) // E-mail

    await page.waitForTimeout(2000); // Wait
    
    await page.click('[type="submit"]') // Advance

    await page.waitForTimeout(2000); // Wait

    await page.type('#password', process.env.UNSPLASH_PASS) // Password

    await page.waitForTimeout(2000); // Wait

    await page.click('[type="submit"]') // Advance

    await page.waitForNavigation(); // 
    
    await page.goto(menu); // Access "Menu"

    await page.waitForTimeout(5000); // Wait

    await page.goto(menu); // Access "Menu"

    await page.waitForTimeout(5000); // Wait

    await page.goto(category); // Access "Menu - Category"

    // Return Json

    // await browser.close();
})();