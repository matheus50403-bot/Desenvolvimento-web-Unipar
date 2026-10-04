import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const post = {
    titulo: "Título do meu post",
    autor: "Seu Nome",
    data: "03/10/2026",
    conteudo: "Cole aqui o texto do post que você fez na atv1.",
  };

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;