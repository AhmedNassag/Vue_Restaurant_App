<template>
    <img class="logo" src="../assets/01.jpg" alt="logo">
    <h1>Sign Up</h1>
    <div class="register">

        <label>Name</label>
        <input type="text" v-model="name" placeholder="Enter Name">
        
        <label>Email</label>
        <input type="text" v-model="email" placeholder="Enter Email">
        
        <label>Password</label>
        <input type="password" v-model="password" placeholder="Enter Passwaord">
        
        <button @click="signUp">Sign Up</button>
        <p><router-link to="/login">Login</router-link></p>
    </div>
</template>

<script>
import axios from 'axios'
export default
{
    name: 'SignUp',
    data() 
    {
        return {
            name:'',
            email:'',
            password:'' 
        }
    },
    methods:
    {
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'IndexPage'})
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'IndexPage'})
        }
    }
}
</script>

<style>
.logo
{
    width: 200px;
    margin-bottom: -50px;
    margin-top: 0;
}
</style>
