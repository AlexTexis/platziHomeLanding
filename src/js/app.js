const courses = [
  'Desarrollo Javascript',
  'Desarrollo Web Online',
  'Desarollo con React',
  'Desarollo con Php'
]

const badgeCourses = [
  './dist/images/badge-desarrollador-JS2.webp',
  './dist/images/badge-arquitecto-frontend.webp',
  './dist/images/badge-carrera-desarrollador-react.webp',
  './dist/images/badge-lamp.webp'
]
let countCourse= 0;

const courseTitle = document.getElementById('coursesTitles')
const badgeCarrera = document.getElementById('badgeCarrera')
const coursesIteration = document.getElementById('coursesIteration')

function fadeCourses()
{
  iterateCourse();
}

function iterateCourse()
{
  let courseName = '';
  for(let i = 0;i < courses.length;i++)
  {
    setTimeout(()=> {
      console.log('add')
      courseName = courses[i];
      badgeCarrera.setAttribute('src',badgeCourses[i])
      courseTitle.textContent = courseName;
      if(i === 3)
      {
        console.log('acabe la iteracion')
        reloadIteration()
      }
    },3000 * i)  
  }
}

function reloadIteration()
{
  console.log('volver a iterar en 3s....')
  setTimeout(()=>iterateCourse(), 3000)
}

fadeCourses()
