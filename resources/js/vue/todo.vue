<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form
                @saveItem="getItems"
            />
        </div>
        <list-view
            @reloadList="getItems"
            :items="items"
        />
    </div>
</template>

<script>
import addItemForm from "./addItemForm";
import listView from "./listView";
    export default {
        components: {
            addItemForm,
            listView
        },
        data() {
            return {
                items: []
            }
        },
        methods: {
            getItems() {
                axios
                    .get('api/items', {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                    .then( response => {
                        if(response.status === 200){
                            this.items = response.data;
                        }
                    })
                    .catch( error => {
                        console.log(error);
                    })
            }
        },
        created() {
            this.getItems();
        }
    }
</script>

<style scoped>
    .todoListContainer {
        width: 350px;
        margin: auto;
    }
    .heading {
        background-color: #e6e6e6;
        padding: 10px;
    }
    #title{
        text-align: center;
    }
</style>
