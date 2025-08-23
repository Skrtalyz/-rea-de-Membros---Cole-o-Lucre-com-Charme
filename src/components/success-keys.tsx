"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export interface SuccessKeyItem {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  badge?: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    icon?: React.ReactNode;
  };
  checkoutUrl: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
}

export const successKeyItems: SuccessKeyItem[] = [
  {
    slug: "primeira-venda-48h",
    title: "Primeira Venda em 48h",
    subtitle: "Faça sua primeira venda em 2 dias.",
    price: "4,99",
    badge: { text: "Mais vendido", variant: "default" },
    checkoutUrl: "[LINK_CHECKOUT_48H]",
    icon: "🥇",
    imageUrl: "https://i.postimg.cc/QCHsx1c5/Whisk-039fa9cfba.jpg",
    imageAlt: "Imagem do produto Primeira Venda em 48h",
  },
  {
    slug: "mensagem-secreta-pix",
    title: "Mensagem Secreta do PIX",
    subtitle: "O script que faz o cliente pagar na hora.",
    price: "8,75",
    badge: { text: "Recomendado", variant: "secondary" },
    checkoutUrl: "[LINK_CHECKOUT_PIX]",
    icon: "⭐",
    imageUrl: "https://i.postimg.cc/vZRMb1Tg/Whisk-a7fa729a79.jpg",
    imageAlt: "Imagem do produto Mensagem Secreta do PIX",
  },
  {
    slug: "lista-100-pecas",
    title: "Lista de 100 Peças que Vendem o Ano Todo",
    subtitle: "100 peças que mais vendem o ano inteiro.",
    price: "9,90",
    checkoutUrl: "[LINK_CHECKOUT_100PECAS]",
    icon: "📜",
    imageUrl: "https://i.postimg.cc/QN1ZS80j/Whisk-3484845323.jpg",
    imageAlt: "Imagem do produto Lista de 100 Peças que Vendem o Ano Todo",
  },
  {
    slug: "combo-moldes-rapidos",
    title: "Combo de Moldes Rápidos (Peças em até 2h)",
    subtitle: "Projetos express para vender muito em pouco tempo.",
    price: "9,90",
    checkoutUrl: "[LINK_CHECKOUT_MOLDES]",
    icon: "⚡️",
    imageUrl: "https://i.postimg.cc/6pHkTy5f/Whisk-feb9085671.jpg",
    imageAlt: "Imagem do produto Combo de Moldes Rápidos",
  },
  {
    slug: "agenda-1000-reais",
    title: "Agenda dos R$1.000 em 30 Dias",
    subtitle: "Seu roteiro para bater R$1.000 no 1º mês.",
    price: "6,99",
    checkoutUrl: "[LINK_CHECKOUT_AGENDA]",
    icon: "🗓️",
    imageUrl: "https://i.postimg.cc/kGdZLSfq/Whisk-ec323b3d19.jpg",
    imageAlt: "Imagem do produto Agenda dos R$1.000 em 30 Dias",
  },
];

export const constructCheckoutUrl = (baseUrl: string, slug: string) => {
  return `${baseUrl}?src=membros&upsell=${slug}`;
}

export function SuccessKeyCard({ item }: { item: SuccessKeyItem }) {
    return (
        <Card className="flex flex-col h-full text-left shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative w-full aspect-square">
                <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <CardHeader className="flex-row items-start gap-4 space-y-0">
                <span className="text-4xl mt-1">{item.icon}</span>
                <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground leading-tight">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{item.subtitle}</CardDescription>
                </div>
                {item.badge && (
                <Badge variant={item.badge.variant} className="whitespace-nowrap">
                    {item.badge.text}
                </Badge>
                )}
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-between gap-4 pt-0">
                <div className="text-center bg-primary/10 py-2 rounded-lg">
                    <p className="text-xl text-primary font-bold">+ R$ {item.price}</p>
                </div>
              <Button
                asChild
                size="lg"
                className="w-full text-md h-11"
              >
                <a
                  href={constructCheckoutUrl(item.checkoutUrl, item.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Comprar ${item.title}`}
                >
                  Quero comprar também!
                </a>
              </Button>
            </CardContent>
          </Card>
    )
}

export function SuccessKeys() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in">
        <div className="flex flex-col gap-2 text-center">
            <h1 className="text-5xl font-headline text-primary">🔑 Chaves do Sucesso Rápido</h1>
            <p className="text-lg text-muted-foreground">Itens opcionais para acelerar seus resultados. Adicione quando quiser.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {successKeyItems.map((item) => (
          <SuccessKeyCard item={item} key={item.slug} />
        ))}
      </div>
    </div>
  );
}
