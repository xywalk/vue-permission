function VuePermission() {
  // permission is hash able object.
  this.permissions = {};
};

VuePermission.prototype.hasPermission = function(permission) {
  return this.permissions.hasOwnProperty(permission);
};

VuePermission.prototype.authorize = function(permissions) {
  this.permissions = Object.assign(this.permissions, permissions);
};

const permissionIns = new VuePermission();

const Plugin = {

  install(Vue, options) {

    Vue.permission = permissionIns;

    Object.defineProperties(Vue.prototype, {
      $permission: {
        get() {
          return permissionIns
        }
      }
    });

    Vue.directive('permission', function (el, binding) {
      if (typeof binding.expression === 'string') {
        const flag = permissionIns.hasPermission(binding.expression);
        if (!flag) {
          el.style.display = 'none';
        }
      }
    })
  }
};

export default Plugin;