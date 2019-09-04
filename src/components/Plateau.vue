<template>
  <div id="app">
    <div class="jumbotron text-center">
      <h1 class="display-4">{{ titre }} </h1>
      <hr class="my-4">

      <div class="album py-5 bg-light">
        <div class="container-fluid">
          <div class="row">

            <PanelGauche />

            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <p class="lead">Pacific Sea</p>
                <table class="tableau">
                  <tr class="grille">
                    <th class="grille"></th>
                    <th v-for="lettre in lettres" v-bind:key="lettre.id" class="grille">
                      <font color="#2fa1e4">{{ lettre.l }}</font>
                    </th>
                  </tr>
                  <tr v-for="chiffre in chiffres" v-bind:key="chiffre.id" class="grille">
                    <td class="grille">
                      <font color="#2fa1e4">{{ chiffre.c }}</font>
                    </td>
                    <td v-for="chiffre in chiffres" v-bind:key="chiffre.id" class="grille"></td>
                  </tr>
                </table>
              </div>
            </div>

            <!-- <CuirJeanBartD /> -->
            <!-- <CuirJeanBartD v-if="displayShip"/> -->
            <!-- <PanelGauche v-on:greetingsFinished="displayShip = true" /> -->
            
            <PanelDroit />

          </div>
        </div>
      </div>


      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <button type="button" class="btn btn-danger">Quit</button>
        <button type="button" class="btn btn-success">New</button>
      </p>
    </div>
  </div>
</template>

<script>
import PanelGauche from './PanelGauche'
import PanelDroit from './PanelDroit'
import CuirJeanBartD from './friendly_ships/CuirJeanBartD'

export default {
  components: {
    PanelGauche,
    PanelDroit,
    CuirJeanBartD,
    },
  data: function() {
       return {
          titre: 'Operational theater',
          displayShip: false,
          coordonees: [
              { id: 1, position: 'A5', type: 'SNLE', display:true },
              { id: 2, position: 'B3', type: 'SNLE', display:true },
              { id: 3, position: 'C8', type: 'Porte-Avions', display:true },
              { id: 4, position: 'D4', type: 'Porte-Avions', display:true },
              { id: 5, position: 'E1', type: 'Cuirassé', display:true },
              { id: 6, position: 'F7', type: 'Destroyer', display:true },
              { id: 7, position: 'G1', type: 'Destroyer', display:true },
              { id: 8, position: 'H9', type: 'Frégate', display:true },
              { id: 9, position: 'I2', type: 'Frégate', display:true },
              { id: 10, position: 'J6', type: 'Corvette', display:true }
          ],
          lettres: [
              { id: 1, l: 'A' },
              { id: 2, l: 'B' },
              { id: 3, l: 'C' },
              { id: 4, l: 'D' },
              { id: 5, l: 'E' },
              { id: 6, l: 'F' },
              { id: 7, l: 'G' },
              { id: 8, l: 'H' },
              { id: 9, l: 'I' },
              { id: 10, l: 'J' }
          ],
            chiffres: [
              { id: 1, c: '1' },
              { id: 2, c: '2' },
              { id: 3, c: '3' },
              { id: 4, c: '4' },
              { id: 5, c: '5' },
              { id: 6, c: '6' },
              { id: 7, c: '7' },
              { id: 8, c: '8' },
              { id: 9, c: '9' },
              { id: 10, c: '10' }
          ],
        }
  },
  mounted() {
      if (localStorage.title) {
          this.title = localStorage.title;
      }
  },
  watch: {
      title(newTitle) {
          localStorage.title = newTitle;
      }
  },
}
</script>

<style lang="scss">
@import '../assets/styles/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
#app {
  text-align: center;
  color: #2c504b;
  margin-top: 60px; 
}

.grille {
height : 35px;
width : 35px;
border-width:1px;
border-style:solid;
border-color : $green !important;
// background-color: $grille;
// background-image: url("../assets/Ocean_003.jpg");
text-align: center;
border-collapse: separate;
}

.tableau {
height : 800px;
width : 800px;
margin-left:auto; 
margin-right:auto;
border-color : $green !important;
// background-color: $grille;
//display: block;
position: relative;
background-image: url("../assets/Ocean_003.jpg");
opacity: 0.9;
top: 0;
left: 0;
bottom: 0;
right: 0;
//position: absolute;
//z-index: -1;  
text-align: center;
border-collapse: separate;
}
</style>