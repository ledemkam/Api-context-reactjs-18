import { useContext } from 'react'
import './Content.css'
import { themeContext } from '../context/ThemeProvider'
const Content = () => {
    const {darkMode} = useContext(themeContext)
  return (
    <div className="container">
      <h1>You are in {darkMode ? "Dark" : "Light"} mode.</h1>
      <p>Lorem ipsum dolor sit amet  libero? Modi, dolores dolorum vel placeat hic nesciunt mollitia illo, quaerat fugiat beatae, itaque minus veritatis voluptatibus repellendus?
      Voluptates aspernatur reiciendis similique, quisquam corporis asperiores accusantium eius quia quidem harum rem amet corrupti. Accusantium, hic impedit? Ut odio praesentium ab minima veniam, et illum necessitatibus hic. Quo, maxime.
      Optio repudiandae magni vitae architecto possimus ex eaque veniam dolore, perferendis aut modi placeat culpa impedit ducimus libero saepe, distinctio rem ut illum qui! Eius eligendi cum hic sapiente ut!
      Quae velit aperiam ab. Saepe nobis repellat est porro consequatur reiciendis praesentium nihil sunt eaque, aliquam quos fugit a perferendis aut vero et itaque laborum labore. Numquam sit molestias quia.
      Cum ab, quibusdam esse assumenda nesciunt earum atque sit itaque sint quis, facilis similique numquam consectetur ipsam reiciendis totam officia ullam culpa dolore iure deserunt omnis! Voluptate enim error aliquid.
      Magnam nostrum eius mollitia cupiditate laboriosam corrupti exercitationem iusto illo ipsam pariatur, tempora voluptatum facere sequi temporibus. Provident ad quam architecto consectetur corporis, magni dolorem sunt fuga reprehenderit, vel ratione.
      Perferendis autem praesentium commodi. Velit aliquid accusamus atque. Cum pariatur consequatur alias numquam, ipsum a temporibus impedit provident omnis. Voluptas, excepturi. Iste repellendus doloribus reprehenderit ipsa sunt totam officiis quas.
      Ipsum pariatur aliquid quidem laudantium amet odio nesciunt veniam eum totam blanditiis. Vero et atque nam aut! Rem tenetur, perspiciatis labore sit libero doloribus harum placeat? Id corrupti quam nobis.</p>
    </div>
  )
}

export default Content
