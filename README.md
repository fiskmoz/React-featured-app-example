# Remote React feature app example

Feature Hub is a container that hosts one or many featured apps

A featured app is a stand alone application that can be imported by feature hubs

This example uses react and webpack federation modules to load feature apps from remote sites.

Learn more here:   
https://feature-hub.io/docs/getting-started/introduction

## Getting started

We are using the following:   
React   
Webpack   
Serve   

Installing webpack CLI:   
`npx i -g webpack-cli`    

Installing Serve:     
`npx i -g serve`    

Starting the application:   
`cd feature-hub-example`   
`npm i`   
`npm start`   

Serving the remote featured app locally:   
`cd feature-app-example`   
`serve -l 1234`

Updating the featured app:   
`cd feature-app-example`   
`npm i`   
`npx webpack-cli`   
