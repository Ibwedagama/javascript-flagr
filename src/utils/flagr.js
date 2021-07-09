/**
 * !important
 * before import/require `jsflagr` we need to config webpack
 * check vue.config.file
 */

const Jsflagr = require('jsflagr')

const flagrClient = new Jsflagr.ApiClient()

/**
 * Setup a custom base path/URI to connect to self-hosted Flagr server
 */
flagrClient.basePath = process.env.VUE_APP_FLAGR_BASEPATH

/**
 * todo: Learn what auth method/service the self-hosted Flagr use?
 * ? Are all route protected?
 */
flagrClient.defaultHeaders = {
  Authorization: process.env.VUE_APP_FLAGR_AUTH
}

const getFeatureFromFlagrAPI = () => {

  /**
  * Create new API instance for getting Evaluation data
  */
  const apiInstance = new Jsflagr.EvaluationApi(flagrClient)


  /**
   * To use postEvaluationBatch, we need to add parameters
   * read more: https://checkr.github.io/flagr/api_docs/#operation/postEvaluationBatch
   */
  const body = new Jsflagr.EvaluationBatchRequest.constructFromObject( 
    {
      "entities": [{}],
      "flagTags": [
        process.env.VUE_APP_FLAGR_TAGS
      ],
    }
  )

  return new Promise((resolve, reject) => {
    apiInstance.postEvaluationBatch(body, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })

}

const getFlags = async () => {
  const feature = await getFeatureFromFlagrAPI()
  return feature.evaluationResults 
}

export default getFlags

/**
 * TODO:
 * - need to find the best way to store this data
 */

/**
 * ? How the clients know when something is updated on Flagr server?
 */