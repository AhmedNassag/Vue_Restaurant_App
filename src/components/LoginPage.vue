<template>
    <img class="logo" src="../assets/01.jpg" alt="logo">
    <h1>Login</h1>
    <div class="login">
        <label>Email</label>
        <input type="email" v-model="email" placeholder="Enter Email">
        
        <label>Password</label>
        <input type="password" v-model="password" placeholder="Enter Passwaord">
        
        <button @click="login">Login</button>
        <p><router-link to="/sign-up">Sign Up</router-link></p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data() 
    {
        return {
            email:'',
            password:'' 
        }
    },
    methods:
    {
        async login()
        {
            let result = await axios.get("http://localhost:3000/users?email="+this.email+"&password="+this.password)
            if(result.status==200 && result.data.length > 0)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'IndexPage'})
            }
            console.warn(result);
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
