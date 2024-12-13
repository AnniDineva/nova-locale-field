import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

// Nova v4 Field Registration
window.Nova.booting((app, store) => {
    app.component('index-nova-locale-field', IndexField)
    app.component('detail-nova-locale-field', DetailField)
    app.component('form-nova-locale-field', FormField)
})