# Mailer API Server

API para suporte do app Sabores do Pará.

## Envio de Email

Verificar valor de AUTH-KEY no servidor.

```
curl -X POST -d '{"destination":"foo@bar.com"}' \
  -H "Content-Type: application/json" \
  -H "x-auth: VALOR-DE-AUTH-KEY" \
  http://your-app-url.com/contact-us
```

## Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

