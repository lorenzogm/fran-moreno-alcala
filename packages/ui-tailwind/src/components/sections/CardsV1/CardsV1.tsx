import React from 'react';
import { Button, Card } from 'react-daisyui';

import { Image } from '../../../types';

export type CardsV1Props = {
  cards: Array<{
    title: string;
    description: string;
    buttonTitle: string;
    buttonLink: string;
    image: Image;
  }>;
};

export function CardsV1({ cards }: CardsV1Props) {
  return (
    <section className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {cards.map((card) => (
        <Card key={card.title}>
          <Card.Image alt={card.image.alt} src={card.image.src} />
          <Card.Body className="p-4">
            <Card.Title tag="h2">{card.title}</Card.Title>
            <p>{card.description}</p>
            <Card.Actions className="justify-end">
              <Button color="primary" href={card.buttonLink}>
                {card.buttonTitle}
              </Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}
