import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Expectations from "./Sections/Expectations";
import Description from "./Sections/Description";
import MainTrainer from "./Sections/MainTrainer";
import Team from "./Sections/Team";
import Dipolomas from "./Sections/Dipolomas";
import Answers from "./Sections/Answers";
import LastChance from "./Sections/LastChance";
import Footer from "./Sections/Footer";
import Philosopy from "./Sections/Philosopy";
import "./i18n";

function App() {
  return (
    <main className="bg-white">
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <Expectations />
      </section>
      <section>
        <Description />
      </section>
      <section>
        <Philosopy />
      </section>
      <section>
        <MainTrainer />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <Dipolomas />
      </section>
      <section>
        <Answers />
      </section>
      <section>
        <LastChance />
      </section>
      <Footer />
    </main>
  );
}

export default App;
