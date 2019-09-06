<template>
    <div class="card mb-2 shadow-sm pt-3 pl-5">
        <div class="form-group row pl-5">
            <p>{{ titleChoice }}</p>
        </div>
        <div class="form-group row pr-5">
        <label for="batimentsSelect1">Ship selector</label>
        <select class="form-control" id="batimentsSelect1">
          <option>Cuirassé Jean-Bart</option>
          <option>Cuirassé Leger Jean d'Arc</option>
          <option>Croiseur lourd Dunkerque</option>
          <option>Croiseur lourd Richelieu</option>
          <option>Destroyer Drayton</option>
          <option>Destroyer Jaguar</option>
          <option>Porte-avions Gerald R. Ford</option>
          <option>Porte-avions Ronald Reagan</option>
        </select>
        </div>
        <div class="form-group row">
            <div class="form-group col-xs-4">
                <select class="form-control" id="lettresSelect1">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  <option>E</option>
                  <option>F</option>
                  <option>G</option>
                  <option>H</option>
                  <option>I</option>
                  <option>J</option>
                </select>
            </div>
            <div class="form-group col-xs-4 pr-5">
                <select class="form-control" id="chiffresSelect1">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                </select>
            </div>
            <div class="form-group col-xs-4 pl-5">
                <button type="submit" class="btn btn-primary mb-2">Rotate</button>
            </div>
        </div>
        <div class="form-group row">
            <div class="form-group col-xs-4">
                <button type="submit" class="btn btn-success mb-2">Insert ship position</button>
                <button type="submit" class="btn btn-danger mb-2">Remove ship</button>
            </div>
        </div>
    </div>
</template>

<script>
import CuirJeanBartC from './friendly_ships/CuirJeanBartC'
import CuirLegJeanDArcC from './friendly_ships/CuirLegJeanDArcC'
import CroiDunkerqueC from './friendly_ships/CroiDunkerqueC'
import CroiRichelieuC from './friendly_ships/CroiRichelieuC'
import DestDraytonC from './friendly_ships/DestDraytonC'
import DestJaguarC from './friendly_ships/DestJaguarC'
import PortGeraldRFordC from './friendly_ships/PortGeraldRFordC'
import PortRonaldReaganC from './friendly_ships/PortRonaldReaganC'

export default {
    components: {
        CuirJeanBartC,
        CuirLegJeanDArcC,
        CroiDunkerqueC,
        CroiRichelieuC,
        DestDraytonC,
        DestJaguarC,
        PortGeraldRFordC,
        PortRonaldReaganC,
    },
  data: function() {
       return {
          titleChoice: 'Positionnez vos batiments !',
          ships: [
              {name:'Jean-Bart', type:'Cuirassé', pos:[], selectedCases:[], size:5},
              {name:'Jean d\'Arc', type:'Cuirassé leger', pos:[], selectedCases:[], size:4},
              {name:'Dunkerque', type:'Croiseur lourd', pos:[], selectedCases:[], size:3},
              {name:'Richelieu', type:'Croiseur lourd', pos:[], selectedCases:[], size:3},
              {name:'Drayton', type:'Destroyer', pos:[], selectedCases:[], size:2},
              {name:'Jaguar', type:'Destroyer', pos:[], selectedCases:[], size:2},
              {name:'Gerald R. Ford', type:'porte-avions', pos:[], selectedCases:[], size:4},
              {name:'Ronald Reagan', type:'porte-avions', pos:[], selectedCases:[], size:4},
          ]
        }
  },
  methods: {
    //   firstNameSubmit() {
    //       this.displayGreetings = false;
    //       this.$emit('greetingsFinished')
    //   },
  },
  mounted() {
    //   if (localStorage.firstName) {
    //       this.firstName = localStorage.firstName;
    //  }
  },
  watch: {
    //   firstName(newfirstName) {
    //       localStorage.firstName = newfirstName;
    //  }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
#app {
  text-align: center;
  color: #2c504b;
  margin-top: 60px; 
}
</style>
