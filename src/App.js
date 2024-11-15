import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import "./App.css";

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        tasklist={tasklist}
        setTasklist={setTasklist}
      />
      <ShowTask
        task={task}
        setTask={setTask}
        tasklist={tasklist}
        setTasklist={setTasklist}
      />
    </div>
  );
}

export default App;
