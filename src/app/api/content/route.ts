import { NextResponse } from "next/server";
// Dummy data
const posts = [
  {
    title: 'Lorem Ipsum em Português',
    slug: 'lorem-ipsum-em-portugues',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
  {
    title: 'Exemplo de Título',
    slug: 'exemplo-de-titulo',
    content:
      'Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Cras in nisl nisi. Quisque vel justo.',
  },
  {
    title: 'Publicação de Teste',
    slug: 'publicacao-de-teste',
    content:
      'Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.',
  },
];

export async function GET() {
  return NextResponse.json(posts);
}