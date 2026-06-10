import RoleText from './RoleText.vue'

function install(Vue, options = {}) {
  const { messages = {} } = options

  const state = Vue.observable({
    role: null,
    messages,
  })

  function $rt(key) {
    const roleMessages = state.messages[state.role] || {}
    return key in roleMessages ? roleMessages[key] : key
  }

  $rt.setRole = function (role) {
    state.role = role
  }

  $rt.setMessages = function (messages) {
    state.messages = messages
  }

  Object.defineProperty(Vue.prototype, '$rt', {
    get() {
      return $rt
    },
  })

  Vue.component('role-text', RoleText)
}

export default { install }
