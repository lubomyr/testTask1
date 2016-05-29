# testTask1

Requirements:
nodejs
npm
bower
mysql-server
maven
tomcat7
Java SDK 1.8
IntelliJ IDEA

SetUp for IntelliJ IDEA:

Open project: testtask1

File -> Project structure
Project:
project SDK: 1.8,
project language level: SDK default,

Modules: Add(+) Web

Artifacts: Add(+) WebApplication Exploded -> Load from modules -> testTask1

Run -> Edit Configuration

Add(+) Tomcat Server

Server -> ApplicationServer: Tomcat 8.x

Deployment -> Add(+) 'testTask1:war exploded'


Before run via console you need to do some Actions:

bower install

// create Database: mysql -p -uroot )

CREATE DATABASE testtask1 CHARACTER SET utf8 COLLATE utf8_unicode_ci;

// Run project and wait when you will see button 'Add new Company'

// then you can run db_script.sql script

USE testtask1;

SOURCE ~/workspace/testTask1/db_script.sql;

project temporary deployed at URL: 

http://31.179.151.210:21025/
