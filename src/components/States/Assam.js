import React from 'react';
import State from "../States/State";
import video from './videos/assam.mp4';

export default function Assam() {
  return (
    <div className="destination">
      <h1>Assam</h1>
      <State
        className="first-des"
        heading="Tea Gardens"
        text="Assam is renowned for its lush tea gardens, producing some of the finest varieties of tea in the world. Visitors can explore sprawling estates, witness tea processing, and savor aromatic brews amidst scenic vistas."
        img1="https://images.unsplash.com/photo-1573550367331-38546c15f3b4"
      />
      <State
        className="first-des-reverse"
        heading="Majestic Wildlife"
        text="Assam is home to diverse wildlife sanctuaries and national parks, including Kaziranga, Manas, and Nameri, harboring iconic species like the Indian rhinoceros, Bengal tiger, and Asian elephant. Wildlife enthusiasts can embark on safaris and nature trails to spot these majestic creatures in their natural habitats."
        img1="https://images.unsplash.com/photo-1575982697484-8f52f6c6421e"
      />
      <State
        className="first-des"
        heading="Cultural Heritage"
        text="Assam's rich cultural heritage is showcased through its traditional art forms, festivals, and handicrafts. The state is known for vibrant celebrations like Bihu, showcasing Assamese music, dance, and cuisine. Visitors can also admire intricate Assamese silk weaving and exquisite bamboo craftmanship."
        img1="https://images.unsplash.com/photo-1576017908799-7a6e1febbd77"
      />
      <State
        className="first-des-reverse"
        heading="River Cruises"
        text="Assam's majestic rivers, including the Brahmaputra, offer enchanting river cruises that provide a unique perspective of the state's natural beauty and cultural treasures. Travelers can embark on leisurely boat rides, sunset cruises, and island explorations, immersing themselves in Assam's tranquil riverine landscapes."
        img1="https://images.unsplash.com/photo-1605090647501-3453e02554f0"
      />
      <State
        className="first-des"
        heading="Majestic Temples"
        text="Assam boasts ancient temples and architectural marvels, such as the Kamakhya Temple, Umananda Temple, and Navagraha Temple, revered by devotees and historians alike. These sacred sites showcase Assam's spiritual legacy and architectural prowess, attracting pilgrims and tourists from far and wide."
        img1="https://images.unsplash.com/photo-1612932435970-27f726349531"
      />
      <video width="750" height="500" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
