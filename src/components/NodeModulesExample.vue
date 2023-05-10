<script>
import Button from 'primevue/button';

export default {
    name: 'NodeModulesExample',
    extends: Button,
    props: {
        description: {
            type: String,
            default: "node_modules"
        }
    }
}

</script>