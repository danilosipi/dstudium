type JsonLdProps = {
  /** Objeto ou grafo JSON-LD já montado. */
  data: object;
};

/**
 * Serializa JSON-LD de forma segura para <script type="application/ld+json">.
 * Escapa `<` para evitar quebra do tag script com conteúdo dinâmico.
 */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
