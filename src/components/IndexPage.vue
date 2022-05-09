<template>
    <app-header></app-header>
    <h1>Hello {{name}} In Index Page</h1>
    <table border="1">
        <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td>
                <router-link :to="'/update/'+item.id">Update</router-link> | 
                <button @click="destroy(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import AppHeader from './AppHeader.vue'
import axios from 'axios'
export default
{
    name:'IndexPage',
    data()
    {
        return {
            name: '',
            restaurant: []
        }
    },
    components:
    {
        AppHeader
    },
    methods:
    {
        async destroy(id)
        {
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            console.warn(result)
            if(result.status == 200)
            {
                this.loadData()
            }
        },
        async loadData()
        {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if(!user)
            {
                this.$router.push({name:'LoginPage'})
            }
            let result = await axios.get("http://localhost:3000/restaurants");
            this.restaurant=result.data
        }
    },
    async mounted()
    {
        this.loadData();
    }
}
</script>

<style>
td
{
    width: 130px;
    height: 30px;
}
</style>
