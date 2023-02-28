# :sunny: Projeto Sistema Solar!

A aplicação simula uma visualização do **Sistema Solar**, bem como informações sobre diversas missões espacias que ocorreram ao longo da história.

![img](https://g3i5r4x7.rocketcdn.me/wp-content/uploads/2020/10/sistema-solar-origem-composicao-principais-astros-e-caracteristicas-1.jpg)

-----

# Habilidades

  * Utilizar JSX no React

  * Utilizar corretamente o método `render()` para renderizar seus componentes

  * Utilizar `import` para trazer componentes em diferentes arquivos

  * Criar componentes de classe em React

  * Criar múltiplos componentes a partir de um array

  * Fazer uso de `props`

  * Fazer uso de `PropTypes` para validar as `props de um componente`

-----



<!-- 

  * `git clone git@github.com:tryber/sd-021-b-project-solar-system.git`
    * `cd sd-021-b-project-solar-system`
    * `npm install`
    * `npm start` 

# Como desenvolver

## ESLint e Stylelint

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `Stylelint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos **checks** dos **linters**.

---

## Execução de testes unitários

Vamos utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários.

Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

Na descrição dos requisitos do projeto será pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Veja o exemplo abaixo para deixar mais nítido como usar esse requisito:

Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"></a>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e, dessa forma, conseguiremos realizar testes unitários focados no comportamento da aplicação.

Em alguns requisitos, utilizamos o `getByRole` para poder selecionar os elementos de forma semântica. Portanto atente-se às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um `button`, você deverá utilizar exatamente esse elemento.

Para verificar a solução proposta, você pode executar todos os testes unitários localmente, basta executar:

```bash
npm test
```

### Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `.skip` junto à função `it`. Como o nome indica, esta função "pula" um teste:

```javascript
it.skip('Será validado se o componente `<Title />` contém uma tag `h2`', () => {
  render(<Title headline={headlineText} />);
  const headline = screen.getByRole('heading', { level: 2 });
    
  expect(headline).toBeInTheDocument();
});
```

![skip-test-image](skip-image.png)

Uma outra forma para contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

```javascript
it.only('Será validado se o componente `<Title />` contém uma tag `h2`', () => {
  render(<Title headline={headlineText} />);
  const headline = screen.getByRole('heading', { level: 2 });
    
  expect(headline).toBeInTheDocument();
});
```

![only-test-image](only-image.png)


Você também pode rodar apenas um arquivo de teste, por exemplo:

```bash
npm test 03.Title.test.js
```

ou

```bash
npm test 03.Title
```
---

# Requisitos do projeto
:warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

:warning: **As imagens são meramente ilustrativas para visualizar o fluxo da aplicação, os nomes devem seguir os requisitos e não as imagens.** :warning:

## 1. Crie um componente chamado `Header`

- Crie um componente chamado `Header` dentro da pasta `src/components`. Este componente irá renderizar o título principal da página.
- Ele deve conter uma tag `header` e, dentro dela, uma tag `h1`. O texto da tag `h1` deve ser "Sistema Solar".
- Renderize o componente `Header` dentro do componente principal `App`.

![Screenshot](public/examples/req1.png)

### O que será verificado

* Será validado se o componente `<Header />` é renderizado.

* Será validado se o componente `<Header />` contém uma tag `header`.

* Será validado se o componente `<Header />` contém uma tag `h1`.

* Será validado se o componente `<Header />` renderiza corretamente o texto "Sistema Solar".

* Será validado se o componente `<Header />` está sendo renderizado no componente principal `App`.

## 2. Crie um componente chamado `SolarSystem`

- Crie um componente chamado `SolarSystem` dentro da pasta `src/components`.
- Este componente deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="solar-system"`.
- Renderize o componente `SolarSystem` abaixo do `Header`, dentro do componente principal `App`.

### O que será verificado

* Será validado se o componente `<SolarSystem />` é renderizado.

* Será validado se existe uma `div` que possui o `data-testid="solar-system"`.

* Será validado se o componente `<SolarSystem />` está sendo renderizado no componente principal `App`.

## 3. Crie um componente chamado `Title`

- Crie um componente chamado `Title` dentro da pasta `src/components`.
- O componente `Title` deve receber uma prop `headline`.
- Ele deve conter uma tag `h2`, que deve renderizar o texto recebido pela prop `headline`.

### O que será verificado

* Será validado se o componente `<Title />` é renderizado.

* Será validado se o componente `<Title />` contém uma tag `h2`.

* Será validado se o componente `<Title />` renderiza o texto passado pela prop `headline` dentro de uma tag `h2`.



## 4. Renderize o componente `Title` dentro do componente `SolarSystem`

- Renderize o componente `Title` dentro do componente `SolarSystem`.
- O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Planetas".

![Screenshot](public/examples/req4.png)

### O que será verificado

* Será validado se o texto "Planetas" é renderizado usando o componente `Title` dentro do componente `SolarSystem`.

## 5. Crie um componente chamado `PlanetCard`

- Crie um componente chamado `PlanetCard` dentro da pasta `src/components`.
- O componente `PlanetCard` deve receber duas props: uma chamada `planetName` e outra chamada `planetImage`.
- O componente `PlanetCard` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="planet-card"`.
- O componente `PlanetCard` deve renderizar o texto recebido pela prop `planetName`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="planet-name"`.
- O componente `PlanetCard` deve renderizar uma imagem que tenha o atributo `src` com o valor recebido pela prop `planetImage`.
- Além do atributo `src`, a imagem renderizada deve ter o atributo `alt` com o texto `Planeta {planetName}`, onde `{planetName}` é o valor recebido pela prop `planetName`.

### O que será verificado

* Será validado se o componente `<PlanetCard />` é renderizado.

* Será validado se o componente `<PlanetCard />` possui uma div com o atributo `data-testid="planet-card"`.

* Será validado se é renderizado o texto recebido pela prop `planetName`. 

* Será validado se é renderizada uma imagem com o atributo `src` com o mesmo valor recebido pela prop `planetImage`.

* Será validado se, além do atributo `src`, a imagem renderizada possui o atributo `alt` com o texto `Planeta {planetName}`, onde `{planetName}` é o valor recebido pela prop `planetName`.


## 6. Renderize uma lista com os planetas do Sistema Solar

- Renderize uma lista com os planetas do Sistema Solar dentro component `SolarSystem`.
- Utilize o componente `PlanetCard` para renderizar cada item da lista de planetas.
- Você encontrará a lista com os nomes e as imagens de cada planeta do Sistema Solar no arquivo `src/data/planets.js`.
- Você deve importar a lista no componente `SolarSystem` usando o código:
```javascript
import planets from '../data/planets';
```
- A lista de planetas é um _array_ de objetos no seguinte formato:
```javascript
{
  name: "Nome do planeta",
  image: "caminho-para-imagem-do-planeta"
}
```
- Para cada planeta da lista, você deverá renderizar um componente `PlanetCard`, passando o atributo `name` para a prop `planetName` e o atributo `image` para a prop `planetImage`.

> :bulb: Dica: lembre-se do método que te permite criar vários componentes iguais a partir dos valores presentes em um array. Lembre-se que ao renderizar uma lista, você deve passar o atributo `key` para cada item. Você pode usar o nome do planeta como `key`.

![Screenshot](public/examples/req6.png)

### O que será verificado

* Será verificado se é renderizado um componente `<PlanetCard />` para cada planeta da lista de planetas.

* Será verificado se todos os planetas do Sistema Solar estão sendo listados na tela.


## 7. Crie um componente chamado `Missions`.

- Crie um componente chamado `Missions` dentro da pasta `src/components`.
- Este componente deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="missions"`.
- Renderize o componente `Missions` abaixo do `SolarSystem`, dentro do componente principal `App`.

### O que será verificado

* Será validado se o componente `<Missions />` é renderizado.

* Será validado se existe uma `div` que possui o `data-testid="missions"`.

* Será validado se o componente `<Missions />` está sendo renderizado no componente principal `App`.

## 8. Renderize o componente `Title` dentro do componente `Missions`.

- Renderize o componente `Title` dentro do componente `Missions`.
- O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Missões"

![Screenshot](public/examples/req8.png)

### O que será verificado

* Será validado se o texto "Missões" é renderizado usando o componente `Title` dentro do componente `Missions`.

## 9. Crie um componente chamado `MissionCard`.

- Crie um componente chamado `MissionCard` dentro da pasta `src/components`.
- O componente `MissionCard` deve receber quatro props:
  - `name`
  - `year`
  - `country`
  - `destination`

- O componente `MissionCard` deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="mission-card"`.
- O componente `MissionCard` deve renderizar o texto recebido pela prop `name`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-name"`.
- O componente `MissionCard` deve renderizar o texto recebido pela prop `year`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-year"`.
- O componente `MissionCard` deve renderizar o texto recebido pela prop `country`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-country"`.
- O componente `MissionCard` deve renderizar o texto recebido pela prop `destination`. Sugerimos a utilização de tags de [Conteúdo de Fluxo](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Content_categories#conte%C3%BAdo_de_fluxo), como `<p>`, que deve conter o atributo `data-testid="mission-destination"`.

### O que será verificado

* Será validado se o componente `<MissionCard />` é renderizado.

* Será validado se o componente `<MissionCard />` possui uma div com o atributo `data-testid="mission-card"`.

* Será validado se é renderizado o texto recebido pela prop `name`.

* Será validado se é renderizado o texto recebido pela prop `year`.

* Será validado se é renderizado o texto recebido pela prop `country`.

* Será validado se é renderizado o texto recebido pela prop `destination`. 


## 10. Renderize uma lista com as missões espaciais

- Renderize uma lista com as missões espaciais dentro componente `Missions`.
- Utilize o componente `MissionCard` para renderizar cada item da lista de missões.
- Você encontrará a lista com as informações de cada missão espacial no arquivo `src/data/missions.js`.
- Você deve importar a lista no componente `Missions` usando o código:
```javascript
import missions from '../data/missions';
```
- A lista de missões espaciais é um _array_ de objetos no seguinte formato:
```javascript
{
  name: 'Nome da missão',
  year: 'Ano de lançamento da missão',
  country: 'País que lançou a missão',
  destination: 'Destino da missão',
}
```
- Para cada missão espacial da lista, você deverá renderizar um componente `MissionCard`, passando cada atributo para sua respectiva prop.

> :bulb: Dica: lembre-se do método que te permite criar vários componentes iguais a partir dos valores presentes em um array. Lembre-se que ao renderizar uma lista, você deve passar o atributo `key` para cada item. Você pode usar o nome da missão como `key`.

![Screenshot](public/examples/req10.png)

### O que será verificado

* Será verificado se é renderizado um componente `<MissionCard />` para cada missão espacial da lista de missões.

* Será verificado se todas as missões espaciais estão sendo listadas na tela.

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://bit.ly/2OfLJPn)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---

-->
