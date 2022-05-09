<template>
    <app-header></app-header>
    <h1>Hello In Add Page</h1>
    <form class="add">
        <label>Restaurant Name</label>
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <label>Restaurant Contact</label>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <label>Restaurant Address</label>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <button type="button" @click="add">Add Restaurant</button>
    </form>
</template>

<script>
import AppHeader from './AppHeader.vue'
import axios from 'axios'
export default
{
    name:'AddPage',
    components:
    {
        AppHeader
    },
    data()
    {
        return {
            restaurant:
            {              
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:
    {
        async add()
        {
            console.warn(this.restaurant)
            const result = await axios.post("http://localhost:3000/restaurants",
            {
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address
            });
            if(result.status == 201)
            {
                this.$router.push({name:"IndexPage"})
            }
            console.warn("result",result)
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:'LoginPage'})
        }
    }
}
</script>
