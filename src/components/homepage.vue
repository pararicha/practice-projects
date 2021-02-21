<template>
    <div class="form">
        <h1>Home</h1>
        <router-link :to ="{name:'WordCount'}"><button><b>WordCount</b></button></router-link><br/><br/>
        <router-link :to ="{name:'bubble'}"><button><b>Bubble</b></button></router-link><br/><br/>
        <router-link :to ="{name:'Sum'}"><button><b>Sum</b></button></router-link><br/><br/>
    </div>
</template>
<style>
.form{
        text-align: center;
        background-color: whitesmoke;
        font-weight: bold;
        padding-top:250px;
        padding-bottom:250px;
        font-size: 20px;
        
    }
</style>