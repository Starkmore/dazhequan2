webpackJsonp([0],{21:function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _style = __webpack_require__(4);\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _method = __webpack_require__(0);\n\nvar _method2 = _interopRequireDefault(_method);\n\nvar _route = __webpack_require__(3);\n\nvar _route2 = _interopRequireDefault(_route);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_route2.default.init();\n\n//注册menu下拉菜单事件。\n_method2.default.addevent(window, 'click', function (event) {\n  var dropmenu = document.getElementsByClassName('dropdown-menu')[0];\n  dropmenu.style.display = 'none';\n});\nvar menu = document.getElementById('menu');\n_method2.default.addevent(menu, 'click', function dropdowntoogle(event) {\n  event.stopPropagation();\n  var dropmenu = document.getElementsByClassName('dropdown-menu')[0];\n  var state = dropmenu.style.display;\n  if (state === 'block') {\n    dropmenu.style.display = 'none';\n  } else {\n    dropmenu.style.display = 'block';\n  }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzP2Y1N2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3N0eWxlID0gcmVxdWlyZSgnLi9jc3Mvc3R5bGUuc2NzcycpO1xuXG52YXIgX3N0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlKTtcblxudmFyIF9tZXRob2QgPSByZXF1aXJlKCcuL21ldGhvZC9tZXRob2QnKTtcblxudmFyIF9tZXRob2QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWV0aG9kKTtcblxudmFyIF9yb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGVyL3JvdXRlJyk7XG5cbnZhciBfcm91dGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5fcm91dGUyLmRlZmF1bHQuaW5pdCgpO1xuXG4vL+azqOWGjG1lbnXkuIvmi4noj5zljZXkuovku7bjgIJcbl9tZXRob2QyLmRlZmF1bHQuYWRkZXZlbnQod2luZG93LCAnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGRyb3BtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24tbWVudScpWzBdO1xuICBkcm9wbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG52YXIgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5fbWV0aG9kMi5kZWZhdWx0LmFkZGV2ZW50KG1lbnUsICdjbGljaycsIGZ1bmN0aW9uIGRyb3Bkb3dudG9vZ2xlKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB2YXIgZHJvcG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bi1tZW51JylbMF07XG4gIHZhciBzdGF0ZSA9IGRyb3BtZW51LnN0eWxlLmRpc3BsYXk7XG4gIGlmIChzdGF0ZSA9PT0gJ2Jsb2NrJykge1xuICAgIGRyb3BtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSB7XG4gICAgZHJvcG1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==")}},[21]);