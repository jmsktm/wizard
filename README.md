# wizard

Resources
---------
* **Github page**  
  <https://jmsktm.github.io/wizard>  
  
##### Script
* **wizard-script.js**  
  <https://jmsktm.github.io/wizard/build/script/wizard-script.js>
* **wizard-script-min.js**  
  <https://jmsktm.github.io/wizard/build/script/wizard-script-min.js>

##### Script
* **wizard-style.css**  
  <https://jmsktm.github.io/wizard/build/style/wizard-style.css>
* **wizard-style-min.css**  
  <https://jmsktm.github.io/wizard/build/style/wizard-style-min.css>

Versioning
----------
Version is formatted as `<major_version>.<minor_version>.<patch_version>`  

**Bump major version**  
```
grunt bump_major
```

**Bump minor version**  
```
grunt bump_minor
```

**Bump patch version**  
```
grunt bump_patch
```

Running in `dev` mode
---------------------
```
grunt dev
```
When running in `dev` mode, the server runs on http port 3000 and https port 3001. To opt for a different port, say port 8000 for http and 8001 for https, run the below command:

```
grunt dev --port=8000 --httpsPort=8001
```

Markdown viewer
---------------
To view the markdown (README.md or otherwise), install the `markdown-preview` package.
```
npm install -g markdown-preview
```
To preview:
```
markdown-preview README.md
```
This updates the view in real time.
