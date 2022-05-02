const app = new Vue({
    el:'#app',
    data:{
    mymail:'',
    },
    created(){
        for(let i = 0; i< 10; i++){ 
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
            this.mymail = res.data.response;
            console.log(res);
            }).catch((error)=>{
            console.log(error);
            })
        }
    }
})