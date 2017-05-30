var example1 = new Vue({
  el: '#app',
  data: {
    counter: 0,
    name: 'God\'s son ',
    message: 'grace be upon you',
    checkedNames: [],
    picked: '',
    selected: []
  },
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
     say: function (message) {
      alert(message)
    }
  }
})