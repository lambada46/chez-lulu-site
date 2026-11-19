# Chez Lulu — site MVP

Protótipo mobile-first em Next.js, usando fotografias fornecidas pelo restaurante.

## Iniciar

1. Instale Node.js 20 ou superior.
2. `npm install`
3. Copie `.env.example` para `.env.local` e preencha telefone/endereço reais.
4. `npm run dev`
5. Abra http://localhost:3000

## Importante

- Este é um protótipo, não um site pronto para publicação.
- Confirmar horário, telefone, endereço, textos da história, autorização para uso de fotos de pessoas, informações da exposição e links de imprensa.
- A boutique e os idiomas EN/ES/IT ainda não estão implementados.
- CMS e pagamentos serão integrados em etapas posteriores.
- Não publicar placeholders ou informações não verificadas.

## Cardápio

Edite `app/carte/menu.ts` para adicionar categorias e pratos confirmados. Cada prato exige um nome e aceita descrição, preço numérico em euros e uma lista de alérgenos. Omitir alérgenos mantém essa informação reservada até a confirmação.

## Cloudflare Pages

Use `npm run build` como comando de compilação e `out` como diretório de publicação. O site é exportado como arquivos estáticos. Para desenvolvimento local, use `npm run dev`.
