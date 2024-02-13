console.log('loaded')

const books = [
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "In Breakfast of Champions, one of Kurt Vonnegut`s most beloved characters, the aging writer Kilgore Trout, finds to his horror that a Midwest car dealer is taking his fiction as truth. What follows is murderously funny satire, as Vonnegut looks at war, sex, racism, success, politics, and..."
  },
  {
    title: "Known Unknowns",
    sub: "Charles Saatchi",
    text: "In his latest book, Known Unknowns, Charles Saatchi provides fascinating insights into some of the world`s lesser-known but truly extraordinary historical events. Illustrated with arresting photographs, Saatchi`s 100 essays tackle subjects as varied as the tattoo habits of Russian criminals... perspective on contemporary culture."
  },
  {
    title: "Empire V",
    sub: "Victor Pelevin",
    text: "Roman thought he`d found the perfect opportunity to rebel. He may have been wrong.	He awakens strapped to a set of parallel bars in a richly appointed sitting room, and begins a conversation with a masked man which will change his life. His world has been a facade - one which the ..."
  },
  {
    title: "The Master and Margarita",
    sub: "Mikhail Bulgakov",
    text: "An audacious revision of the stories of Faust and Pontius Pilate, The Master and Margarita is recognized as one of the essential classics of modern Russian literature. The novel's vision of Soviet life in the 1930s is so ferociously accurate that it could not be published during its..."
  },
  {
    title: "The Map and the Territory",
    sub: "Michel Houellebecq",
    text: "Having made his name with an exhibition of photographs of Michelin roadmaps - beautiful works that won praise from every corner of the art world - Jed Martin is now emerging from a ten-year hiatus. And he has had some good news. It has nothing to do with his broken boiler, the approach..."
  },
  {
    title: "The Neverending Story",
    sub: "Michael Ende",
    text: "This epic work of the imagination has captured the hearts of millions of readers worldwide since it was first published. Its special story within a story is an irresistible invitation for readers to become part of the book itself... "
  },
  {
    title: "To the End of the Land",
    sub: "David Grossman",
    text: "From one of Israel`s most acclaimed writers comes a novel of extraordinary power about family life—the greatest human drama—and the cost of war.Ora, a middle-aged Israeli mother, is on the verge of celebrating her son Ofer`s release from army service when he returns to the front for a major..."
  },
  {
    title: "One Hundred Years of Solitude",
    sub: "Gabriel García Márquez",
    text: "The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love—in rich, imaginative prose that has come to define an entire genre known as magical realism..."
  },
  {
    title: "Beautiful World, Where Are You",
    sub: "Sally Rooney",
    text: "Alice, a novelist, meets Felix, who works in a warehouse, and asks him if he`d like to travel to Rome with her. In Dublin, her best friend, Eileen, is getting over a break-up and slips back into flirting with Simon, a man she has known since childhood. Alice, Felix, Eileen, and..."
  },
  {
    title: "Rendezvous with Rama",
    sub: "Arthur C. Clarke",
    text: "At first, only a few things are known about the celestial object that astronomers dub Rama. It is huge, weighing more than ten trillion tons. And it is hurtling through the solar system at an inconceivable speed. Then a space probe confirms the unthinkable: Rama is no natural object..."
  }
]

const rootElement = document.querySelector('#root')

const bookComponent = (book, index) => `
<div class="cardAndButton">
  <div class="bookCard">
    <h3 class="bookNumber">${index+1}</h3>
    <p class="name">${book.sub.toUpperCase()}</p>
    <h2 class="title">${book.title}</h2>
    <p>${book.text}</p>
  </div>
  <button class="readMore">read more</button>
</div>
`
const headerComponent = (text) => `
  <h3 class="header">${text}</h3> 
`

function init() {

  rootElement.insertAdjacentHTML("afterbegin", headerComponent('New York Times Bestsellers'.toUpperCase()))
  rootElement.insertAdjacentHTML("beforeend", `<div class="bookContainer">${books.map((book, index) => bookComponent(book, index)).join('')}</div>`)

} 

init()