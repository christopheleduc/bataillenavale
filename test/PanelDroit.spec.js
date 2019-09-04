// Importer Vue et le composant à tester
import Vue from 'vue'
import PanelDroit from '../src/components/PanelDroit'

var mocha=require('mocha')
var describe=mocha.describe
var it=mocha.it
var expect=mocha.expect

// Ici nous avons plusieurs tests avec Jasmine 2.0, cependant vous pouvez utiliser
// n'importe quel combo de lanceur de tests / bibliothèque d'assertions que vous préférez
describe('PanelDroit', () => {
    // Inspecter l'objet d'options du composant
    it('a le hook `created`', () => {
      expect(typeof PanelDroit.created).toBe('function')
    })

    // Évaluer les résultats des fonctions dans
    // l'objet d'options du composant
    it('contient les données par défaut', () => {
      expect(typeof PanelDroit.data).toBe('function')
      const defaultData = PanelDroit.data()
      expect(defaultData.message).toBe('bonjour !')
    })

    // Inspecter l'instance au montage du composant
    it('affecte correctement les messages à la création', () => {
      const vm = new Vue(PanelDroit).$mount()
      expect(vm.message).toBe('au revoir !')
    })

    // Monter une instance et inspecter le résultat en sortie
    it('rend le message correct', () => {
      const Constructor = Vue.extend(PanelDroit)
      const vm = new Constructor().$mount()
      expect(vm.$el.textContent).toBe('au revoir !')
    })
  })