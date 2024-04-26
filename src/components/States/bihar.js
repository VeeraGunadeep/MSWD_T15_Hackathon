import React from 'react';
import State from "../States/State";
import video from './videos/bihar.mp4';

export default function Bihar() {
  return (
    <div className="destination">
      <h1>Bihar</h1>
      <video width="750" height="500" controls >
        <source src={video} type="video/mp4"/>
      </video>
      <State 
        className="first-des"
        heading="Geography"
        text="Bihar is located in the eastern part of India, bordered by Nepal, West Bengal, Uttar Pradesh, and Jharkhand. The state is traversed by the Ganges River, which enriches its fertile plains and supports its agricultural economy."
        img1="https://www.mapsofindia.com/ci-moi-images/answers/2019/12/bihar-map.jpg"
      />
      <State 
        className="first-des-reverse"
        heading="Historical Significance"
        text="Bihar has a rich historical heritage, being home to ancient kingdoms and empires such as the Maurya and Gupta dynasties. Nalanda, an ancient center of learning, was located in Bihar and attracted scholars from around the world."
        img1="https://cultureandheritage.org/wp-content/uploads/2023/03/image-17.png"
      />
      <State 
        className="first-des"
        heading="Language"
        text="Hindi is the primary language spoken in Bihar, but the state also has a significant population speaking Bihari languages like Magahi, Bhojpuri, and Maithili."
        img1="https://s3.youthkiawaaz.com/wp-content/uploads/2017/01/06022339/maxresdefault.jpg"
      />
      <State 
        className="first-des-reverse"
        heading="Economy"
        text="Bihar's economy is primarily agrarian, with agriculture being the mainstay. The state is known for its production of rice, wheat, maize, and pulses. Efforts are underway to promote industries like textiles and manufacturing."
        img1="https://www.researchgate.net/publication/257142278/figure/fig2/AS:341267516018711@1458375924924/ndices-of-economic-and-social-susceptibility-Andhra-Pradesh-1970-1995-Indizes-der.png"
      />
      <State 
        className="first-des"
        heading="Culture"
        text="Bihar's culture is rich and diverse, with festivals like Chhath Puja and Sama Chakeva being celebrated with fervor. The state has a vibrant tradition of folk music, dance, and art, including the famous Madhubani paintings."
        img1="https://textilevaluechain.in/wp-content/uploads/2020/03/image-10.png"
      />
      
    </div>
  );
}
