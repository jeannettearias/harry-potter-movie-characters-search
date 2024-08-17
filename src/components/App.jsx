import '../styles/App.scss';
import '../styles/layout/_header.scss';

function App() {
  return (
    <>

      {/* WEB SITE STRUCTURE
      HEADER
        LANDING

      MAIN
      FILTERS
        CHARACTERLIST
          CHARACTERCARD
      
      CHARACTERDETAIL */}

      <header className='darkmode'>
        <div>
          <img
            className='header__img'
            src="/img/harry-potter-logo-32524.png" alt="harry-potter-logo" />
        </div>
      </header>

      <main className='main'>
        <section className='filter__section'>

          <form>
            <div>
              <fieldset>
                <div>
                  <label className='form__label'>Busca por Personaje</label>
                  <input type="text" name="search" id="search" />
                </div>
                <div>
                  <label className='form__label'>Selecciona la casa</label>
                  <select className='house__select' name="house" id="house">
                    <option className='filter__house' value="Gryffindor">Gryffindor</option>
                    <option className='filter__house' value="Slytherin">Slytherin</option>
                    <option className='filter__house' value="Ravenclaw">Ravenclaw</option>
                    <option className='filter__house' value="Hufflepuff">Hufflepuff</option>
                  </select>
                </div>
              </fieldset>
            </div>
          </form>

        </section>
        <section>

        </section>
      </main>

      <footer className='footer'>

      </footer>
    </>
  )
}

export default App;
