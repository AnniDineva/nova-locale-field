import IndexField from './components/IndexField.vue';
import DetailField from './components/DetailField.vue';
import FormField from './components/FormField.vue';


// Nova v4 Field Registration
window.Nova.booting((app, store) => {
    app.component('index-nova-locale-field', IndexField)
    app.component('detail-nova-locale-field', DetailField)
    app.component('form-nova-locale-field', FormField)
})