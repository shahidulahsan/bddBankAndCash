$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCash.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankCash"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "User should be able to login with valid username and password and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User able to see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on bank and cash",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on new account",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User fill up the form entering \"\u003caccountTitle\u003e\" and \"\u003cdescription\u003e\"and \"\u003cinitialBalance\u003e\"and \"\u003caccountNumber\u003e\"and \"\u003ccontactPerson\u003e\" and \"\u003cphone\u003e\" and \"\u003cinternetBankingUrl\u003e\" and clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be able to see validate",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingUrl"
      ],
      "line": 19,
      "id": "techfios-bank-and-cash-new-account-functionality;;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Shahidul Ahsan",
        "Savings",
        "2500",
        "25345423",
        "Ahsan",
        "3473412",
        "www.abc.com"
      ],
      "line": 20,
      "id": "techfios-bank-and-cash-new-account-functionality;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4029794800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "BankAndCashSteps.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 653953700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "User should be able to login with valid username and password and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BankCash"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User able to see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on bank and cash",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on new account",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User fill up the form entering \"Shahidul Ahsan\" and \"Savings\"and \"2500\"and \"25345423\"and \"Ahsan\" and \"3473412\" and \"www.abc.com\" and clicks on submit",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be able to see validate",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "BankAndCashSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 205235500,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.user_clicks_on_signIn_button()"
});
formatter.result({
  "duration": 1159489300,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.user_able_to_see_the_dashboard()"
});
formatter.result({
  "duration": 901225400,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.user_clicks_on_bank_and_cash()"
});
formatter.result({
  "duration": 188263200,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashSteps.user_clicks_on_new_account()"
});
formatter.result({
  "duration": 599441600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shahidul Ahsan",
      "offset": 32
    },
    {
      "val": "Savings",
      "offset": 53
    },
    {
      "val": "2500",
      "offset": 66
    },
    {
      "val": "25345423",
      "offset": 76
    },
    {
      "val": "Ahsan",
      "offset": 90
    },
    {
      "val": "3473412",
      "offset": 102
    },
    {
      "val": "www.abc.com",
      "offset": 116
    }
  ],
  "location": "BankAndCashSteps.user_fill_up_the_form_entering_and_and_and_and_and_and_and_clicks_on_submit(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 17134672000,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d89.0.4389.114)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-D5GEP091\u0027, ip: \u0027192.168.133.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\13473\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60018}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5baa24fc74e7468daf37fe5512613f2e\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027description\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat page.BankAndCashPage.descriptionField(BankAndCashPage.java:54)\r\n\tat steps.BankAndCashSteps.user_fill_up_the_form_entering_and_and_and_and_and_and_and_clicks_on_submit(BankAndCashSteps.java:69)\r\n\tat ✽.And User fill up the form entering \"Shahidul Ahsan\" and \"Savings\"and \"2500\"and \"25345423\"and \"Ahsan\" and \"3473412\" and \"www.abc.com\" and clicks on submit(features/BankAndCash.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankAndCashSteps.user_should_be_able_to_see_validate()"
});
formatter.result({
  "status": "skipped"
});
});