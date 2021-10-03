<template>
    <div class="addItem">
        <input type="text" v-model="item.name" @keyup.enter="addItem">
        <font-awesome-icon
            icon="plus-square"
            @click="addItem"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item: {
                    name: ''
                }
            }
        },
        methods: {
            addItem() {
                if (this.item.name === ''){
                    return ;
                }
                axios.post('api/item/store', {
                    item: this.item
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                    .then( response => {
                        if (response.status === 201){
                            this.item.name = '';
                            this.$emit('saveItem')
                        }
                    })
                    .catch( error => {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>
    .addItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input{
        background-color: #f7f7f7;
        border: 0px;
        outline: none;
        padding: 5px;
        margin-right: 10px;
        width: 100%;
    }
    .plus {
        font-size: 20px;
    }
    .active {
        color: #08f632;
    }
    .inactive {
        color: #999999;
    }
</style>
