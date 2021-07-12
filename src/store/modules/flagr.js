import { postEvaluationBatch, findFlags } from '../../utils/flagr'

const state = {
  allFlags: [],
  enabledFlags: [],
  flagEvaluation: []
}

const getters = {
  getAllFlags: (state) => {
    return state.allFlags
  },
  getEnabledFlags: (state) => {
    return state.enabledFlags
  },
  getFlagEvaluation: (state) => {
    return state.flagEvaluation
  }
}

const actions = {
  initFlagr: async ({ commit }) => {
    const payload = await findFlags({ tags: process.env.VUE_APP_FLAGR_TAGS })
    await commit('INIT_FLAGR', payload)

    const evaluation = await postEvaluationBatch({ 
        entities: [{}],
        flagKeys: state.enabledFlags 
      })
    await commit('EVALUATE_FLAGR', evaluation)
  },
}

const mutations = {
  INIT_FLAGR: (state, payload) => {
    state.allFlags = payload.map(v => v.key)
    state.enabledFlags = payload.filter(v => v.enabled).map(v => v.key)
  },

  EVALUATE_FLAGR: (state, payload) => {
    state.flagEvaluation = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}