<template>
<div class="col-md-3">

    <!-- <div class="scrollbar scrollbar-primary "> -->

    <div class="card mb-4 shadow-sm">
        
        <div
        class="hacker-news-item"
        v-for="(item, $index) in list"
        :key="$index"
        :data-num="$index + 1">

            <a target="_blank" :href="item.url" v-text="item.title"></a>
    <p>
      <span v-text="item.points"></span>
      points by
      <a
        target="_blank"
        :href="`https://news.ycombinator.com/user?id=${item.author}`"
        v-text="item.author"></a>
      |
      <a
        target="_blank" 
        :href="`https://news.ycombinator.com/item?id=${item.objectID}`"
        v-text="`${item.num_comments} comments`"></a>
    </p>
        <!-- <div v-for="(item, $index) in list" :key="$index"> -->
            <!-- <ol>
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
            </ol> -->
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

body {
  padding-top: 28px;
  background-color: #F6F6EF;
}

.hacker-news-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 4px 20px;
  line-height: 14px;
  background-color: #FF6600;

  img {
    border: 1px solid #fff;
    vertical-align: middle;
  }

  span {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 14px;
    font-weight: bold;
    vertical-align: middle;
  }
}

.hacker-news-item {
  $gap: 40px;

  margin: 10px 0;
  padding: 0 10px 0 $gap;
  line-height: 16px;
  font-size: 14px;
  
  &::before {
    content: attr(data-num) '.';
    float: left;
    margin-left: -$gap;
    width: $gap - 8px;
    color: #888;
    text-align: right;
  }
  
  > a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: #000;
    }
  }

  p {
    margin: 0;
    font-size: 12px;
    
    &,
    a {
      color: #888;
    }
    
    a:not(:hover) {
      text-decoration: none;
    }
  }
}
