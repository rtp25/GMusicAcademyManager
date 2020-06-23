# GMusicAcademyManager

GMusicAcademyManager is a CRUD web application that helps keep track of the Item inventory, Customers, Employees, Sessions and Transactions of GMusic Academy. 

## Dependencies

You will need the following dependencies installed before you get started.

1. [JDK](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) (1.8 or newer)
2. [MySQL Database Server](https://dev.mysql.com/downloads/mysql/)
3. [Node.js 8](https://nodejs.org/en/)   
4. Java IDE (Eclipse IDE, IntelliJ IDEA, etc)  


## Running the Program

### Build

The application builds with Maven, which is added on the pom.xml file, along with other essential dependencies previously added.

### Run
To start the web server, simply run the GMusicAcademyManagerApplication.java file as a "Java Application" on the IDE.

Additionally, to start the Node.js developement server use the following command on the command line:

```
npm start
```

Your browser will then automatically open up to http://localhost:3000/ and you will see the home page.

## Upcoming Changes

This application is still currently in progress. Below are some (not all) of the updates needed.
  - Fix the PUT request on the client side for the Customers objects
  - Add front-end REST functions for remainder of the database objects(Items, Employees, Sessions and Transactions)
  - Deploy to a remote server instead of hosting locally.
 
 ## Author
 - Rogelio Paniagua
