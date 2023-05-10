<script>
import Example from '../invalid_extend/Example.vue';

export default {
    name: 'InvalidExtendExample',
    extends: Example,
    props: {
        description: {
            type: String,
            default: "invalid_extend"
        }
    }
}

</script>