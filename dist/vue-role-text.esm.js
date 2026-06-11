var script = {
  name: 'RoleText',
  props: {
    msgKey: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'span',
    },
  },
  render(h) {
    return h(this.tag, this.$rt(this.msgKey))
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__);

const DEFAULT_STORAGE_KEY = 'roleTextRole';

function install(Vue, options = {}) {
  const { messages = {}, storageKey = DEFAULT_STORAGE_KEY } = options;

  function readStoredRole() {
    return localStorage.getItem(storageKey)
  }

  function persistRole(role) {
    if (role == null || role === '') {
      localStorage.removeItem(storageKey);
      return
    }
    localStorage.setItem(storageKey, role);
  }

  const state = Vue.observable({
    role: readStoredRole(),
    messages,
  });

  function $rt(key) {
    const roleMessages = state.messages[state.role] || {};
    return key in roleMessages ? roleMessages[key] : key
  }

  $rt.setRole = function (role) {
    state.role = role;
    persistRole(role);
  };

  $rt.setMessages = function (nextMessages) {
    state.messages = nextMessages;
  };

  Object.defineProperty(Vue.prototype, '$rt', {
    get() {
      return $rt
    },
  });

  Vue.component('role-text', __vue_component__);
}

var index = { install };

export { index as default };
