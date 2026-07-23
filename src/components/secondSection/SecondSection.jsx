import rings from '../../assets/rings2.svg';
import copas from '../../assets/discoBall.svg';
import temple from '../../assets/temple.svg';
import CountDownSecondary from '../countDownSecondary/CountDownSecondary';
import WeddingDetailSecondary from '../weddingDetailSecondary/WeddingDetailSecondary';
import './second-section.css';

export default function SecondSection() {
  return (
    <section className="second-section">
      <CountDownSecondary />

      <div className='px-8'>
        <WeddingDetailSecondary
          event={"Civil"}
          date={"Viernes 28 de Noviembre - 11hs"}
          address={"Beruti 3325"}
          link={"https://maps.app.goo.gl/RhYPcV6mKZykStrt8"}
          logo={rings}
        />

        <WeddingDetailSecondary
          event={"Sellamiento"}
          date={"Sabado 29 de Noviembre - 15hs"}
          address={"Autopista Riccheri 4955"}
          link={"https://maps.app.goo.gl/rrmCoHoJWRzqEA9r5"}
          logo={temple}
          connectorGap
        />

        <WeddingDetailSecondary
          event={"Fiesta"}
          date={"Viernes 28 de Noviembre - 19:45hs"}
          link={"https://maps.app.goo.gl/2nBuGpXNnerzN1t69"}
          logo={copas}
          connector={false}
          moreInfo
        />
      </div>
    </section>
  );
}
