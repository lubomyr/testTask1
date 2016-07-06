# testTask1

Requirements:
nodejs
npm
bower
mysql-server
maven
tomcat7
Java SDK 1.8
(setup) IntelliJ IDEA

How to build. Main steps

We need console for some actions:

bower install

// create Database: mysql -p -uroot

CREATE DATABASE testtask1 CHARACTER SET utf8 COLLATE utf8_unicode_ci;

// build and run project (via maven)

mvn clean install tomcat7:run-war

// then you can run db_script.sql script

USE testtask1;

SOURCE ~/workspace/testTask1/db_script.sql;



- SetUp for IntelliJ IDEA:

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



project temporary deployed at URL:

http://31.179.151.210:21025/testTask1/
