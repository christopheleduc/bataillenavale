<template>
<div class="col-md-3 text-center">
    <div class="card mb-2 shadow-sm pt-3 pl-5">
        <!-- <form> -->
            <div class="form-group row pl-5" v-if="displayGreetings">
                <label for="firstName">{{ greetings }}</label>
            </div>
            <div class="form-group row pl-5">
                <input class="form-control col-md-8 pt-1 text-center" 
                type="text" id="firstName" 
                placeholder="Joueur01" 
                v-model="firstName" 
                v-on:keydown.enter="firstNameSubmit()"
                />
            </div>
            <div class="form-group row pl-5">
                <p v-if="firstName">Joueur 01: {{ firstName }} !</p>
            </div>
            <!-- <div class="form-group row pl-5">
                <p v-if="!displayGreetings">Positionnez vos batiments !</p>
            </div> -->
        <!-- </form> -->
        <!-- <PanelGauche v-on:greetingsFinished="displayShip = true" /> -->
        <StrategiePosition v-if="!displayGreetings"/>
    </div>
</div>
</template>

<script>
import StrategiePosition from './StrategiePosition'

export default {
    components: {
        StrategiePosition,
    },
  data: function() {
       return {
          titre: 'Operational theater',
          greetings: 'Hé ! Salut... Quel est ton nom ?',
          firstName: '',
          displayGreetings: true,
          choiceFinised: false,
        }
  },
  methods: {
      firstNameSubmit() {
          this.displayGreetings = false;
          this.$emit('greetingsFinished')
      },
  },
  mounted() {
      if (localStorage.firstName) {
          this.firstName = localStorage.firstName;
      }
  },
  watch: {
      firstName(newfirstName) {
          localStorage.firstName = newfirstName;
      }
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
