# create-react-component

Dev:

```
npm run execute -- generate -n MyComponent
```

Prod:

```
npm run pack
sudo npm uninstall -g create-react-component
sudo npm i -g create-react-component-1.0.0.tgz
```

then, in the destination project, create a npm script, e.g.:

```
  "scripts": {
    "component": "node /usr/local/lib/node_modules/create-react-component generate"
  },
```

and use it as follows:

```
npm run component -- -n MyComponent
```
