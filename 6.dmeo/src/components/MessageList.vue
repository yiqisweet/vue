<template>
    <div>
         <div>
             {{item.name}}
         </div>
        <div>
            <ul>
                <li v-for="sit in item.messageList">
                    {{sit.date + '-'+ sit.msg}}
                </li>
            </ul>
        </div>
        <div>
            <ul v-if="selfItem">
                <li v-for="self in selfItem">
                    {{self.msg + '- '+ self.nowDate}}
                </li>
            </ul>
        </div>
        
        <div>
            <input type="text" v-model="msg" placeholder="请输入">
            <button @click="send">发送</button>
        </div>
    </div>
</template>
<script>
    export default {
        props:['item','selfItem'],
        data(){
            return {
                msg : ''
            }
        },
        methods:{
            send(){
                this.$emit('dispatchSend',{msg : this.msg})
            }
        }
    }
</script>
<style>

</style>