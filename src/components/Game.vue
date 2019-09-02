<template>
    <section class="jumbotron text-center">
        <div id="app" class="container-fluid pb-1 text-center">
            <h1>{{ title }} </h1>
        </div>
        <div class="album py-5 bg-light">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card mb-2 shadow-sm">
                        </div>
                    </div>
                    <div class="col-md-6">
                    <div class="card mb-4 shadow-sm">
                        <ImageAccueil />
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mb-4 shadow-sm">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-3">
            <p>
                <Accueil msg="Nuclear Global World War "/>
                <b-btn v-b-toggle.collapse1 variant="warning">Game</b-btn>
            </p>
        </div>
        <b-collapse id="collapse1">
            <b-card>
                <router-view></router-view>
                <h3>Game Options</h3>
                <b-btn v-b-toggle.collapse2 size="sm">Afficher les options</b-btn>
                    <b-collapse id=collapse2 class="mt-2">
                        <b-card><a @click="onListClick">Jeux</a></b-card>
                        <b-card><a @click="onMapClick">Affichage</a></b-card>
                    </b-collapse>
            </b-card>
        </b-collapse>
        <div class="bouton-aligne">
            <router-link to="/" ><b-button variant="success" class="btn btn-primary btn-sm btn-block">Retour à l'accueil</b-button></router-link>
        </div>
    </section>
</template>

<script>
import ImageAccueil from './ImageAccueil'
import Accueil from './Accueil.vue'
//import Plateau from './components/Plateau.vue'

export default {
  name: 'app',
  data: function() {
    return {
      title: 'Pacific Storm'
    }
  },
  components: {
    ImageAccueil,
    Accueil,
    //Plateau,
  },
    methods: {
        onListClick: function() {
        window.alert('UserClikerList !')
    },
        onMapClick: function(){
        window.alert('UserClikerMap !')
    },
        goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
    }
  }
}
</script>

<style>
/* @import './assets/styles/custom.scss';
@import '~bootstrap/scss/bootstrap.scss'; */
@import '.././assets/styles/custom.scss';
/* @import '.././node_modules/bootstrap/scss/bootstrap.scss'; */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>