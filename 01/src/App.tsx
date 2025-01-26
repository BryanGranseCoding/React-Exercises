import CalculateGrade from './components/calculations/CalculateGrade';
import './App.css'

function App() {
  
  return (
    <>
    <CalculateGrade studentScore={80} gradeItems={150} />
    </>
  )
}

export default App
