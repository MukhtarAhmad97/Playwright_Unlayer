import {test, chromium, expect} from '@playwright/test'
const assert = require('assert')
import MailosaurClient from "mailosaur";
const mailosaur = new MailosaurClient("uY0DV9MmHW6bZxIrOXE32nLHHKkmWnno")

const path = require('path');
const AdmZip = require('adm-zip');
const fs = require('fs');


export class Sprint1{

    constructor(page){      
        this.page = page
        
    }
    async verifyfusion(){
      await this.page.click("//a[text()='Start Editing']")
      await this.page.waitForTimeout(2000)
      
      const frame1 = await this.page.frameLocator("iframe[src='https://editor.unlayer.com/1.188.0/editor.html']")

      const element1 = await frame1.locator('//*[@id="u_column_1"]/div/div/div[4]/div[1]')

      await element1.click()

      await this.page.keyboard.press('Control+A')
      await this.page.waitForTimeout(3000)
      const frame = await this.page.frameLocator("iframe[src='https://editor.unlayer.com/1.188.0/editor.html']")

      const element = await frame.locator('//*[@id="u_content_heading_2"]/div/div/div/span')

      let name = "Mukhtar Ahmad" 
      await element.fill(name)
    
      const element3 = await frame1.locator("(//span[text()='Montserrat'])[1]")

      await element3.click()

      const element4 = await frame1.locator("//span[text()='Nunito']")

      await element4.click()

      const element5 = await frame1.locator("(//input[@name='counter-input'])[1]")

      await element5.click()
      await this.page.keyboard.press('Control+A')
      await element5.fill('65')
      
      await this.page.click("//button[normalize-space()='Export']")
      await this.page.click("//div[normalize-space()='Download']")
      await this.page.type("//input[@id='email']", "anything@fg37jcgd.mailosaur.net")
      await this.page.click("//button[normalize-space()='Download']")
      await this.page.waitForTimeout(5000)
 
      const serverId = "fg37jcgd"
    
    const testEmailAddress = `anything@${serverId}.mailosaur.net`
    const email = await mailosaur.messages.get(serverId, {
      sentTo: testEmailAddress,
      timeout: 20000,
    })

    await this.page.waitForTimeout(2000)

    
    const emailHtml = email.html.body

    const linkMatches = emailHtml.match(/href="(https?:\/\/[^\s"]+)"/g)

  if (linkMatches && linkMatches.length > 0) {
  const links = linkMatches.map(match => match.match(/href="(https?:\/\/[^\s"]+)"/)[1])

  console.log("Extracted links:")
  console.log(links)
  await this.page.goto(links[1])

  await this.page.waitForTimeout(5000)
  await this.page.keyboard.press('Enter')

  const downloadPath1 = path.join(__dirname, 'download_HTML')
   if (!fs.existsSync(downloadPath1)) {
     fs.mkdirSync(downloadPath1);
   }
   
   const [download1] = await Promise.all([
     this.page.waitForEvent('download'),
     await this.page.goto(links[1]),
     ])
 
   const filePath1 = path.join(downloadPath1, await download1.suggestedFilename())
   await download1.saveAs(filePath1)
 
   await this.page.waitForTimeout(4000)


   const zipFilePath = filePath1
   const outputPath = 'Pages/Extracted_html'
 
   try {

     if (!fs.existsSync(outputPath)) {
       fs.mkdirSync(outputPath, { recursive: true })
     }
 
     if (!fs.existsSync(zipFilePath)) {
       throw new Error(`Zip file not found at path: ${zipFilePath}`)
     }
 
     const zip = new AdmZip(zipFilePath);
     zip.extractAllTo(outputPath, true);
     console.log(`Extracted to: ${outputPath}`);
   } catch (err) {
     console.error('Error while extracting zip file:', err);
   }


   const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(outputPath, true);
    console.log(`Extracted to: ${outputPath}`);



    const files = fs.readdirSync(outputPath);
  const htmlFile = files.find(file => file.endsWith('.html'));

  if (!htmlFile) {
    throw new Error('No HTML file found in the extracted folder.');
  }

  const htmlFilePath = path.join(outputPath, htmlFile);
  console.log(`Found HTML file: ${htmlFilePath}`);

  const absoluteFilePath = path.resolve(htmlFilePath).replace(/\\/g, '/');
  console.log(`Navigating to: file://${absoluteFilePath}`);

  await this.page.goto(`file://${absoluteFilePath}`);
  console.log('Navigated to the extracted HTML file.');
  await this.page.waitForTimeout(5000)

  await expect.soft(this.page.locator('//*[@id="u_content_heading_2"]/tbody/tr/td/h1/span')).toHaveText(name)

  const locator = this.page.locator('//*[@id="u_content_heading_2"]/tbody/tr/td/h1')

  const styleValue = await locator.getAttribute('style');
  expect.soft(styleValue).toContain('font-size: 65px');
 
    }

}

}



