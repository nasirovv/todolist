<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <list-item
                :item="item"
                @updateItem="$emit('reloadList')"
                @removeItem="$emit('reloadList')"
                class="item"
            />
        </div>
    </div>
</template>

<script>
import listItem from "./listItem";

export default {
    props: ['items'],
    components: {
        listItem
    }
}
</script>

<style scoped>
    .item{
        background-color: #e6e6e6;
        margin-top: 5px;
    }
</style>
