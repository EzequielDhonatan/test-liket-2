require('dotenv').config();

const express = require( 'express' ); // express
const puppeteer = require('puppeteer'); // puppeteer

const server = express(); // Start server

( async () => {

    const browser = await puppeteer.launch(
        {
            headless: false,
        }
    ); // browser
    
    const login         = 'https://portal.ifood.com.br/login'; // Login
    const home          = 'https://portal.ifood.com.br/home'; // Home
    const menu          = 'https://portal.ifood.com.br/menu'; // Menu
    const menuCategory  = 'https://portal.ifood.com.br/menu/category'; // Menu Category

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

    await page.waitForNavigation(); // Form Navigation
    
    await page.goto(home); // Access "Home"

    await page.waitForTimeout(5000); // Wait

    await page.goto(menu); // Access "Menu"

    await page.waitForTimeout(5000); // Wait

    await page.goto(menuCategory); // Access "Menu - Category"

    console.log('pageContent:', pageContent);

    // await browser.close(); // Browser close

})(); //
