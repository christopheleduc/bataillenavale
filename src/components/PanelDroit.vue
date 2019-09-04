<template>
<div class="col-md-3">

    <div class="card mb-4 shadow-sm">

        <div v-for="(item, $index) in list" :key="$index">
            <ol>
                <li>Cuirassé Jean Bart.</li>
                <li><CuirJeanBartC /></li>
                <li><CuirJeanBartD /></li>
                <br></br>
                <li>Cuirassé léger Jean d'Arc.</li>
                <li><CuirLegJeanDArcC /></li>
                <li><CuirLegJeanDArcD /></li>
                <br></br>
                <li>Croiseur lourd Dunkerque.</li>
                <li><CroiDunkerqueC /></li>
                <li><CroiDunkerqueD /></li>
                <br></br>
                <li>Croiseur lourd Richelieu.</li>
                <li><CroiRichelieuC /></li>
                <li><CroiRichelieuD /></li>
                <br></br>
                <li>Destroyer Drayton.</li>
                <li><DestDraytonC /></li>
                <li><DestDraytonD /></li>
                <br></br>
                <li>Destroyer Jaguar.</li>
                <li><DestJaguarC /></li>
                <li><DestJaguarD /></li>
                <br></br>
                <li>Porte-avions Gerald R Ford.</li>
                <li><PortGeraldRFordC /></li>
                <li><PortGeraldRFordD /></li>
                <br></br>
                <li>Porte-avions Ronald Reagan.</li>
                <li><PortRonaldReaganC /></li>
                <li><PortRonaldReaganD /></li>
                <br></br>
            </ol>
        </div>

        <infinite-loading @infinite="infiniteHandler"></infinite-loading>

    </div>

</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';
import CuirJeanBartC from './friendly_ships/CuirJeanBartC'
import CuirJeanBartD from './friendly_ships/CuirJeanBartD'
import CuirLegJeanDArcC from './friendly_ships/CuirLegJeanDArcC'
import CuirLegJeanDArcD from './friendly_ships/CuirLegJeanDArcD'
import CroiDunkerqueC from './friendly_ships/CroiDunkerqueC'
import CroiDunkerqueD from './friendly_ships/CroiDunkerqueD'
import CroiRichelieuC from './friendly_ships/CroiRichelieuC'
import CroiRichelieuD from './friendly_ships/CroiRichelieuD'
import DestDraytonC from './friendly_ships/DestDraytonC'
import DestDraytonD from './friendly_ships/DestDraytonD'
import DestJaguarC from './friendly_ships/DestJaguarC'
import DestJaguarD from './friendly_ships/DestJaguarD'
import PortGeraldRFordC from './friendly_ships/PortGeraldRFordC'
import PortGeraldRFordD from './friendly_ships/PortGeraldRFordD'
import PortRonaldReaganC from './friendly_ships/PortRonaldReaganC'
import PortRonaldReaganD from './friendly_ships/PortRonaldReaganD'

const api = '//hn.algolia.com/api/v1/search_by_date?tags=story';

export default {
    components: {
        InfiniteLoading,
        CuirJeanBartC,
        CuirJeanBartD,
        CuirLegJeanDArcC,
        CuirLegJeanDArcD,
        CroiDunkerqueC,
        CroiDunkerqueD,
        CroiRichelieuC,
        CroiRichelieuD,
        DestDraytonC,
        DestDraytonD,
        DestJaguarC,
        DestJaguarD,
        PortGeraldRFordC,
        PortGeraldRFordD,
        PortRonaldReaganC,
        PortRonaldReaganD,
    },
    data() {
        return {
            page: 1,
            list: [], 
        }
    },
      methods: {
    infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.hits.length) {
          this.page += 1;
          this.list.push(...data.hits);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';

#app {
    text-align: center;
    color: #2c504b;
    margin-top: 60px;
}
</style>
