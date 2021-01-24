<template>
    <button @click.prevent.stop="click" :disabled="disabled" :tabindex=" disabled===true ? '-1' : '0'" >
        {{text}}
        <i v-if="icon" :class="icon"></i>
    </button>
</template>

<script>
    export default {
        name: "cmn-button",
        props: {
            icon: {
                type: String,
                default: null
            },
            text: {
                type: String,
                required: true
            },
            onClick: {
                type: Function,
                default: null
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            click() {
                this.onClick();
            }
        }
    }
</script>

<style scoped>

</style>