# Deploy Node.js on Render 

## Setup project
Firstly we gonna setup project with basic concepts.

- Create a new project and start with node `mkdir my-project && cd my-project && npm init -y`
- Now start git inside directory using `git init`
- Create a new GitHub repository to upload project

## Inside directory
Now we have to configure Docker to make container of this application. Make sure you have Docker installed on your PC.

- Inside root directory you gonna create `Dockerfile` using `touch Dockerfile` or `New-File Dockerfile` on windows
- Create a `.dockerignore` too and add the following code: 

``` .dockerignore
node_modules
npm-debug.log
.env
```
- Now create `.gitignore` and add the following code:
``` .gitignore
node_modules
.env
```
The next step is configure `Dockerfile`
``` Dockerfile
node_modules
npm-debug.log
.env
```
