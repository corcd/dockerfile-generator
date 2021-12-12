# dockerfile-generator

Generating Dockerfile from JSON
  
![Node.js CI](https://github.com/tudvari/dockerfile-generator/workflows/Node.js%20CI/badge.svg)

## Version 4.1.0 (12.12.2021)

Custom development version by gdyfe

## Installation

```shell
npm install @gdyfe/dockerfile-generator
yarn install @gdyfe/dockerfile-generator
```

## How to use the library

You can find here the reference doc: [References](References.md).

```Javascript
const generator = require('dockerfile-generator')

const result = await generator.generateDockerFile(inputJson)
// Result is a generated Dockerfile.

const generateResult = generator.generateDockerFileFromArray(inputArray)
// Result is a generated Dockerfile.

const genereratedIgnore = await generator.generateIgnoreFile(ignoredElementsArray)
// generatedIgnore is a generated dockerignore file
```

## Examples

##### Example for Dockerfile Generation JSON Input ( generateDockerFile function )

###### Input

```json
    {
      "from": "nginx:latest",
      "run": [ "mkdir -p /var/run/docker", "rm -rf /var/run/docker" ],
      "volumes": [ "/home/testuser/app" ],
      "user": "testuser",
      "working_dir": "/home/testuser/app",
      "labels": {
        "name": "value"
      },
      "env": {
        "env1": "value1",
        "env2": "value2"
      },
      "add": {
        "test.run" : "/home/testuser/app/test.run"
      },
      "copy":  {
        "test.cmd" : "/home/testuser/app/test.cmd"
      },
      "entrypoint": "tail",
      "cmd": ["-f", "/dev/null"],
      "expose": ["80/tcp"],
      "args": [ "value1", "value2"],
      "stopsignal": "stop",
      "shell": [ "/bin/bash", "-c", "echo", "hello" ],
      "comment": "This is a comment"
    }
```
###### Output

```javascript
FROM nginx:latest
RUN mkdir -p /var/run/docker
RUN rm -rf /var/run/docker
VOLUME /home/testuser/app
USER testuser
WORKDIR /home/testuser/app
LABEL name=value
ENV env1=value1
ENV env2=value2
ADD test.run /home/testuser/app/test.run
COPY test.cmd /home/testuser/app/test.cmd
ENTRYPOINT [ "tail" ]
CMD [ "-f", "/dev/null" ]
EXPOSE 80/tcp
ARG value1
ARG value2
STOPSIGNAL stop
SHELL [ "/bin/bash", "-c", "echo", "hello"]
# This is a comment
```

##### Example for Dockerfile Generation Array Input ( generateDockerFileFromArray function )

###### Input

```json
  [
    {
      "from": "nginx:latest"
    },
     {
      "run": [ "mkdir -p /var/run/docker", "rm -rf /var/run/docker" ]
    },
     {
      "volumes": [ "/home/testuser/app" ]
    },
     {
      "user": "testuser"
    },
     {
      "working_dir": "/home/testuser/app"
    },
     {  
      "labels": {
        "name": "value"
      }
    },
     {
      "env": {
        "env1": "value1",
        "env2": "value2"
      }
    },
     {
      "add": {
        "test.run" : "/home/testuser/app/test.run"
      }
    },
     {
      "copy":  {
        "test.cmd" : "/home/testuser/app/test.cmd"
      }
    },
    {  
      "entrypoint": "tail"
    },
    {
      "cmd": ["-f", "/dev/null"]
    },
    {
      "expose": ["80/tcp"]
    },
    {
      "args": [ "value1", "value2"]
    },
    {
      "stopsignal": "stop"
    },
    {
      "shell": [ "/bin/bash", "-c", "echo", "hello" ]
    },
  ]
```
###### Output

```javascript
FROM nginx:latest
RUN mkdir -p /var/run/docker
RUN rm -rf /var/run/docker
VOLUME /home/testuser/app
USER testuser
WORKDIR /home/testuser/app
LABEL name=value
ENV env1=value1
ENV env2=value2
ADD test.run /home/testuser/app/test.run
COPY test.cmd /home/testuser/app/test.cmd
ENTRYPOINT [ "tail" ]
CMD [ "-f", "/dev/null" ]
EXPOSE 80/tcp
ARG value1
ARG value2
STOPSIGNAL stop
SHELL [ "/bin/bash", "-c", "echo", "hello"]
```

#### Example for .dockerignore Generation ( generateIgnoreFile function )

##### Input

```javascript
['node_modules','.git']
```

##### Output

```javascript
node_modules
.git
```

### License

Copyright (c) 2015 Tibor Udvari. Released under the MIT license. See [LICENSE](https://github.com/tudvari/docker-composer/blob/master/LICENSE) for details.
