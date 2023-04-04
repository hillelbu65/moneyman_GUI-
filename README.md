# moneymanGUI

## What is it?
Simple graphical user interface for expenses monitoring.

## Getting Started
### Website

1. Go to moneymangui.com
2. select the type of your data provaidor (moneyman or caspion).
3. go to your google worksheet (from a your browser only).
1- Copy the worksheet id from the url and paste it In the login page.
2- Copy the sheet name and paste it In the login page.
  
  
  1. Fork the [moneyman](https://github.com/daniel-hauser/moneyman) repo to your account
2. Add the following secrets to the [actions secrets](../../settings/secrets/actions) of the forked repo
   1. [`ACCOUNTS_JSON`](#add-accounts-and-scrape) - So moneyman can login to your accounts
   2. [`TELEGRAM_API_[KEY, CHAT_ID]`](#get-notified-in-telegram) - So moneyman can send private logs and errors
   3. The environment variables of the storage you want to use
3. Wait for the workflow to be triggered by github
 
### localy 
This option requiers some tecnical skils. When you choose to go this way you should by careful for your data.

#### Setup
1. Clone the code to a local repo.
2. Create GCP project by this guide (WIP)
3. On your project side bar go to APIs & Services > API Library Search for Google Sheets API and enabel it.


