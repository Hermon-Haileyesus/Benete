import homeImage from "../assets/header_img/homeImage.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import '@fontsource/rubik';



function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header
        image={homeImage}
        title={t("header.title")}
        subtitle={t("header.subtitle")}
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to BeneCare</h2>
        <p className="text-lg text-muted-foreground">
          Add more homepage content here.
        </p>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to BeneCare</h2>
        <p className="text-lg text-muted-foreground">
          Add more homepage content here.
        </p>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to BeneCare</h2>
        <p className="text-lg text-muted-foreground">
          Add more homepage content here.
        </p>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to BeneCare</h2>
        <p className="text-lg text-muted-foreground">
          Add more homepage content here.
        </p>
      </section>
      
      
    </>
  );
}

export default Home;