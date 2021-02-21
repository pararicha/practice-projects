<template>
    <div id="main">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div id="heading"> 
            <h1>Facebook</h1>
        </div>
        <div class= "tab"> 
            <button class = "button"><b><i class="fa fa-home"/></b></button>
            <input class = "search" type="text" placeholder="Search..." >
            <button class = "button"><b><i class="fa fa-search"/></b></button>
            <button class = "button lastButton"><b><i class="fa fa-bars"/></b></button>
        </div>
        <div class="tab"> 
            <img id="image" 
            src="https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/59942102_1550380995096937_5579965865366913024_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=oJJatA5sEswAX9hdxEn&_nc_oc=AQk7vQWwLWlW7sOeNN5GeM0HoNZEQ89TQv1aRtO8NztZO18wyvmSINeSKk7U_crc1XU&_nc_ht=scontent.fblr2-1.fna&oh=23f2954da54aee7c5b304e9a4d18e397&oe=5F9F5B47" alt="My Picture">
            <textarea id= "textbox" cols="40" rows="6" placeholder="Write something.." v-model="newPost"/>
            <button @click = "addToList" id = "post"><b>Post</b></button>
        </div>
        <div v-for="post in posts" :key="post.message" class = "contents">
            <h3>Richa Parashar:</h3>
            <p>{{post.message}}</p>
        </div>
        
       
    </div>
</template>
<script>
export default {
    name: 'main',
    data() {
        return{
    posts:[
        {message:"Good Morning"},
        {message:"Good Evening"},
        {message:"Good Afternoon"},
        {message:"Good Night"}, 
    ],
    newPost: "",

    
  }},
    methods :{
        addToList : function() {
            this.posts.push({message :this.newPost});
            
            }
        }
    
    
    
};
</script>
<style>
    #heading{
        text-align: center;
        background-color:lightblue;
        border: 5px outset blue;
        font-size: 20px;

    }
    .tab {
        overflow: visible;
        border: 10px solid #ccc;
        background-color: #f1f1f1;
        padding: 5px,10px,5px,10px;
        
    }
    .button{
        background-color:white;
        text-align: center;
        font-size: 20px;
        border-radius: 8px;
        transition-duration: 0.5s;
        margin-right: 21%;
    }
    .button:hover{
        background-color: lightblue;
        color:white;
    }
    .search{
        font-size:20px;
        float:center;
        width:50%;
    }
    .lastButton{
        margin-right: 0%;
    }
    #image{
        width:12%;
        height:12%;
        border-radius:100%;
       
    }
    #textbox{
        width:60%;
        height:100%;
        border-radius: 8px;
        margin-left:5%;
        margin-bottom: 5px;
        font-size: 20px;
        /* position: relative; */
    }
    #post{
        background-color:white;
        text-align: center;
        font-size: 20px;
        border-radius: 8px;
        transition-duration: 0.5s;
        width:10%;
        /* margin-right: 21%; */
    }
    .contents{
        background:white;
        color: black;
        border: 10px solid lightgray;
        padding: 1em;
        margin: auto;
        width:60%;
        margin-top: 5px;
    }
</style>