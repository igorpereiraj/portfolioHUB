import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-serif text-foreground">
            portfolioHUB
          </div>
          <ul className="flex gap-8 text-sm font-medium">
            <li><a href="#perfil" className="hover:text-accent transition-colors">Perfil</a></li>
            <li><a href="#curriculo" className="hover:text-accent transition-colors">Currículo</a></li>
            <li><a href="#projetos" className="hover:text-accent transition-colors">Projetos</a></li>
            <li><a href="#habilidades" className="hover:text-accent transition-colors">Habilidades</a></li>
            <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - Perfil Pessoal */}
      <section id="perfil" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-serif text-foreground mb-6">
                Igor Pereira de Jesus
              </h1>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Estudante de <span className="font-semibold text-foreground">Análise e Desenvolvimento de Sistemas</span> no CEUB, apaixonado por tecnologia e com facilidade natural para lidar com dispositivos eletrônicos e sistemas.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Busco crescer profissionalmente no ramo tecnológico em busca de estabilidade e sustentabilidade na carreira, focando em desenvolvimento de soluções inovadoras e concursos na área de TI.
              </p>
              <div className="flex gap-4">
                <a href="mailto:iguformas@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity font-medium">
                  <Mail size={18} />
                  E-mail
                </a>
                <a href="https://www.linkedin.com/in/igor-pereira-875b04394" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded hover:bg-secondary transition-colors font-medium">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-8 text-center">
              <div className="text-6xl font-bold text-accent mb-4">👨‍💻</div>
              <p className="text-muted-foreground">Desenvolvedor em Formação</p>
              <p className="text-sm text-muted-foreground mt-2">ADS - CEUB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Currículo Section */}
      <section id="curriculo" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Currículo</h2>
          <div className="w-16 h-1 bg-accent mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formação */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Formação Acadêmica</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground">Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-accent font-medium">CEUB</p>
                  <p className="text-muted-foreground text-sm">Em andamento</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-6 mt-12">Certificações</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6 bg-secondary p-6 rounded">
                  <h4 className="text-lg font-semibold text-foreground">Desenvolvimento de Banco de Dados</h4>
                  <p className="text-accent font-medium">SENAI</p>
                  <p className="text-muted-foreground text-sm">4 meses de formação intensiva</p>
                </div>
              </div>
            </div>

            {/* Habilidades Técnicas */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Habilidades Técnicas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Banco de Dados</h4>
                  <p className="text-muted-foreground">MySQL, SQL, Modelagem Relacional, Otimização de Consultas</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Lógica de Programação</h4>
                  <p className="text-muted-foreground">Portugol, Estruturas de Dados, Algoritmos</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Hardware e IoT</h4>
                  <p className="text-muted-foreground">Arduino, Prototipagem Eletrônica, Sensores</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Em Desenvolvimento</h4>
                  <p className="text-muted-foreground">Python, Java, Orientação a Objetos</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-6 mt-12">Experiência Profissional</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>✓ Estoque e Logística - Organização e Inventário</p>
                <p>✓ Segurança de Eventos - Responsabilidade e Atenção</p>
                <p>✓ Atendimento em Panificadora - Atendimento ao Cliente</p>
                <p>✓ Distribuição de Materiais - Comunicação e Alcance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Projetos</h2>
          <div className="w-16 h-1 bg-accent mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://www.tinkercad.com/things/9eHIvbBHosw-dazzling-inari" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-8 hover:border-accent transition-colors cursor-pointer">
              <h3 className="text-xl font-semibold text-foreground mb-3">Semáforo com Arduino</h3>
              <p className="text-muted-foreground mb-4">
                Projeto de prototipagem eletrônica implementando um semáforo funcional com LEDs e controle de estados. Desenvolvido em Tinkercad com simulação completa.
              </p>
              <div className="flex items-center gap-2 text-accent font-medium">
                <span>Ver no Tinkercad</span>
                <ExternalLink size={16} />
              </div>
            </a>

            <a href="https://github.com/igorpereiraj/BANCO-DE-DADOS" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-8 hover:border-accent transition-colors cursor-pointer">
              <h3 className="text-xl font-semibold text-foreground mb-3">BaseFinance - Controle de Notas Fiscais</h3>
              <p className="text-muted-foreground mb-4">
                Sistema de banco de dados MySQL para cadastro e armazenamento de notas fiscais de compras pela internet. Implementa modelagem relacional avançada com controle de dados financeiros pessoais.
              </p>
              <div className="flex items-center gap-2 text-accent font-medium">
                <span>Ver no GitHub</span>
                <ExternalLink size={16} />
              </div>
            </a>

            <div className="border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-3">Projetos Acadêmicos em Desenvolvimento</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvendo projetos práticos em Python e Java como parte do curso de ADS, aplicando conhecimentos em banco de dados e lógica de programação.
              </p>
              <div className="flex items-center gap-2 text-accent font-medium">
                <span>Em andamento</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Habilidades e Competências</h2>
          <div className="w-16 h-1 bg-accent mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Técnicas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Resolução de problemas</li>
                <li>✓ Pensamento crítico</li>
                <li>✓ Análise de requisitos</li>
                <li>✓ Atenção aos detalhes</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Interpessoais</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Trabalho em equipe</li>
                <li>✓ Comunicação clara</li>
                <li>✓ Adaptabilidade</li>
                <li>✓ Empatia</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Profissionais</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Comprometimento com qualidade</li>
                <li>✓ Aprendizado contínuo</li>
                <li>✓ Responsabilidade</li>
                <li>✓ Proatividade</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Diferenciais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-foreground">Formação Certificada</h4>
                  <p className="text-muted-foreground text-sm">Certificação SENAI em Banco de Dados com 4 meses de formação intensiva</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">◆</div>
                <div>
                  <h4 className="font-semibold text-foreground">Versatilidade Técnica</h4>
                  <p className="text-muted-foreground text-sm">Múltiplas áreas: Banco de Dados, IoT, Programação</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold text-foreground">Facilidade Técnica</h4>
                  <p className="text-muted-foreground text-sm">Aptidão natural com tecnologia e dispositivos eletrônicos</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">★</div>
                <div>
                  <h4 className="font-semibold text-foreground">Comprometimento</h4>
                  <p className="text-muted-foreground text-sm">Aprendizado contínuo em Python e Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Entre em Contato</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12"></div>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia. Sinta-se à vontade para entrar em contato!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:iguformas@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded font-medium hover:opacity-90 transition-opacity">
              <Mail size={20} />
              iguformas@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/igor-pereira-875b04394" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded font-medium hover:bg-background transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-border text-muted-foreground text-sm">
            <p>© 2026 Igor Pereira de Jesus. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
