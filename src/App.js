import React, { Component } from 'react';
import './App.css';
import imagem from "/home/patrickr/ProjetosReact/site_react/src/src/images/image-512-288.png";
import imagem2 from "/home/patrickr/ProjetosReact/site_react/src/src/images/imagem10.png";
import imagem3 from "/home/patrickr/ProjetosReact/site_react/src/src/images/imagem5.png";
import imagem4 from "/home/patrickr/ProjetosReact/site_react/src/src/images/imagem2.png";
import imagem5 from "/home/patrickr/ProjetosReact/site_react/src/src/images/imagem6.png";
import imagemfundo from"/home/patrickr/ProjetosReact/site_react/src/src/images/imagem de fundo.png";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
      <Header>
        <Logo src={imagem} alt="Logo" />
        <Menu>
          <MenuItem>Personagens</MenuItem>
          <MenuItem>Filmes</MenuItem>
          <MenuItem>HQs</MenuItem>
          <MenuItem>Sair</MenuItem>
        </Menu>
      </Header>
      <Main>
        <Card>
          <CardImage src={imagem2} alt="Wanda Maximoff" />
          <CardContent>
            <CardTitle>Wanda Maximoff</CardTitle>
            <CardText>
              Mundialmente conhecida por sua manipulação de energia telecinética
              e psíquica e por ser uma Voluntária dos Vingadores, desde os Atos
              de Sokovia. Recentemente, após o ataque do Ultimato dos Vingadores
              contra Thanos em 2023, ela se isolou em Westview onde viveu um
              luto simbólico até ser resgatada pelos seus amigos dos Vingadores.
            </CardText>
            <CardButton>ver detalhes</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={imagem3} alt="Thanos" />
          <CardContent>
            <CardTitle>Thanos</CardTitle>
            <CardText>
              A ameaça que gerou o maior encontro de heróis já visto!
              Reconhecido mundialmente por sua tenacidade. Mentor tinha ideias
              fixas e era obcecado pela morte. Foi o responsável pelo estalo que
              dizimou metade da população do universo em 2018 tornando
            </CardText>
            <CardButton>ver detalhes</CardButton>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={imagem4} alt="Hulk" />
          <CardContent>
            <CardTitle>Hulk</CardTitle>
            <CardText>
              Hulk é um personagem fictício que aparece nas histórias em
              quadrinhos publicadas pela Marvel Comics. Criado pelo escritor
              Stan Lee e pelo artista Jack Kirby, o personagem apareceu pela
              primeira vez na revista The Incredible Hulk #1, em maio de 1962.
            </CardText>
            <CardButton>ver detalhes</CardButton>
          </CardContent>
        </Card>
      </Main>
      <Footer>
        <Avatar src={imagem5} alt="Avatar" />
      
      </Footer>
    </Container>
          
      </div>
    );
  }
}

export default App;
