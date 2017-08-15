<template>
<div>
    <MessageList :item="getItem" @dispatchSend="resSend" :self-item="getSelfItem"></MessageList>
</div>
</template>
<script>
    import MessageList from '../components/MessageList.vue'
    export default {
        components : {
            MessageList
        },
        computed:{
            getItem(){
                return this.$route.query.item
            },
            getSelfItem(){
                return this.$store.getters.getSelfItem
            }
        },
        methods:{
            resSend(opt){
                var nowDate = new Date().getHours() + ':' + new Date().getMinutes()
                opt['nowDate'] = nowDate;
                this.$store.commit('saveSelfItem',opt)

            }
        }
    }
</script>
<style>

</style>