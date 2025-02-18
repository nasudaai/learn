const props = [
  {id: 1, name: "ume"},
  {id:2 , name: "hayashi"},
  {id: 3, name: "okada"},
]

console.log(props)


const [{name}, ,{name3}] = props

console.log(name, name3)
