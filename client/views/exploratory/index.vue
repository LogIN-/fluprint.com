<template>
    <div>
           <component :is="page"></component>
    </div>
</template>
<script>
import { analysis, edge } from "./components";

export default {
    name: "Exploratory",
    props: {
        page: {
            default: "edge",
            type: [String]
        }
    },
    components: {
        analysis,
        edge
    },
    data() {
        return {};
    },
    mounted() {
        console.log("Exploratory mounted");
    }
};
</script>
