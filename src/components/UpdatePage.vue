<template>
    <app-header></app-header>
    <h1>Hello In Update Page</h1>
    <form class="update">
        <label>Restaurant Name</label>
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <label>Restaurant Contact</label>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <label>Restaurant Address</label>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <button type="button" @click="update">Update Restaurant</button>
    </form>
</template>

<script>
import AppHeader from './AppHeader.vue'
import axios from 'axios'
export default
{
    name:'UpdatePage',
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
        async update()
        {
            console.warn(this.restaurant)
            const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,
            {
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address
            });
            if(result.status == 200)
            {
                this.$router.push({name:"IndexPage"})
            }
        }
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:"LoginPage"})
        }
        const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id)
        console.warn(result.data)
        this.restaurant = result.data
    }
}
</script>
