# <span style="color:yellow">Angular</span>
- UI Framework built and maintained by Google 
- A component-based framework for building scalable app
- Provided collection of libraries to cover features like Routing, Forms, Http etc
- Written in TypeScript

## <span style="color:yellow">Framework vs Library</span>

- Framework: A framework is a collection of libraries that provides a set of features to build a complete application.You can extend the framework by adding your own code to it. Some examples are Angular, React, Vue, ExpressJS etc.

- Library: A library is a collection of reusable code that can be used to build an application. They generally perfrom specific operation. You can combine multiple libraries to build a complete application. Some examples are jQuery, Lodash, MomentJS etc.

## <span style="color:yellow">Features of Angular</span>

- Template
- Data Binding 
- Forms
- Routing
- Observables
- PWA
- SPA(Single Page Application)
- Dependency Injection
- Also supports SSR(Server Side Rendering)

    <span style="color:red">SPA does not make requests to server for every URL requests</span>


### <span style="color:yellow">Creating Angular Workspace</span>

- Angular Workspace is a collection of Angular projects and libraries
- Workspace is created using Angular CLI
- Angular CLI is a command line interface for Angular
- It is used to create new projects, generate application and library code, perform testing, and more
- It is installed using npm

    ```PowerShell
    npm install -g @angular/cli
    ```
- To create a new workspace

    ```PowerShell
    ng new <workspace-name>
    ```
- To create a new application

    ```PowerShell
    ng generate application <app-name>
    ```
- To create a new library

    ```PowerShell
    ng generate library <lib-name>
    ```
- To run the application

    ```PowerShell
    ng serve
    ```
- To run the application on a different port

    ```PowerShell
    ng serve --port <port-number>
    ```
- To run the application on a different host

    ```PowerShell
    ng serve --host <host-name>
    ```
- To run the application on a different port and host

    ```PowerShell
    ng serve --port <port-number> --host <host-name>
    ```
- To run the application in production mode

    ```PowerShell
    ng serve --prod
    ```
- To run the application in development mode

    ```PowerShell
    ng serve --dev
    ```
- To run the application in aot mode

    ```PowerShell
    ng serve --aot
    ```
- To run the application in watch mode

    ```PowerShell
    ng serve --watch
    ```
- To run the application in watch mode and aot mode

    ```PowerShell
    ng serve --watch --aot
    ```
- To run the application in watch mode and aot mode and in production mode

    ```PowerShell
    ng serve --watch --aot --prod
    ```
- To run the application in watch mode and aot mode and in development mode

    ```PowerShell
    ng serve --watch --aot --dev
    ```


## <span style="color:yellow">Introduction to mono-repo</span>

- A mono-repo is a single repository that contains multiple projects
- Create and maintain multiple projects in a single repository
- Share code between projects
- Share dependencies between projects
- Share configurations between projects
- Share build scripts between projects
- Share testing code between projects
- Share documentation between projects
