<template>
    <div v-show="showFlag class="food move-transtion">

    </div>  
</template>

<script>
    export default {
        data() {
            return {
                food: {}
            }
        },
        props: {
            food: {
                type: Object
            }
        },
        data() {
            return {
                showFlag:false
            }
        },
        methods: {
            show() {
                this.showFlag = true
            }
        }
    }
</script>

<style>
.food{position:fixed;left:0;top:0;bottom:48px;z-index:30;width:100%;background:#fff;}
.move-transtion{transition:all 0.2s linear;transform:translate3d(0,0,0);}
</style>
