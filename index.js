// Dark Mode Effect
const options = {
   bottom: '32rem', // default: '32px'
   right: '30px', // default: '32px'
   left: 'unset', // default: 'unset'
   time: '0.5s', // default: '0.3s'
   mixColor: '#fff', // default: '#fff'
   backgroundColor: '#fff',  // default: '#fff'
   buttonColorDark: '#100f2c',  // default: '#100f2c'
   buttonColorLight: '#fff', // default: '#fff'
   saveInCookies: true, // default: true,
   label: '🌓', // default: ''
   autoMatchOsTheme: true // default: true
 }
 
 const darkmode = new Darkmode(options);
 darkmode.showWidget();



