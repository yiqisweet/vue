<template>
    <div>
        <ChatList :list="list"></ChatList>
    </div>
</template>
<script>
    import ChatList from '../components/ChatList.vue'
    export default {
        components : {
            ChatList
        },
        created(){
            this.$http.get('http://172.168.0.111:3030/newData.json').then(function(res){
                this.$store.commit('saveList',res.body)
            },function(res){
                console.log(res.status + " @" + new Date())
            })
        },
        computed:{
            list(){
                return this.$store.getters.getList
            }
        }
    }
</script>
<style>

</style>