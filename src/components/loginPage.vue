<template>
    <div id="sample-form">
        <div class="heading"> 
            <h1>My Application</h1>
            <h3>Welcome to My Application!</h3> 
        </div>
        <div class= "form"> 
            <label>Username :</label> 
            <input v-model="Username" placeholder="Provide user id"><br><br>
            <label>Password:</label>
            <input type="password" v-model="Password" placeholder="Password"><br><br>
          <router-link tag="button" :disabled="isLogin" :to ="{name:'homepage' }"> 
              <b>Login</b>
            </router-link> 
        </div>
      
    </div>
</template>
<script>

export default {
    name: 'sample-form',
    data() {
        return{
    Username:"",
    Password:"",
  }},
    methods :{
        login : function() {
            
            if(this.Username=="Richa" && this.Password=="Richa123")
            {
               return true;

            }
            else{
               return false;
            }
        }
    
    },
    computed : {
        isLogin : function() {
            if(this.Username=="Richa" && this.Password=="Richa123")
               return false;
            return true;
            }
    }
    
};
</script>
<style>
    .heading{
        text-align: center;
        background-color:lightblue;
        border: 5px outset blue;
        font-size: 20px;

    }
    .form{
        text-align: center;
        background-color: whitesmoke;
        font-weight: bold;
        padding-top:250px;
        padding-bottom:250px;
        font-size: 20px;
        
    }
</style>