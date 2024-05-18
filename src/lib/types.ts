export enum Estado {
    WAITING,
    INPROGRESS,
    COMPLETED
}

export type History = {
  changedDate:Date
  previusStatus :Estado
  actualStatus : Estado
}

export type Task = {
  name: String
  description: String
  status:Estado
  history : History[]
}

export type Person = {
  name : String
  email : undefined | String
}

export type Tag = {
  color : String
  tag : String
}

export type ganttEvent = {
  id: number
  startDate : Date
  endDate : Date
  title : String 
  description: String
  tasks : Task[]
  timeStritct: Boolean
  assignees : Person[]
  tags: Tag[]
  creator : Person
  created_at: Date
  updated_at: undefined | Date
}