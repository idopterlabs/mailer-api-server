# SaboresAPI

API para suporte do app Sabores do Pará.

## Envio de Email

Verificar valor de AUTH-KEY no servidor.

`curl -X POST -d '{"destination":"endereco-de-email@email.com"}' -H "Content-Type: application/json" -H "x-auth: VALOR-DE-AUTH-KEY" http://dry-castle-68291.herokuapp.com/contact-us`
