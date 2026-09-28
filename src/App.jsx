import { useState } from "react";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";
import "./index.css";
import { TodosContext } from "./Contexts/todosContext";
import { v4 as uuidv4 } from "uuid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c62828",
    },
  },
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "اسم المهمة",
    details: "تفاصيل المهمة",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة قرآن",
    details: "قراءة لمدة ساعة",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#191b1f",
            direction: "rtl",
          }}
        >
          <TodosContext.Provider value={{ todos, setTodos }}>
            <ToDoList />
          </TodosContext.Provider>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
