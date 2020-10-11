Small test with Deno, React, and Oak : after being launched once, the webapp is available offline (the client part is cached by Deno).

# Run

* From github: 
```
deno run --allow-net --unstable --allow-read https://raw.githubusercontent.com/jersou/react-deno-test/master/server.ts
```

* or clone and run locally:
```
git clone https://github.com/jersou/react-deno-test.git
cd react-deno-test
deno run --allow-net --unstable --allow-read server.ts
```
* or execute the file :
```
./server.ts
```

Then, go to http://localhost:8000/


# Misc.

## Generate the static WebApp files

```
git clone https://github.com/jersou/react-deno-test.git
cd react-deno-test/
deno run --allow-net --unstable --allow-read --allow-write static_bundler.ts
```
Then, put the index.html and script.js files on an HTTP server.

Example :
```
cd dist
deno run --allow-net --allow-read https://deno.land/std@0.74.0/http/file_server.ts
```


## Clear the HTTP cache

To clear the cache if run from web (this is not necessary if it is launched locally) :
* `deno cache --reload --unstable https://raw.githubusercontent.com/jersou/react-deno-test/`
* or `deno run --reload --allow-net --unstable --allow-read https://raw.githubusercontent.com/jersou/react-deno-test/master/server.ts`


## DENO_DIR
To keep/see all cached files :
```
DENO_DIR=./react-deno-test-cache deno run  --allow-net --unstable --allow-read https://raw.githubusercontent.com/jersou/react-deno-test/master/server.ts
```

