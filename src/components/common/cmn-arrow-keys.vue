<template>
    <div class="no-wrap text-center">
        <div>
            <cmn-key icon>
                <span>
                    <i class="feather-chevron-up"></i>
                </span>
            </cmn-key>
        </div>
        <div>
            <cmn-key icon>
                <span>
                    <i class="feather-chevron-left"></i>
                </span>
            </cmn-key>
            <cmn-key icon>
                <span>
                    <i class="feather-chevron-down"></i>
                </span>
            </cmn-key>
            <cmn-key icon>
                <span>
                    <i class="feather-chevron-right"></i>
                </span>
            </cmn-key>
        </div>
    </div>
</template>

<script>
    import CmnKey from "./cmn-key";
    export default {
        name: "cmn-arrow-keys",
        components: {CmnKey}
    }
</script>

<style scoped>

</style>