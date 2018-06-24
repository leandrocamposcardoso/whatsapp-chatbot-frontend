<template>
    <v-layout column justify-center>
        <v-flex>
            {{items}}{{qParticipou}}{{qPresente}}{{qTotal}}
            <pie-chart :data="[
            ['Participaram da pesquisa ('+qParticipou/qTotal*100+'%)',qParticipou],
            ['Não participaram da pesquisa ('+qNParticipou/qTotal*100+'%)',qNParticipou]
            ]" :download="true"></pie-chart>

               <pie-chart :data="[
            ['Compareeram a evento ('+qPresente/qTotal*100+'%)',qPresente],
            ['Não compareceram a evento ('+qNPresente/qTotal*100+'%)',qNPresente]
            ]" :download="true"></pie-chart>
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
                items: [],
                qTotal:0,
                qParticipou:0,
                qNParticipou:0,
                qPresente:0,
                qNPresente:0,
            }
        },
    
        created: function() {
            var vm = this
            Person.find({}, function(err, users) {
                if (err) throw err;
                vm.items = users
                users.filter(function (u, key) {
                    vm.qTotal+=1
                    if (u.respondeu == true){
                       vm.qParticipou+=1
                    }else{
                     vm.qNParticipou+=1
                    }
                    if (u.presente == true){
                       vm.qPresente+=1
                    }else{
                     vm.qNPresente+=1
                    }
            });
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