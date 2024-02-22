/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1141' : '1141px',
        '516' : '516px',
        '342' : '342px',
        '237' : '237px',
        '286' : '286px',
        '473' : '473px',
        '592' : '592px',
        '126' : '126px',
        '753' : '753px',
        '442' : '442px',
        '1140' : '1140px',
        '867' : '867px',
        '367' : '367px',
        '421' : '421px',
        '232' : '232px',
        '47' : '47px',
        '217' : '217px',
        '1140' : '1140px',
        '144' : '144px',
        '1440' : '1440px',
        '384' : '384px',
        '230' : '230px',
        '110' : '110px',
        '373' : '373px',
        '65' : '65px',
        '56' : '56px',
        '3' : '3px',
        '15' : '15px',
        '36' : '36px',

      },
      backgroundImage: {
        'gradients': 'linear-gradient(260.3843deg, #5C1E03 22.59%, rgba(117, 6, 6, 0.540837) 109.46%)',
        'image' : "url('src/assets/img/section.png')"
      },
      fontSize: {
        '64' : '64px',
        '41' : '41px',

      },
      colors: {
        'red' : 'rgb(255, 0, 0)',
        'grey' : 'rgb(206, 206, 206)',
      }
      
    },
  },
  plugins: [],
}
