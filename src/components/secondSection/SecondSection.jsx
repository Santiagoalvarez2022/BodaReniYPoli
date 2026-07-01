import background from '../../assets/commonBackground.png';
import rings from '../../assets/rings.png';
import copas from '../../assets/copas.png';
import temple from '../../assets/temple.png';
import CountDownSecondary from '../countDownSecondary/CountDownSecondary';
import WeddingDetailSecondary from '../weddingDetailSecondary/WeddingDetailSecondary';
import './second-section.css';

export default function SecondSection() {
  return (
    <section
      className="second-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <CountDownSecondary />

      <div className="px-4">
        <WeddingDetailSecondary
          event={"Civil"}
          date={"Viernes 28 de Noviembre - 11hs"}
          address={"Beruti 3325, CABA"}
          link={"https://maps.app.goo.gl/RhYPcV6mKZykStrt8"}
          logo={rings}
        />

        <WeddingDetailSecondary
          event={"Sellamiento"}
          date={"Sabado 29 de Noviembre - 15hs"}
          address={"Autopista Riccheri 4955, Ciudad Evita"}
          link={"https://maps.app.goo.gl/rrmCoHoJWRzqEA9r5"}
          logo={temple}
        />

        <WeddingDetailSecondary
          event={"Fiesta"}
          date={"Viernes 28 de Noviembre - 19:45hs"}
          address={"El concerro, entre El Palenque y Exaltacion de la Cruz, Buenos Aires"}
          link={"https://maps.app.goo.gl/2nBuGpXNnerzN1t69"}
          logo={copas}
          moreInfo
        />
      </div>
    </section>
  );
}
