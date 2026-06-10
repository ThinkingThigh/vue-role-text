import RoleText from './RoleText.vue'

const DEFAULT_STORAGE_KEY = 'roleTextRole'

function install(Vue, options = {}) {
  const { messages = {}, storageKey = DEFAULT_STORAGE_KEY } = options

  function readStoredRole() {
    return localStorage.getItem(storageKey)
  }

  function persistRole(role) {
    if (role == null || role === '') {
      localStorage.removeItem(storageKey)
      return
    }
    localStorage.setItem(storageKey, role)
  }

  const state = Vue.observable({
    role: readStoredRole(),
    messages,
  })

  function $rt(key) {
    const roleMessages = state.messages[state.role] || {}
    return key in roleMessages ? roleMessages[key] : key
  }

  $rt.setRole = function (role) {
    state.role = role
    persistRole(role)
  }

  $rt.setMessages = function (nextMessages) {
    state.messages = nextMessages
  }

  Object.defineProperty(Vue.prototype, '$rt', {
    get() {
      return $rt
    },
  })

  Vue.component('role-text', RoleText)
}

export default { install }
