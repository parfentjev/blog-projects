# Client

Dummy web client written with TypeScript and React.

## Coegen

First, install the openapi-generator-cli tool:

```shell
npm i @openapitools/openapi-generator-cli
```

```shell
npx openapi-generator-cli generate -i ../openapi.yaml \
    -g typescript-fetch \
    -o src/api
```

## Run

Once the server is running:

```shell
node install
npm start
```

# Misc.

This favicon was generated using the following font:

- Font Title: League Gothic
- Font Author: Copyright 2020 The League Gothic Project Authors (https://github.com/theleagueof/league-gothic)
- Font Source: http://fonts.gstatic.com/s/leaguegothic/v11/qFdR35CBi4tvBz81xy7WG7ep-BQAY7Krj7feObpH_-amidQ6Q9hn.ttf
- Font License: SIL Open Font License, 1.1 (http://scripts.sil.org/OFL))
