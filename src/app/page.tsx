import Botao from './components/seriados/botao';

export default function Home() {
  return (
    <div className={`
     flex justify-center items-center h-screen
     bg-gradient-to-bl from-blue-900 via-purple-900 to-purple-500
     text-white`}>
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Bem-vindo ao sistema de Reviews de Seriados do João</h1>
        
        <p className="mb-4"> {/* Adiciona margem na parte inferior do parágrafo */}
          <a href="/seriados" className="text-lg no-underline hover:text-amver-300 ml-2">
            <Botao cor="bg-gradient-to-r from-blue-400 to-blue-600">Clique aqui para conferir</Botao>
          </a>
        </p>
        
        <div className="flex justify-center items-center mb-2">
          <img
            src="https://media.tenor.com/0UazhgbDDLIAAAAC/watching-tv-spongebob.gif"
            alt="Imagem 1"
            style={{ width: '50%', marginRight: '2%' }}  
          />
          
          <img
            src="https://media.tenor.com/MDE9_vSK6mIAAAAC/television-spongebob.gif"
            alt="Imagem 2"
            style={{ width: '47%' }}
          />
        </div>
      </section>
    </div>
  );
}