import styles from "../page.module.scss";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <h2>About</h2>
        <p>
          Open Späti is an open archive for the poetry of the everyday – the
          personal and emotions shared with the public.
          <br />
          <br />
          Through conversations and walks in our neighborhood in Moabit, we have
          come across the cultural relevance of Spätis and want to write a
          shared manifesto: somewhere between research and fiction, an open
          “Späti” - as an open archive of the everydayness, of stories and
          fantasies from the neighborhood, displayed in a broad shop window.
          Seeking a way to embed art and poetry into everyday situations and
          spaces, “Open Späti” attempts to interrupt the ordinary and create
          moments of tranquillity and reflection.
          <br />
          <br />
          This website serves as a digital submission space for verses and
          poems, inviting Späti owners and friends, passengers and poets to
          share moments of urban life in verse.
          <br />
          <br />
          We aim to provide easy access to the communal experience of
          literature: While gathering at the Späti, we spin networks that
          connect the local and beyond. In this way, “Open Späti” is not only a
          physical space, but also attempts to create an open, social archive of
          the everyday stories of Berliners.
        </p>
        <h2>Über uns</h2>
        <p>
          Open Späti ist ein offenes Archiv für Alltagslyrik – Persönliches und
          Gefühle, die in der Öffentlichkeit ausgestrahlt werden.
          <br />
          <br />
          Bei Gesprächen und Spaziergängen in unserem Kiez in Moabit sind wir
          auf Spätis als Orte kultureller Relevanz gestoßen und wollen ein
          gemeinsames Manifest schreiben: zwischen Forschung und Fiktion, ein
          “Offener Späti” – als Bildmetapher eines offenen Archivs von
          Geschichten, Alltag und Fantasien aus der Nachbarschaft, das in einem
          breiten Schaufenster zur Schau steht. Mit dem Ziel, Kunst und Lyrik in
          alltägliche Situationen und deren Räumlichkeiten zu bringen, versucht
          “Open Späti” den Alltag zu unterbrechen und Momente der Ruhe und
          Reflexion zu schaffen.
          <br />
          <br />
          Diese Website dient als digitaler Einsendungsraum für Verse und
          Gedichte. Sie lädt Spätibetreiber*innen und -freund*inen,
          Passant*innen und Poet*innen ein, Momentaufnahmen des Straßenraums in
          Versen zu teilen.
          <br />
          <br />
          Ein niedrigschwelliger Zugang zum gemeinsamen Erleben von Literatur
          soll geschaffen werden: Beim Cornern am Späti um die Ecke lassen sich
          nun nachbarschafts- und herkunftsübergreifende Netzwerke spinnen.
          Damit stellt “Open Späti” nicht nur einen physischen Raum dar, sondern
          strebt die Schaffung eines offenen, sozialen Archivs aus
          Alltagsgeschichten der Berliner*innen an.
        </p>
      </div>
    </main>
  );
}
