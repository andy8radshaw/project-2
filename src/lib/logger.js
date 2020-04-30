const getType = value => {
  if (value === null) return 'null'
  if (typeof (value) === 'object') {
    if (value.length === 'undefined') return 'object'
    return 'array'
  }
  return typeof (value)
}

const valueToString = value => {
  if (typeof (value) === 'function') return '> Function >'
  const stringValue = JSON.stringify(value)
  if (stringValue.length > 399) return stringValue.substr(0, 400) + '...'
  return stringValue
}

const buildObjectLog = obj => {
  if (!Object.keys(obj).length) return '   None'
  const values = []
  for (const key in obj) {
    values.push([key, obj[key]])
  }
  return values.reduce((str, curr) => {
    const [key, value] = curr
    return str + `      ${key}: ${valueToString(value)} --- type: ${getType(value)} \n`
  }, '  {   \n') + '    }'
}


export const logState = (name, state = {}) => {
  logState.renders++
  console.log(`
  %c**************************************
  %c🔴 STATE UPDATED
  %c💻 IN ${name} COMPONENT
  %c🧐 TOTAL RENDERS: ${logState.renders}
  %c👵 OLD STATE
  %c${buildObjectLog(logState.prev)}
  %c🤖 RE RENDERING
  %c🐣 NEW STATE
  %c${buildObjectLog(state)}
  %c***************************************
  `,
  'color:mediumseagreen'
  ,
  'color:lightseagreen'
  ,
  'color:cadetblue'
  ,
  'color:deepskyblue'
  ,
  'color:red'
  ,
  'color:lightslategray'
  ,
  'color:darkorchid'
  ,
  'color:coral'
  ,
  'color:rebeccapurple'
  ,
  'color:green'
  )
  logState.prev = state
}

logState.renders = 0
logState.prev = {}

export const logProps = (name, props = {}) => {
  logProps.renders++
  console.log(`
  %c**************************************************
  %c🔵 PROPS UPDATED 
  %c💻 IN ${name} COMPONENT
  %c🧐 TOTAL RENDERS: ${logProps.renders}   
  %c👵 OLD STATE
  %c${buildObjectLog(logProps.prev)}
  %c🤖 RE RENDERING            
  %c🐣 NEW PROPS 
  %c${buildObjectLog(props)}
  ****************************************************
  `,
  'color:mediumseagreen'
  ,
  'color:lightseagreen'
  ,
  'color:cadetblue'
  ,
  'color:deepskyblue'
  ,
  'color:red'
  ,
  'color:lightslategray'
  ,
  'color:darkorchid'
  ,
  'color:coral'
  ,
  'color:rebeccapurple'
  ,
  'color:green'
  )
  logState.prev = props
}

logProps.renders = 0
logState.prev = {}

export const logStateAndProps = (name, state = {}, props = {}) => {
  logStateAndProps.renders++
  console.log(`****************************************************
  %c🔴 STATE OR PROPS UPDATED 
  %c💻 IN ${name} COMPONENT 
  %c🧐 TOTAL RENDERS: ${logProps.renders}  
  %c👵 OLD STATE
  %c${buildObjectLog(logStateAndProps.prevState)}
  %c👴 OLD PROPS
  %c${buildObjectLog(logStateAndProps.prevProps)}
  %c🤖 RE RENDERING            
  %c✨ NEW STATE 
  %c${buildObjectLog(state)}           
  %c✨ NEW PROPS 
  %c${buildObjectLog(props)}
*******************************************************************
  `,
  'color:mediumseagreen'
  ,
  'color:lightseagreen'
  ,
  'color:cadetblue'
  ,
  'color:deepskyblue'
  ,
  'color:red'
  ,
  'color:lightslategray'
  ,
  'color:darkorchid'
  ,
  'color:coral'
  ,
  'color:rebeccapurple'
  ,
  'color:green'
  )
  logStateAndProps.prevProps = props
  logStateAndProps.prevState = state
}

logStateAndProps.renders = 0
logStateAndProps.prevState = {}
logStateAndProps.prevProps = {}