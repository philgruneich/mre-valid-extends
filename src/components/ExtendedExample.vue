<script>
import Example from './Example.vue';

export default {
    name: 'ExtendedExample',
    extends: Example,
    props: {
        description: {
            type: String,
            default: "EXTENDED"
        }
    }
}

</script>