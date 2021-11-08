module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      vbg: '#282a35',
      vgreen: '#85f589',
      footer: '#fa78c4'
    }),
    textColor: theme => ({
      ...theme('colors'),
      vgreen: '#85f589'
    })

  }
}
