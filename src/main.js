import Vue from 'vue'
import App from './App.vue'

/**
 * before import/require `jsflagr` we need to config webpack
 * check vue.config.file
 */

var Jsflagr = require('jsflagr');

const flagrClient = new Jsflagr.ApiClient()

/**
 * override basePath and defaultHeaders
 */
flagrClient.basePath = process.env.VUE_APP_FLAGR_BASEPATH
flagrClient.defaultHeaders = {
  Authorization: process.env.VUE_APP_FLAGR_AUTH 
}

const flagrEvaluation = new Jsflagr.EvaluationApi(flagrClient)

// var flagID = 1; // {Number} numeric ID of the flag

var body = Jsflagr.EvalContext.constructFromObject({
 flagID: 1
});

var callback = function(error, data, /* response */) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

flagrEvaluation.postEvaluation(body, callback)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
