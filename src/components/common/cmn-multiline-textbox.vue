<template>
    <textarea
            tabindex="0"
            autocomplete="off"
            ref="inputElement"
            :minlength="minLength"
            :maxlength="maxLength"
            :required="required"
            :rows="rows"
            :spellcheck="spellcheck"
            :placeholder="placeholder"
            v-model="value"
    >
    </textarea>
</template>

<script>
    export default {
        name: "cmn-multiline-textbox",
        data() {return {
            value: undefined,
            isValid: undefined
        }},
        props: {
            placeholder: {
                type: String,
                default: ""
            },
            required: {
                type: Boolean,
                default: false
            },
            minLength: {
                type: Number,
                default: 0
            },
            maxLength: {
                type: Number,
                default: 1000
            },
            rows: {
                type: Number,
                default: 10
            },
            spellcheck: {
                type: String,
                default: "true"
            },
        },
        watch: {
            value() {
                this.validate();
            }
        },
        emits: ['update:isValid', 'update:value'],
        methods: {
            validate() {
                const inputElement = this.$refs.inputElement;
                inputElement.checkValidity();
                this.isValid = inputElement.validity.valid;
                this.$emit("update:isValid", this.isValid);
                this.$emit("update:value", this.value);
                // console.log(`'${this.value}' is valid: `, this.isValid);
                // console.log(inputElement.validity)
            }
        }
    }
</script>

<style scoped>
    textarea {
        resize: vertical;
    }
</style>