<template>
    <div>
        {{newList}}
        <ul>
            <li v-for="item in list">
                <router-link :to="{path : '/message',query:{item:item}}">
                    <img :src="item.imgSrc">
                    <div>
                        <span>{{item.name}}</span>
                        <p>{{item.newMsg}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props : ['list'],
        computed:{
            newList(){
                for(var i=0;i<this.list.length;i++){
                    this.list[i].newMsg = this.list[i].messageList[this.list[i].messageList.length - 1].msg
                }
                return this.list
            }
        }
    }
</script>
<style>

</style>