import './App.css';
import { AppRouter } from './routes/AppRouter';
import { QuestionProvider } from './context/QuestionsContext';

function App() {
  return (
    <QuestionProvider>
        <AppRouter />
    </QuestionProvider>
  );
}

export default App;
