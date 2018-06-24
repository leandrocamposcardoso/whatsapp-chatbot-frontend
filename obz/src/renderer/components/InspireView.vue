<template>
  <v-layout column justify-center>
    <v-flex>
      <v-data-table v-bind:headers="headers" :items="items" hide-actions class="elevation-1">
        <template slot="items" scope="props">
                    <tr @click="expanded[props.item.name] = !expanded[props.item.name]">
                      <td>{{ props.item.nome }}</td>
                      <td class="text-xs-right">{{ props.item.presente }}</td>
                      <td class="text-xs-right">{{ props.item.respondeu }}</td>
                      <td class="text-xs-right" v-if="props.item.motivo==1">O palestrante convidado para o evento.</td>
                      <td class="text-xs-right" v-if="props.item.motivo==2">O tema escolhido para cada evento. </td>
                      <td class="text-xs-right" v-if="props.item.motivo==3"> Aprendizado cidadão e político</td>
                      <td class="text-xs-right" v-if="props.item.motivo==4">A necessidade de me conscientizar para as eleições de 2018.</td>
                      <td class="text-xs-right" v-if="props.item.opiniao==1">Melhores temáticas e palestrantes.</td>
                      <td class="text-xs-right" v-if="props.item.opiniao==2">Maior antecedência na divulgação.</td>
                      <td class="text-xs-right" v-if="props.item.opiniao==3">Menor tempo de duração dos encontros.</td>
                      <td class="text-xs-right" v-if="props.item.opiniao==4">Realização dos eventos durante a semana.</td>
                      <td class="text-xs-right">{{ props.item.feedback }}</td>
                    </tr>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/bot')
  var Person = require('../../models/userdata.js')
  
  export default {
    data() {
      return {
        expanded: {},
        headers: [{
            text: 'Nome',
            align: 'left',
            sortable: false,
            value: 'nome'
          },
          {
            text: 'Presente',
            value: 'presente'
          },
          {
            text: 'Respondeu',
            value: 'respondeu'
          },
          {
            text: 'Motivo',
            value: 'motivo'
          },
          {
            text: 'Opiniao',
            value: 'opiniao'
          },
          {
            text: 'Feedback',
            value: 'feedback'
          }
        ],
        items: []
      }
    },
    created: function() {
      var vm = this
      Person.find({}, function(err, users) {
        if (err) throw err;
        vm.items = users
      })
  
    }
  }
</script>

<style scoped>
  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
</style>