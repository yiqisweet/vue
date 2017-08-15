
var data = {
    name : 'My Tree',
    children : [
        {
            name : 'child folder',
            children : [
                {name : 'hello'},
                {name : 'wat'},
                {
                    name : 'child folder',
                    children : [
                        {name : 'hello'},
                        {name : 'wat'}
                    ]
                }
            ]
        },
        {name : 'hello'},
        {name : 'wat'},
        {
            name : 'child folder',
            children : [
                {name : 'hello'},
                {name : 'wat'},
                {
                    name : 'child folder',
                    children : [
                        {name : 'hello'},
                        {name : 'wat'}
                    ]
                }
            ]
        }
    ]
}

//外层一次 里面全部
//  controller view 的 controller -->
Vue.component('item',{
    props:{
        model : {
            type : Object
        }
    },
    template : '#item-template',
    data : function(){
        return {
            open : false
        }
    },
    methods:{
        toggle : function(){
            if(this.isFolder){
                this.open = !this.open
            }
        },
        addLi : function(){
            this.model.children.push({
                name : 'new li'
            })
        }
    },
    computed:{
        isFolder : function(){
            //如果当前对象下 有children数组，并且长度存在，那么返回true
            console.log(this.model)
            return this.model.children && this.model.children.length
        }
    }
})

//启动tree
new Vue({
    el : '#app',
    data : {
        treeData : data
    }
})