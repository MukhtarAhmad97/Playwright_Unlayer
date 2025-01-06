require('dotenv').config()
import { test, expect, chromium } from '@playwright/test'
import { Sprint1 } from '../Pages/unlayer'


import MailosaurClient from "mailosaur";

const mailosaur = new MailosaurClient("YOUR_API_KEY_HERE")


let page 

                 

test.beforeAll(async ({browser})=>{

  page=await browser.newPage() 
  test.setTimeout(300000)

  await page.goto("https://unlayer.com/templates/team-member-introduction-email")

  
})



  

  test(' Verify thatwds Adhoc Add Task should be created from +Add New button from workbench.', async () => {
    const sm = new Sprint1(page)
    await sm.verifyfusion()
  })
  








































test.only(' Verify that Adhssoc Add kTask should be created from +Add New button from workbench.', async () => {
    const sm = new Sprint1(page)
    await sm.verifyfusion()
  })



