export default {
    saveList(state,body){
        state.list = body
    },
    saveSelfItem(state,opt){
        console.log(opt);
        state.selfItem.push(opt)
    }
}