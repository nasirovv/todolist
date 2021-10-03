<template>
    <div class="item-block">
        <input type="checkbox"
               v-model="item.completed"
                @change="updateCheck"
        />
        <span
            :class="[item.completed ? 'line' : 'notline', 'item-name']"
        >{{ item.name }}</span>
        <button @click="removeItem">
        <font-awesome-icon icon="trash"
            class="trash-icon"
        />
        </button>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        updateCheck() {
            axios.put('api/item/'+ this.item.id, {
                item: this.item
            },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then( response => {
                    if ( response.status === 200 ){
                        this.$emit('updateItem');
                    }
                })
            .catch( error => {
                console.log(error);
            })
        },
        removeItem() {
            axios.delete('api/item/' + this.item.id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( response => {
                if (response.status === 200){
                    this.$emit('removeItem')
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>


<style scoped>
    .item-block{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 20px 5px 20px;
    }
    .item-name{
        color: #718096;
        margin-left: 10px;
        margin-right: auto;
    }
    .trash-icon{
        color: red;
    }
    .line{
        text-decoration: line-through;
    }
    .notline{
        text-decoration: none;
    }
    button{
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>
