var csInterface = new CSInterface();

Vue.component('my-component', {
  template: '<div>A custom component!</div>'
});

new Vue({
  el: '#app',
  data: {
    message: 'Bonjour Vue.js!',
    version: 'Click here to see'
  },
  methods: {
    getAppVersion: function (event) {
      vueApp = this;
      csInterface.evalScript("executeCodeInsideApp()", function(result) {
        vueApp.version = result;
      });
    }
  }
});