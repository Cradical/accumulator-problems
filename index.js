const projects = ['a', 'b', 'c', 'd', 'e', 'f']
const dependencies = [
  ['d', 'a'],
  ['b', 'f'],
  ['d', 'b'],
  ['a', 'f'],
  ['c', 'd'],
]
const output = []

const checkProjectDependency = (project, dependencies) => {
  dependencies.forEach(dependency => {
    let searchProject = dependency[0]
    let installProject = dependency[1]

    if (project === searchProject && !output.includes(installProject)) {
      output.push(installProject)
    }
  })
}

const installPackages = (projects, dependencies) => {
  projects.reverse()
  projects.forEach(project => {
    checkProjectDependency(project, dependencies)

    if (!output.includes(project)) {
      output.push(project)
    }
  })
}

installPackages(projects, dependencies)
