import { useState } from 'react'

import MainLogo from './assets/Logo.svg'
import CreateLogo from './assets/Plus.svg'
import DeleteIcon from './assets/Trash.svg'

import {
  Container,
  Header,
  Content,
  SearchInput,
  ListHeader,
  ListContent,
  ToDoList,
  Tag,
  Task,
  TaskContent
} from './styles'

interface TaskData {
  id: number
  description: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [tempTask, setTempTask] = useState<string>('')
  console.log(tasks)

  return (
    <Container>
      <Header>
        <img src={MainLogo} alt="Logo da lista de tarefas" />
      </Header>
      <Content>
        <SearchInput>
          <input
            maxLength={200}
            type="text"
            name="search"
            placeholder="Adicione uma nova tarefa"
            value={tempTask}
            onChange={(evt) => {
              setTempTask(evt.target.value)
            }}
          />

          <button
            disabled={tempTask.length === 0}
            onClick={() => {
              setTasks([
                ...tasks,
                {
                  id: Math.floor(Math.random() * 1000) + 1,
                  description: tempTask,
                  completed: false
                }
              ])
              setTempTask('')
            }}
          >
            Criar <img src={CreateLogo} alt="Ícone de criar" />
          </button>
        </SearchInput>
        <ToDoList>
          <ListHeader>
            <Tag>
              <h4>Tarefas criadas</h4>
              <h4>{tasks.length}</h4>
            </Tag>
            <Tag>
              <h4>Concluídas</h4>
              <h4>
                {
                  tasks.filter((e) => {
                    return e.completed === true
                  }).length
                }{' '}
                de {tasks.length}
              </h4>
            </Tag>
          </ListHeader>
          <ListContent>
            {tasks.map((element, i: number) => {
              return (
                <Task key={element.id}>
                  <TaskContent>
                    <input
                      type="checkbox"
                      checked={element.completed}
                      onChange={() => {
                        tasks[i].completed = !element.completed
                        setTasks([...tasks])
                      }}
                    />
                    <h4
                      style={{
                        opacity: tasks[i].completed ? '0.4' : '1',
                        textDecoration: tasks[i].completed
                          ? 'line-through'
                          : 'auto'
                      }}
                    >
                      {element.description}
                    </h4>
                  </TaskContent>
                  <img
                    src={DeleteIcon}
                    alt="Deletar tarefa"
                    onClick={() => {
                      setTasks(tasks.filter((task) => task.id !== element.id))
                    }}
                  />
                </Task>
              )
            })}
          </ListContent>
        </ToDoList>
      </Content>
    </Container>
  )
}

export default App
