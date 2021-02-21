<template>
    <div id="Goals">
        <h1>Vue course Goals!</h1>
        <h2>My Course Goal</h2>
        <p>{{ outputGoal()}}</p>
        <p>Learn More <a v-bind:href='vueLink'>about vue</a></p>
        <button v-on:click="add(5)">Add 5</button>
        <p v-once> Starting counter:{{counter}}</p>
        <p>Return : {{counter}}</p>
        <input type ="text" v-bind:value = "name" v-on:input = "setName($event,'Parashar')">
        <p> Your Name : {{fullname}}</p>
        <button v-on:click="resetInput">ResetInput</button>
        <form v-on:submit.prevent = "submitForm">
            <input type = "text">
            <button>Sign In</button><br>
            <button v-on:click = "submitForm">Sign in</button>

        </form>
        <div class = "demo" :style = "{borderColor : boxASelected ? red :grey}" @click = "boxSelected(A)"> Box selected A</div>
        <div  class = "demo" @click = "boxSelected(B)"> Box selected B</div>
        <div  class = "demo" @click = "boxSelected(C)"> Box selected C</div>
        
        
      
    </div>
</template>
<script>

export default {
    name: 'Goals',
    data() {
        return{
            courseGoal : "Finish the course and Learn Vue!",
            vueLink:'https://vuejs.org/',
            counter : 0,
            name:"",
            //lastName:"",
            boxASelected : false,
            BoxBSelected: false,
            BoxCSelected : false,
        }
    },
    computed:{
        fullname(){
            if(this.name === ''){
                return "";
            }
            return this.name + " "+"Parashar";
        }

    },
    methods:{
        BoxSelected(box){
            if(box === 'A'){
            this.boxSelectedA = true;
            }
            else if(box === "B" ){
                this.BoxSelectedB = true;
            }
            else
            this.BoxSelectedC = true;
        },
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return "Learn vue";
            }else{
                return "Master vue";
            }
            
        },
        add(num){
            this.counter = this.counter+num;
            return this.counter;

        },
        setName(event){
            this.name = event.target.value ;
        },
        submitForm(){
            alert("successful!");
        },
        resetInput(){
            this.name = "";
        }

    }
};
</script>
    