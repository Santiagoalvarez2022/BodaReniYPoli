import rings from '../../assets/rings2.png';
import copas from '../../assets/discoBall.svg';
import temple from '../../assets/temple.svg';
import CountDownSecondary from './components/countDownSecondary/CountDownSecondary';
import WeddingDetailSecondary from './components/weddingDetailSecondary/WeddingDetailSecondary';
import './eventsDetailsSection.css';

export default function EventsDetailsSection() {
  return (
    <section className="second-section pt-8">
      <CountDownSecondary />

      <div className='px-8 py-5'>
        <WeddingDetailSecondary
          event={"Civil"}
          date={"Viernes 13 de Noviembre - 09:30hs"}
          address={"Sede comunal 1 "}
          link={"https://maps.app.goo.gl/c3JhTDcfp3JkGtsc8"}
          logo={rings}
        />

        <WeddingDetailSecondary
          event={"Sellamiento"}
          date={"Viernes 13 de Noviembre - horario a confirmar."}
          address={"Autopista Riccheri 4955"}
          link={"https://maps.app.goo.gl/rrmCoHoJWRzqEA9r5"}
          logo={temple}
          connectorGap
        />

        <WeddingDetailSecondary
          event={"Fiesta"}
          date={"Viernes 13 de Noviembre - 20:45hs"}
          link={"https://maps.app.goo.gl/2nBuGpXNnerzN1t69"}
          logo={copas}
          connector={false}
          moreInfo
        />
      </div>
    </section>
  );
}
