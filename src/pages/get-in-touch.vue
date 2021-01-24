<template>
    <div>
<!--        <h1>I am currently open to startup opportunities, contract, and freelance work.</h1>-->

        <div class="form">
            <cmn-textbox :min-length="nameMinLength" :max-length="nameMaxLength" placeholder="First Name" required
                         pattern="^[a-zA-Z]+$"
                         capitalize-first-letter
                         v-model:value="formData.firstName"
                         v-model:isValid="formValid.firstName"
            />
            <cmn-validation-status-icon :status="formValid.firstName">
                <template v-slot:valid>
                    👈✅😊
                </template>
                <template v-slot:invalid>
                    👈❌😑
                </template>
            </cmn-validation-status-icon>
            <cmn-textbox :min-length="nameMinLength" :max-length="nameMaxLength" placeholder="Last Name" required
                         pattern="^[a-zA-Z]+$"
                         capitalize-first-letter
                         v-model:value="formData.lastName"
                         v-model:isValid="formValid.lastName"
            />
            <cmn-validation-status-icon :status="formValid.lastName">
                <template v-slot:valid>
                    😊✅👉
                </template>
                <template v-slot:invalid>
                    😑❌👉
                </template>
            </cmn-validation-status-icon>
            <cmn-textbox :min-length="nameMinLength" :max-length="nameMaxLength" placeholder="Email Address" required
                         pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                         v-model:value="formData.email"
                         v-model:isValid="formValid.email"
            />
            <cmn-validation-status-icon :status="formValid.email">
                <template v-slot:valid>
                    👈✅😊
                </template>
                <template v-slot:invalid>
                    👈❌😑
                </template>
            </cmn-validation-status-icon>
            <cmn-multiline-textbox :min-length="50" :rows="10" required placeholder="Message"
                    v-model:value="formData.message"
                    v-model:isValid="formValid.message"
            />
            <cmn-validation-status-icon :status="formValid.message">
                <template v-slot:valid>
                    😊✅👉
                </template>
                <template v-slot:invalid>
                    😑❌👉
                </template>
            </cmn-validation-status-icon>

            <div class="text-center btn-container">
                <cmn-button text="Send" icon="feather-send" :disabled="disableSend" />
            </div>
        </div>
    </div>
</template>

<script>
    import CmnTextbox from "../components/common/cmn-textbox";
    import CmnValidationStatusIcon from "../components/common/cmn-validation-status-icon";
    import CmnButton from "../components/common/cmn-button";
    import CmnMultilineTextbox from "../components/common/cmn-multiline-textbox";
    export default {
        name: "get-in-touch",
        components: {CmnMultilineTextbox, CmnButton, CmnValidationStatusIcon, CmnTextbox},
        data() { return {
            nameMinLength: 3,
            nameMaxLength: 50,
            // email: "tej.birring@gmail.com"
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            },
            formValid: {
                firstName: undefined,
                lastName: undefined,
                email: undefined,
                message: undefined
            }
        }},
        computed: {
            disableSend() {
                let disable = false;
                for ( const property in this.formValid ) {
                    disable |= !this.formValid[property];
                }
                console.log(disable)
                return !!disable;
            }
        }
    }
</script>

<style scoped lang="scss">
    .form {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr;
        @media (max-width: $breakpoint-portrait-tablet) {
            grid-template-columns: 1fr 2fr 2fr 1fr;
        }
        grid-template-rows: repeat(6, auto);

        & input[placeholder="First Name"] {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 2;
        }

        & input[placeholder="First Name"] + .status-icon {
            grid-column-start: 4;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 2;
            justify-self: start;
            margin-left: 1rem;
        }

        & input[placeholder="Last Name"] {
            grid-column-start: 2;
            grid-column-end: 5;
            grid-row-start: 2;
            grid-row-end: 3;
        }

        & input[placeholder="Last Name"] + .status-icon {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 2;
            grid-row-end: 3;
            justify-self: end;
            margin-right: 1rem;
        }

        & input[placeholder="Email Address"] {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 3;
            grid-row-end: 4;
        }

        & input[placeholder="Email Address"] + .status-icon {
            grid-column-start: 4;
            grid-column-end: 5;
            grid-row-start: 3;
            grid-row-end: 4;
            justify-self: start;
            margin-left: 1rem;
        }

        & textarea[placeholder="Message"] {
            grid-column-start: 2;
            grid-column-end: 5;
            grid-row-start: 4;
            grid-row-end: 5;
        }

        & input[placeholder="Message"] + .status-icon {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 4;
            grid-row-end: 5;
            justify-self: end;
            margin-right: 1rem;
        }

        & div.btn-container {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 5;
            grid-row-end: 6;
        }

        row-gap: 1rem;
    }

    .status-icon {
        font-size: 2rem;
        white-space: nowrap;
        align-self: center;
    }
</style>

