const Jsflagr = require('jsflagr')

const flagrClient = new Jsflagr.ApiClient()

flagrClient.basePath = process.env.VUE_APP_FLAGR_BASEPATH

flagrClient.defaultHeaders = {
  Authorization: process.env.VUE_APP_FLAGR_AUTH
}

const getBatchEvaluationFromFlagr = (flagKeys) => {
  const apiInstance = new Jsflagr.EvaluationApi(flagrClient)
  const body = new Jsflagr.EvaluationBatchRequest.constructFromObject(
    {
      "entities": [{}],
      "flagKeys": flagKeys
    }
  )

  return new Promise((resolve, reject) => {
    apiInstance.postEvaluationBatch(body, (error, data, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(data, response)
      }
    })
  })
}

const getFlagsFromFlagr = () => {
  const apiInstance = new Jsflagr.FlagApi(flagrClient)
  const opts = {
    tags: process.env.VUE_APP_FLAGR_TAGS
  }

  return new Promise((resolve, reject) => {
    apiInstance.findFlags(opts, (error, data, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(data, response)
      }
    })
  })
}

export const postEvaluationBatch = async (flagKeys) => {
  const feature = await getBatchEvaluationFromFlagr(flagKeys)
  return feature.evaluationResults
}

export const findFlags = async () => {
  const flags = await getFlagsFromFlagr()
  return flags
}
